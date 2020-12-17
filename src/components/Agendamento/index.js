import React, { useEffect, useState } from "react";

import { FormControl, Button } from "react-bootstrap";

import Container from "./style";

const Agendamento = () => {
  const [name, setName] = useState();
  const [data, setData] = useState();
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, data, timeStart, timeEnd);
  };
  return (
    <Container>
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        type="date"
        onChange={(e) => setData(e.target.value)}
        placeholder="Data"
      />
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        type="time"
        onChange={(e) => setTimeStart(e.target.value)}
        placeholder="Inicio da reunião"
      />
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        type="time"
        onChange={(e) => setTimeEnd(e.target.value)}
        placeholder="Fim da reunião"
      />
      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </Container>
  );
};

export default Agendamento;
