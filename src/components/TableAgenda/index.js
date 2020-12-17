import React from "react";

import { Table } from "react-bootstrap";

import Body from "./TableBody";

const TableAgenda = () => {
  return (
    <Table>
      <thead>
        <tr style={{ textAlign: "center" }}>
          <th>Nome</th>
          <th>Data</th>
          <th>Dia da Semana</th>
          <th>Horário Inicio</th>
          <th>Horario Fim</th>
        </tr>
      </thead>
      <tbody>
        <Body
          data={{
            name: "Fernando barros de lima",
            data: "18/12/2020",
            weekDay: "Segunda",
            start: "10:00",
            finish: "12:00",
          }}
        />
      </tbody>
    </Table>
  );
};

export default TableAgenda;
