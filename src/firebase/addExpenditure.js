import { db } from '../firebase/firebaseConfig'
import { collection, addDoc } from "firebase/firestore";

const addExpenditure = async ({ description, amount, category, date, uidUser }) => {
  console.log(description, amount, category, date, uidUser);
  try {
    const docRef = await addDoc(collection(db, "expenses"), {
      description,
      amount,
      category,
      date,
      uidUser
    });

    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default addExpenditure;