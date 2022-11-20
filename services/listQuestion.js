import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../lib/firebase";
const questionsRef = collection(database, "questions");

export async function addQuestion(title, point, list_answer, right_answer) {
  try {
    const docRef = await addDoc(collection(database, "questions"), {
      title,
      point,
      list_answer,
      right_answer,
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

export async function getQuestions() {
  try {
    const querySnapshot = await getDocs(collection(database, "questions"));
    let questions = [];
    querySnapshot.forEach((doc) => {
      questions.push({ id: doc.id, ...doc.data() });
    });
    return questions;
  } catch (e) {
    return false;
  }
}
