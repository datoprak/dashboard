import { fetchData } from "./fetchData";

export default async function loader() {
  const comments = await fetchData("https://dummyjson.com/comments");
  const notifications = await fetchData("https://dummyjson.com/carts/1");

  return { comments, notifications };
}
