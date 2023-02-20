import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Boton from './elements/Boton';
import { ContenedorBoton, Formulario, Input } from './elements/ElementsOfForm';
import { ContenedorHeader, Header, Titulo } from './elements/Header';
import { ReactComponent as SvgLogin } from '../images/registro.svg';
import styled from 'styled-components';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Alert from './elements/Alert';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const RegisterUsers = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [alertState, setAlertState] = useState(false);
  const [alert, setAlert] = useState({});

  const hadleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'password2':
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  }

  const RegisterUser = async (e) => {
    e.preventDefault();
    setAlertState(false);
    setAlert({});

    // regular expression to validate and password
    /* eslint-disable no-useless-escape */
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    /* eslint-disable no-useless-escape */
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!emailRegex.test(email)) {
      setAlertState(true);
      setAlert({
        type: 'error',
        message: 'El email no es válido'
      });
      return;
    }

    if (email === '' || password === '' || password2 === '') {
      setAlertState(true);
      setAlert({
        type: 'error',
        message: 'Todos los campos son obligatorios'
      });
      return;
    }

    if (!passwordRegex.test(password)) {
      if (password !== password2) {
        setAlertState(true);
        setAlert({
          type: 'error',
          message: 'Las contraseñas no coinciden'
        });
        return;
      }
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
        case 'auth/email-already-in-use':
          message = 'El email ya está en uso';
          break;
        case 'auth/invalid-email':
          message = 'El email no es válido o no existe';
          break;
        case 'auth/invalid-password':
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
        <title>Create Account</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Create Account</Titulo>
          <div>
            <Boton to="/login">Login</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={RegisterUser}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => hadleChange(e)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => hadleChange(e)}
        />
        <Input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => hadleChange(e)}
        />
        <ContenedorBoton>
          <Boton as="button" primario type="submit">Create Account</Boton>
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

export default RegisterUsers;