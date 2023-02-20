import React from 'react'
import { Header, Titulo } from '../elements/Header';
import { Helmet } from "react-helmet";
import BtnReturn from '../elements/BtnReturn';

const ExpenseByCategory = () => {
  return (
    <>
      <Helmet>
        <title>Expenses by Category</title>
      </Helmet>

      <Header>
        <BtnReturn />
        <Titulo>Expenses by Category</Titulo>
      </Header>
    </>
  );
}

export default ExpenseByCategory;