import React, { useState } from 'react'
import { ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton } from '../elements/ElementsOfForm';
import Boton from '../elements/Boton';
import { ReactComponent as IconPlus } from '../../images/plus.svg';
import SelectCategories from './SelectCategories';
import DatePicker from '../Date/DatePicker';
import addExpenditure from '../../firebase/addExpenditure';
//import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import { useAuth } from '../../context/AuthContext';

const FormExpenditure = () => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('hogar');
  const [date, setDate] = useState(new Date());
  const { user } = useAuth();

  const handleChangeAmount = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let amountConverted = parseFloat(amount).toFixed(2);

    addExpenditure({
      description,
      amount: amountConverted,
      category,
      date: getUnixTime(date),
      uidUser: user.uid
    });

  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <ContenedorFiltros>
        <SelectCategories category={category} setCategory={setCategory} />
        <DatePicker date={date} setDate={setDate} />
      </ContenedorFiltros>

      <div>
        <Input
          type="text"
          placeholder="Description"
          name="description"
          id='description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <InputGrande
          type="number"
          placeholder="$0.00"
          name="amount"
          id='amount'
          value={amount}
          onChange={handleChangeAmount}
        />
      </div>
      <ContenedorBoton>
        <Boton as="button" primario conIcono type="submit">
          Add Expenditure <IconPlus />
        </Boton>
      </ContenedorBoton>
    </Formulario>
  );
}

export default FormExpenditure;