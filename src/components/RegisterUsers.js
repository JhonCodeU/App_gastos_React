import React from 'react';
import { Helmet } from "react-helmet";
import Boton from './elements/Boton';
import { ContenedorBoton, Formulario, Input } from './elements/ElementsOfForm';
import { ContenedorHeader, Header, Titulo } from './elements/Header';
import { ReactComponent as SvgLogin } from '../images/registro.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const RegisterUsers = () => {

  const RegisterUser = (e) => {
    e.preventDefault();
    console.log('Registering user...');
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
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          required
        />
        <ContenedorBoton>
          <Boton as="button" primario type="submit">Create Account</Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
}

export default RegisterUsers;