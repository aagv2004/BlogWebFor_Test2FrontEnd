import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

export const registrarInfo = async(info) => {
    console.log(info);
    // console.log(db)
    // const ref = collection(db,"cities");
    // console.log(typeof ref)
    const docRef = await addDoc(collection(db, "informacion"), info)
}

export const obtenerInfo = async() =>{
  const referencia = collection(db, "informacion");
  const querySnapshot = await getDocs(referencia);
  console.log(querySnapshot);
  let info = []
  querySnapshot.forEach((doc) => {
    info.push({...doc.data(), id:doc.id})
  });
  return info
}

export const actualizarInfo = async(info, id) => {
  const ref = doc(db, "informacion", id);
  await updateDoc(ref, info);
}

