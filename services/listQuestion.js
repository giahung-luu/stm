import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { database } from "../lib/firebase";
const questionsRef = collection(database, "questions");

export async function addQuestion(
  character,
  title,
  point,
  list_answer,
  right_answer
) {
  try {
    const docRef = await addDoc(collection(database, "questions"), {
      character,
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

export async function getQuestionsByIdCharacter(id) {
  try {
    const querySnapshot = await getDocs(
      collection(database, "questions/" + id)
    );
    let questions = [];
    querySnapshot.forEach((doc) => {
      questions.push({ id: doc.id, ...doc.data() });
    });
    return questions;
  } catch (e) {
    return false;
  }
}
