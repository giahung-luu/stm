import { collection, addDoc, getDocs, setDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";
import { database } from "../lib/firebase";
export class Node {
  constructor(parent_id, root_id, topic) {
    this.parent_id = parent_id;
    this.root_id = root_id;
    this.topic = topic;
  }
}
const nodeConverter = {
  toFirestore: (node) => {
    return {
      parent_id: node.parent_id,
      root_id: node.root_id,
      topic: node.topic
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Node(data.parent_id, data.root_id, data.topic);
  }
};
const nodeRef = collection(database, "node").withConverter(nodeConverter);

export async function getNodes() {
  try {
    const querySnapshot = await getDocs(nodeRef);
    let nodes = [];
    querySnapshot.forEach((doc) => {
      nodes.push({ id: doc.id, ...doc.data() });
    });
    return nodes;
  } catch (e) {
    return false;
  }
}
export async function addNode(node) {
  try {
    const docRef = await addDoc(nodeRef, node);
    return docRef.id
  } catch (e) {
    return e;
  }
}

export async function editNode(id,node) {
    await setDoc(doc(database, "node", id).withConverter(nodeConverter),node);
}

export async function deleteNode(id) {
  try {
    await deleteDoc(doc(database, "node", id));
  } catch (e) {
    return e;
  }
}