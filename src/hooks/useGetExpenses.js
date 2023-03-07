import { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig';
import { collection, where, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const useGetExpenses = () => {

  const [getExpenses, setExpenses] = useState([1, 2, 3]);
  const { user } = useAuth();

  useEffect(() => {

    const q = query(collection(db, 'expenses'), where('uidUser', '==', user.uid), orderBy('date', 'desc'), limit(10));
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setExpenses(docs);
    });
    return unsuscribe;
  }, [user]);

  return [getExpenses];
}

export default useGetExpenses;