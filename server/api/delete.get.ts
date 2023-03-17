import { getQuery } from "h3";
import { del } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = getQuery(event);
    await del(col, id);
    return { result: id }
  } catch (error) {
    if (error instanceof Error)
    return { error: error.message }
  }
});