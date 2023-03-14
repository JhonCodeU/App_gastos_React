import React from 'react'
import { Header, Titulo } from '../elements/Header';
import { Helmet } from "react-helmet";
import BtnReturn from '../elements/BtnReturn';
import ToalBarSpent from './TotalBarSpent';
import FormExpenditure from './FormExpenditure';
import { useParams } from 'react-router-dom';
import useGetOnlyExpense from '../../hooks/useGetOnlyExpense';

const EditExpenses = () => {

  const { id } = useParams();
  const { expense } = useGetOnlyExpense(id);

  return (
    <>
      <Helmet>
        <title>Edit Expense</title>
      </Helmet>

      <Header>
        <BtnReturn ruta='expenses-list' />
        <Titulo>Edit Expense</Titulo>
      </Header>

      <FormExpenditure expense={expense} />
      <ToalBarSpent />
    </>
  );
}

export default EditExpenses