import React from 'react'
import { Header, Titulo } from '../elements/Header';
import { Helmet } from "react-helmet";
import BtnReturn from '../elements/BtnReturn';

const ExpenseList = () => {
  return (
    <>
      <Helmet>
        <title>Expenses List</title>
      </Helmet>

      <Header>
        <BtnReturn />
        <Titulo>Expenses List</Titulo>
      </Header>
    </>
  );
}

export default ExpenseList;