import React from 'react';
import { Helmet } from "react-helmet";
import Boton from './elements/Boton';
import { ContenedorBoton, Formulario, Input } from './elements/ElementsOfForm';
import { ContenedorHeader, Header, Titulo } from './elements/Header';
import { ReactComponent as SvgLogin } from '../images/login.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.25rem; /* 200px */
  margin-bottom: 1.25rem; /* 20px */
`;

const Login = () => {

  const login = (e) => {
    e.preventDefault();
    console.log('login user...');
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
            <Boton to="/register">Register</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={login}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <ContenedorBoton>
          <Boton as="button" primario type="submit">Login</Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
}

export default Login;