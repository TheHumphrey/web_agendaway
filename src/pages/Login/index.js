import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { setIsAuth } from "../../store/reducers/isAuth/action";
import { useHistory } from "react-router-dom";
import { Container } from "./style";

import firebase from "../../configs/firebase";
import "firebase/auth";
import { setUser } from "../../store/reducers/user/action";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState(false);
  const dispatch = useDispatch();
  // const isAuth = useSelector(state => state.isAuth);

  const Logar = (e) => {
    e.preventDefault();
    setMsgError("");

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resultado) => {
        setMsgSuccess(true);
        dispatch(setIsAuth(true));
        dispatch(setUser(email));

        setTimeout(() => {
          history.push("/home");
        }, 2000);
      })
      .catch((erro) => {
        setSenha("");
        switch (erro.code) {
          case "auth/user-not-found":
            setMsgError("Email não cadastrado, favor verificar!");
            break;
          case "auth/wrong-password":
            setMsgError("Senha incorreta favor verificar!");
            break;
          default:
            setMsgError("Erro ao fazer login!");
        }
      });
  };

  return (
    <>
      <Container>
        <Form onSubmit={(e) => Logar(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              placeholder="Password"
              value={senha}
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Entrar
          </Button>

          <div className="mt-2 text-white text-center">
            {msgSuccess && (
              <span>
                <strong>WoW! </strong> Você está conectado! &#128526;
              </span>
            )}

            {msgError && (
              <span>
                <strong>Ops! </strong>
                {msgError} &#128546;
              </span>
            )}
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;
