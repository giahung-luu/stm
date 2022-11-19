import { ref, set } from "firebase/database";
import { database } from "./firebase";

export function addQuestion(id, title, point, list_answer, right_answer) {
  set(ref(database, "users/" + id), {
    title,
    point,
    list_answer,
    right_answer,
  });
}
