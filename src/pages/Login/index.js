import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";

import { Container } from "./style";

import firebase from '../../configs/firebase';
import 'firebase/auth';

const Login = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  
  const Logar = () => {
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
      setMsgTipo('sucesso')
    }).catch(erro => {
      setMsgTipo('erro')
    });
  }

  return (
    <>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>

          <Button onClick={Logar} variant="primary" type="button">
            Entrar
        </Button>
        <div className="mt-2 text-white text-center">
          {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Você está conectado! &#128526; </span>}
          {msgTipo === 'erro' && < span > <strong>Ops!</strong> Verifique o usuário e senha! &#128546;</span>}
        </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;
