import { addDoc, collection, getDocs, updateDoc, deleteDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase";

export const registrarPersona = async(info) => {
    const docRef = await addDoc(collection(db, 'informacion'), info);
}