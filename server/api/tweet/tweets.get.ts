import { collection, getDocs } from "firebase/firestore";
import { db } from "~~/server/lib/firebase";

export default defineEventHandler(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'NuxMedia', 'Tweets', 'AllTweets'))
    const result = snapshot.docs.map((doc) => doc.data())
    return result ;
  } catch (error) {
    if (error instanceof Error)
      return { result: [], error: error.message };
  }
});