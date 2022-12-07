import { collection, addDoc, getDocs } from "firebase/firestore";
import { database } from "../lib/firebase";

export async function getNodes() {
  try {
    const querySnapshot = await getDocs(collection(database, "node"));
    let nodes = [];
    querySnapshot.forEach((doc) => {
      nodes.push({ id: doc.id, ...doc.data() });
    });
    return nodes;
  } catch (e) {
    return false;
  }
}
