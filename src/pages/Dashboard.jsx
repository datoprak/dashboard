import { Table } from "antd";
import DashboardCard from "../components/DashboardCard";
import {
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLoaderData } from "react-router-dom";
import DashboardChart from "../components/DashboardChart";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { orders, revenue, products, customers } = useLoaderData();

  const labels = revenue.carts.map(cart => `User-${cart.userId}`);
  const data = revenue.carts.map(cart => cart.total);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="cards">
        <Link to="/inventory" className="dashboard-inventory">
          <DashboardCard
            title={"Inventory"}
            value={products.total}
            icon={
              <ShopOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: "50%",
                  padding: 8,
                  fontSize: 24,
                }}
              />
            }
          />
        </Link>
        <Link to="/customers" className="dashboard-customers">
          <DashboardCard
            title={"Customers"}
            value={customers.total}
            icon={
              <UserOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.25)",
                  borderRadius: "50%",
                  padding: 8,
                  fontSize: 24,
                }}
              />
            }
          />
        </Link>
        <Link to="/orders" className="dashboard-orders">
          <DashboardCard
            title={"Orders"}
            value={orders.discountedTotal}
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: "50%",
                  padding: 8,
                  fontSize: 24,
                }}
              />
            }
          />
        </Link>
      </div>
      <div className="charts">
        <div className="table">
          <h3>Recent Orders</h3>
          <Table
            columns={[
              { title: "Title", dataIndex: "title", key: "title" },
              { title: "Quantity", dataIndex: "quantity", key: "quantity" },
              { title: "Price", dataIndex: "price", key: "price" },
              { title: "Total Price", dataIndex: "total", key: "total" },
            ]}
            dataSource={orders.products}
            rowKey="id"
            pagination={false}
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              borderRadius: "8px",
            }}
          ></Table>
        </div>
        <DashboardChart labels={labels} data={data} />
      </div>
    </div>
  );
};
export default Dashboard;
