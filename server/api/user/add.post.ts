import { collection, addDoc } from "firebase/firestore";
import { db } from "~~/server/lib/firebase";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const docRef = await addDoc(collection(db, 'NuxMedia', 'Users', 'AllUsers'), body)
    return { result: docRef };
  } catch (error) {
    if (error instanceof Error)
      return { result: [], error: error.message };
  }
});