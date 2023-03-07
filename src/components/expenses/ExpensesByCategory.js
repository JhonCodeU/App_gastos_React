import React from 'react'
import { Header, Titulo } from '../elements/Header';
import { Helmet } from "react-helmet";
import BtnReturn from '../elements/BtnReturn';
import ToalBarSpent from './TotalBarSpent';

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

      <ToalBarSpent />
    </>
  );
}

export default ExpenseByCategory;