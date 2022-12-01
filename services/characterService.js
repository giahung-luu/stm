import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
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
        }
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
        }
    } catch (e) {
        return e;
    }
}

export async function deleteCharacter(id) {
    try {
        await deleteDoc(doc(database, "character", id));
        return {
            id,
        }
    } catch (e) {
        return e;
    }
}