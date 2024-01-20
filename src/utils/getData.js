import { BASE_URL } from "./db_pfofile";

export default async function getData(path) {
  try {
    const response = await fetch(`${BASE_URL}/${path}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}