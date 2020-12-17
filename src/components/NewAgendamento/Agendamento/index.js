import React, { useEffect, useState } from "react";
import firebase from "firebase";

import { FormControl, Button } from "react-bootstrap";

import Container from "./style";

const Agendamento = () => {
  const [name, setName] = useState();
  const [data, setData] = useState();
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();
  const [isOk, setIsOk] = useState(false);
  const db = firebase.firestore();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const cadastrar = () => {
    db.collection("agendamento")
      .add({
        name,
        data,
        start: timeStart,
        finish: timeEnd,
      })
      .then(() => {})
      .catch((erro) => {});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && data && timeStart && timeEnd) {
      cadastrar();
    } else {
      setIsOk(true);
    }
  };
  return (
    <Container>
      <h5 style={{ color: "white" }}>Adicionar</h5>
      {isOk ? (
        <span style={{ color: "red", fontWeight: "600" }}>Falha</span>
      ) : null}
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        className="input"
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        className="input"
        type="date"
        onChange={(e) => setData(e.target.value)}
        placeholder="Data"
      />
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        className="input"
        type="time"
        onChange={(e) => setTimeStart(e.target.value)}
        placeholder="Inicio da reunião"
      />
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        className="input"
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
