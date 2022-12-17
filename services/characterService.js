import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
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
    return e;
  }
}

export async function addCharacter(character) {
  try {
    const docRef = await addDoc(characterRef, character);
    return {
      ...character,
      id: docRef.id,
    };
  } catch (e) {
    return e;
  }
}

export async function editCharacter(id, character) {
  try {
    await updateDoc(doc(database, "character", id), character);
    return {
      ...character,
      id,
    };
  } catch (e) {
    return e;
  }
}

export async function deleteCharacter(id) {
  try {
    await deleteDoc(doc(database, "character", id));
    return {
      id,
    };
  } catch (e) {
    return e;
  }
}

// get list of characters by year range
export async function getCharactersByYearRange(start, end) {
  try {
    const querySnapshot = await getDocs(characterRef);
    const characters = [];
    querySnapshot.forEach((doc) => {
      const character = doc.data();
      // birth year is before start year and death year is after end year
      if (
        (character.born >= start && character.dead <= end) ||
        (end - character.born <= 100 &&
          end - character.born >= 0 &&
          character.dead >= start) ||
        (character.dead >= start && character.dead <= end)
      ) {
        characters.push({ id: doc.id, ...character });
      }
    });
    return characters;
  } catch (e) {
    return e;
  }
}

// get character by id
export async function getCharacterById(id) {
  try {
    const docRef = doc(database, "character", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (e) {
    return e;
  }
}
