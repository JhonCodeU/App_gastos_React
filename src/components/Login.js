import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Boton from './elements/Boton';
import { ContenedorBoton, Formulario, Input } from './elements/ElementsOfForm';
import { ContenedorHeader, Header, Titulo } from './elements/Header';
import { ReactComponent as SvgLogin } from '../images/login.svg';
import styled from 'styled-components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import Alert from './elements/Alert';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.25rem; /* 200px */
  margin-bottom: 1.25rem; /* 20px */
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertState, setAlertState] = useState(false);
  const [alert, setAlert] = useState({});

  const hadleChange = (e) => {

    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertState(false);
    setAlert({});

    if (email === '' || password === '') {
      setAlertState(true);
      setAlert({
        type: 'error',
        message: 'Todos los campos son obligatorios'
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAlertState(true);
      setAlert({
        type: 'success',
        message: 'La cuenta se creó correctamente'
      });
      navigate('/');

    } catch (error) {
      setAlertState(true);

      let message;
      switch (error.code) {
        case 'auth/user-not-found':
          message = 'No existe una cuenta con ese email';
          break;
        case 'auth/invalid-email':
          message = 'El email no es válido o no existe';
          break;
        case 'auth/wrong-password':
          message = 'La contraseña no es válida';
          break;
        default:
          message = 'Hubo un error al intentar crear la cuenta';
          break;
      }

      setAlert({
        type: 'error',
        message: message
      });
    }
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Login</Titulo>
          <div>
            <Boton to="/register">Register</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={hadleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={hadleChange}
        />
        <ContenedorBoton>
          <Boton as="button" primario type="submit">Login</Boton>
        </ContenedorBoton>
      </Formulario>

      <Alert
        type={alert.type}
        message={alert.message}
        alertState={alertState}
        changeAlertState={setAlertState}
      />
    </>
  );
}

export default Login;