import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../lib/firebase";
const characterRef = collection(database, "character");

export async function getCharacters() {
  try {
    const querySnapshot = await getDocs(characterRef);
    const characters = [];
    querySnapshot.forEach((doc) => {
        characters.push({ id: doc.id, ...doc.data() });
        });
    return characters;
  } catch (e) {
    return false;
  }
}
