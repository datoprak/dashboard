import { fetchData } from "./fetchData";

export default async function loader() {
  const orders = await fetchData("https://dummyjson.com/carts");
  return orders;
}
