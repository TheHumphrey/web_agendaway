import React, { useState, useEffect } from "react";


import { Table } from "react-bootstrap";

import Body from "./TableBody";

import firebase from '../../configs/firebase';

const TableAgenda = () => {

  const [agendamento, setAgendamentos] = useState([]);
  let listaReuniao = [];

  useEffect(() => {
    firebase.firestore().collection('agendamento').get().then(async (resultado) => {
      await resultado.docs.forEach(doc => {
        listaReuniao.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setAgendamentos(listaReuniao);
    })
  }, []);

  return (
    <Table>
      <thead>
        <tr style={{ textAlign: "center" }}>
          <th>Nome</th>
          <th>Data</th>
          <th>Dia da Semana</th>
          <th>Horário Inicio</th>
          <th>Horário Fim</th>
        </tr>
      </thead>
      <tbody>
        {agendamento.map((item, index) => (
          <Body data={item} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableAgenda;