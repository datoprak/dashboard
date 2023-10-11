import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import dashboardLoader from "./utils/dashboardLoader";
import inventoryLoader from "./utils/inventoryLoader";
import ordersLoader from "./utils/ordersLoader";
import customersLoader from "./utils/customersLoader";
import layoutLoader from "./utils/layoutLoader";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard />, loader: dashboardLoader },
      { path: "inventory", element: <Inventory />, loader: inventoryLoader },
      { path: "orders", element: <Orders />, loader: ordersLoader },
      { path: "customers", element: <Customers />, loader: customersLoader },
    ],
    loader: layoutLoader,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
