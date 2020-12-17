import React from "react";

import { BodyStyle } from "./style";

const Body = ({ data }) => {
  return (
    <BodyStyle>
      <td>{data.name}</td>
      <td>{data.data}</td>
      <td>
        <span id="weekDay" className={data.weekDay}>
          {data.weekDay}
        </span>
      </td>
      <td>{data.start}</td>
      <td>{data.finish}</td>
    </BodyStyle>
  );
};

export default Body;
