import React from 'react'
import { ReactComponent as IconCloseSession } from '../../images/log-out.svg';
import Boton from './Boton';
import { auth } from '../../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const BotonCloseSession = () => {

  const navigate = useNavigate();

  const closeSession = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Boton as="button" bgColor="#DA552F" onClick={closeSession}>
      <IconCloseSession />
    </Boton>
  );
}

export default BotonCloseSession;