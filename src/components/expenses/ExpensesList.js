import React from 'react'
import { Header, Titulo } from '../elements/Header';
import { Helmet } from "react-helmet";
import BtnReturn from '../elements/BtnReturn';
import { useAuth } from '../../context/AuthContext';

const ExpenseList = () => {

  const { user } = useAuth();
  console.log(user);

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