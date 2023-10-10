import { fetchData } from "./fetchData";

export default async function loader() {
  const products = await fetchData("https://dummyjson.com/products");

  return products;
}
