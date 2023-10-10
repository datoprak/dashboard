import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import dashboardLoader from "./utils/dashboardLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard />, loader: dashboardLoader },
      { path: "inventory", element: <Inventory /> },
      { path: "orders", element: <Orders /> },
      { path: "customers", element: <Customers /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
