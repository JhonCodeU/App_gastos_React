import React from 'react'
import { Helmet } from "react-helmet";
import { Header, Titulo, ContenedorHeader, ContenedorBotones } from './components/elements/Header';
import Boton from './components/elements/Boton';
import BotonCloseSession from './components/elements/BottonCloseSession';
import FormExpenditure from './components/expenses/FormExpenditure';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Add Expenditure</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Add Expenditure</Titulo>
          <ContenedorBotones>
            <Boton to="/categories">Categories</Boton>
            <Boton to="/expenses-list">Expenses List</Boton>
            <BotonCloseSession />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>

      <FormExpenditure />
    </>
  );
}

export default App;