import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Table } from "react-bootstrap";

import Body from "./TableBody";

const TableAgenda = () => {
  const [data, setData] = useState([
    {
      name: "Fernando barros de lima",
      data: "18/12/2020",
      weekDay: "Quarta",
      start: "10:00",
      finish: "12:00",
    },
  ]);

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
        {data.map((item, index) => (
          <Body data={item} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default TableAgenda;
