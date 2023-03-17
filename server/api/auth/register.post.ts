import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return { result };
  } catch (error) {
    if (error instanceof Error)
    return { error: error.message }
  } 
})