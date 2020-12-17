import React from "react";

import { BodyStyle } from "./style";

const Body = ({ data }) => {
  const semana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];
  const handleToday = () => {
    const date = new Date(data.data);
    const today = semana[date.getDay() + 1];
    return today;
  };
  return (
    <BodyStyle>
      <td>{data.name}</td>
      <td>{data.data}</td>
      <td>
        <span id="weekDay" className={handleToday()}>
          {handleToday()}
        </span>
      </td>
      <td>{data.start}</td>
      <td>{data.finish}</td>
    </BodyStyle>
  );
};

export default Body;
