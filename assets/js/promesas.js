import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

export const registrarInfo = async(info) => {
    console.log(info);
    // console.log(db)
    // const ref = collection(db,"cities");
    // console.log(typeof ref)
    const docRef = await addDoc(collection(db, "cities"), {
        name: "Tokyo",
        country: "Japan"
      });
}