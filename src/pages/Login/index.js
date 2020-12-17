import { React, useState } from "react";
import { useDispatch } from 'react-redux';
import { Form, Button } from "react-bootstrap";
import { setIsAuth } from '../../store/reducers/isAuth/action'
import {Link} from 'react-router-dom'
import { Container } from "./style";

import firebase from '../../configs/firebase';
import 'firebase/auth';
import { setUser } from "../../store/reducers/user/action";

const Login = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const dispatch = useDispatch();
  // const isAuth = useSelector(state => state.isAuth);

  const Logar = () => {
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
      setMsgTipo('sucesso')
      dispatch(setIsAuth(true))
      dispatch(setUser(email))
      document.getElementById('logar').click()
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

          <Link id="logar" to='/home' />

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
