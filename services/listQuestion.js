import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
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

export async function updateQuestion(
  id,
  character,
  title,
  point,
  list_answer,
  right_answer
) {
  try {
    const docRef = await updateDoc(doc(database, "questions", id), {
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
    const q = query(questionsRef, where("character", "==", id));
    const querySnapshot = await getDocs(q);
    const questions = [];
    querySnapshot.forEach((doc) => {
      questions.push({ ...doc.data(), id: doc.id });
    });
    return questions;
  } catch (e) {
    return false;
  }
}

export async function getQuestions() {
  try {
    const querySnapshot = await getDocs(collection(database, "questions"));
    const questions = [];
    querySnapshot.forEach((doc) => {
      questions.push({ ...doc.data(), id: doc.id });
    });
    return questions;
  } catch (e) {
    return false;
  }
}

export async function getQuestionById(id) {
  try {
    // get question by id
    const querySnapshot = await getDocs(questionsRef);
    const questions = [];
    querySnapshot.forEach((doc) => {
      if (doc.id === id) questions.push({ ...doc.data(), id: doc.id });
    });
    return questions;
  } catch (e) {
    return false;
  }
}
export async function deleteQuestion(id) {
  console.log(id);
  try {
    const docRef = await deleteDoc(doc(database, "questions", id));
    return docRef;
  } catch (e) {
    console.error("Error delete document: ", e);
    return false;
  }
}
