import React, { useState } from 'react'
import { ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton } from '../elements/ElementsOfForm';
import Boton from '../elements/Boton';
import { ReactComponent as IconPlus } from '../../images/plus.svg';

const FormExpenditure = () => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleChangeAmount = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
  }

  return (
    <Formulario>
      <ContenedorFiltros>
        <p>Select</p>
        <p>Picker Date</p>
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
          placeholder="Amount"
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