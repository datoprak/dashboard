import { fetchData } from "./fetchData";

export default async function loader() {
  const orders = await fetchData("https://dummyjson.com/carts/1");
  const revenue = await fetchData("https://dummyjson.com/carts");
  const products = await fetchData("https://dummyjson.com/products");
  const customers = await fetchData("https://dummyjson.com/users");

  return { orders, revenue, products, customers };
}
