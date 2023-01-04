import { collection, addDoc, getDocs, setDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";
import { database } from "../lib/firebase";

const topicRef = collection(database, "post")

export async function addTopic(id,t) {
  try {
    setDoc(doc(database, "post", id),{
      content:"",
      topic : t
    });
  } catch (e) {
    return e;
  }
}
export async function getTopic() {
  try {
    const querySnapshot = await getDocs(topicRef);
    let topic = [];
    querySnapshot.forEach((doc) => {
      topic.push({ id: doc.id, ...doc.data() });
    });
    return topic;
  } catch (e) {
    return false;
  }
}

export async function editTopic(id,content,topic) {
    await updateDoc(doc(database, "post", id), {
        content,
        topic
    });
    return id;
}

export async function deleteTopic(id) {
  try {
    await deleteDoc(doc(database, "post", id));
  } catch (e) {
    return e;
  }
}

export async function getTopicById(id) {
  try {
    // get question by id
    const querySnapshot = await getDocs(topicRef);
    const topic = [];
    querySnapshot.forEach((doc) => {
      if (doc.id === id) topic.push({ ...doc.data(), id: doc.id });
    });
    return topic;
  } catch (e) {
    return false;
  }
}