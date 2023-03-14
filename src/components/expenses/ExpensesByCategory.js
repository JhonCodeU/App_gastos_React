import React from 'react'
import { Header, Titulo } from '../elements/Header';
import { Helmet } from "react-helmet";
import BtnReturn from '../elements/BtnReturn';
import ToalBarSpent from './TotalBarSpent';
import useGetExpensesMonthByCategory from '../../hooks/useGetExpensesMonthByCategory';
import { ListaDeCategorias, ElementoListaCategorias, Categoria, Valor } from '../elements/ElementsList';
import IconCategory from '../elements/IconCategory';
import convertToCurrency from '../../helpers/convertToCurrency';

const ExpenseByCategory = () => {

  const expensesByCategory = useGetExpensesMonthByCategory();

  return (
    <>
      <Helmet>
        <title>Expenses by Category</title>
      </Helmet>

      <Header>
        <BtnReturn />
        <Titulo>Expenses by Category</Titulo>
      </Header>

      <ListaDeCategorias>
        {expensesByCategory.map((expense, index) => {
          return (
            <ElementoListaCategorias key={index}>
              <Categoria>
                <IconCategory name={expense.category} />
                {expense.category}
              </Categoria>
              <Valor>{convertToCurrency(expense.amount)}</Valor>
            </ElementoListaCategorias>
          );
        })}
      </ListaDeCategorias>

      <ToalBarSpent />
    </>
  );
}

export default ExpenseByCategory;