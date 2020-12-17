import React, { useState, useEffect } from "react";

import { Table } from "react-bootstrap";

import Body from "./TableBody";

import firebase from "../../configs/firebase";

const TableAgenda = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("agendamento")
      .onSnapshot((resultado) => {
        let listaReuniao = resultado.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAgendamentos(listaReuniao);
      });
  }, []);

  return (
    <Table>
      <thead>
        <tr style={{ textAlign: "center", color: "white" }}>
          <th>Nome</th>
          <th>Date</th>
          <th>Dia da Semana</th>
          <th>Horário Inicio</th>
          <th>Horário Fim</th>
        </tr>
      </thead>
      <tbody>
        {agendamentos.map((item, index) => (
          <Body data={item} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableAgenda;
