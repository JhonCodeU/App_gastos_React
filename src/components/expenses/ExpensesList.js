import React from 'react'
import { Header, Titulo } from '../elements/Header';
import { Helmet } from "react-helmet";
import BtnReturn from '../elements/BtnReturn'
import ToalBarSpent from './TotalBarSpent';
import useGetExpenses from '../../hooks/useGetExpenses';
import {
  Lista,
  ElementoLista,
  Categoria,
  Descripcion,
  Valor,
  Fecha,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo,
} from '../elements/ElementsList';
import IconCategory from '../elements/IconCategory';
import convertToCurrency from '../../helpers/convertToCurrency';
import { ReactComponent as IconEdit } from '../../images/editar.svg';
import { ReactComponent as IconDelete } from '../../images/borrar.svg';
import { Link } from 'react-router-dom';
import Boton from '../elements/Boton';
import { format, fromUnixTime } from 'date-fns';

const ExpenseList = () => {

  const [expenses, getMoreExpenses, ThereAreMoreExpensesToLoad] = useGetExpenses();
  //const { user } = useAuth();

  const formatDate = ({ date }) => {
    if (date) {
      return format(fromUnixTime(date), 'dd/MM/yyyy');
    } else {
      return '';
    }
  }

  const dateIsSame = (index, expenses, expense) => {
    if (index !== 0) {
      const currentDate = formatDate(expense);
      const previousDate = formatDate(expenses[index - 1]);

      if (currentDate === previousDate) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Expenses List</title>
      </Helmet>

      <Header>
        <BtnReturn />
        <Titulo>Expenses List</Titulo>
      </Header>

      <Lista>
        {expenses.map((expense, index) => (
          <div key={index}>
            {!dateIsSame(index, expenses, expense) && <Fecha>{formatDate(expense)}</Fecha>}
            {/* <Fecha>{formatDate(expense)}</Fecha> */}
            <ElementoLista key={expense.id}>
              <Categoria>
                <IconCategory name={expense.category} />
                {expense.category}
              </Categoria>

              <Descripcion>
                {expense.description}
              </Descripcion>
              <Valor>
                {convertToCurrency(expense.amount)}
              </Valor>

              <ContenedorBotones>
                <BotonAccion to={`/edit/${expense.id}`} as={Link}>
                  <IconEdit />
                </BotonAccion>
                <BotonAccion to={`/delete/${expense.id}`} as={Link}>
                  <IconDelete />
                </BotonAccion>
              </ContenedorBotones>
            </ElementoLista>
          </div>
        ))}

        {ThereAreMoreExpensesToLoad && (
          <ContenedorBotonCentral>
            <BotonCargarMas onClick={() => getMoreExpenses()}>
              Load More
            </BotonCargarMas>
          </ContenedorBotonCentral>
        )}

        {expenses.length === 0 && (
          <ContenedorSubtitulo>
            <Subtitulo>
              You don't have any expenses yet
            </Subtitulo>
            <Boton to="/add-expense">
              Add Expense
            </Boton>
          </ContenedorSubtitulo>
        )}
      </Lista>

      <ToalBarSpent />
    </>
  );
}

export default ExpenseList;