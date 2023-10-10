import { Space, Table } from "antd";
import DashboardCard from "../components/DashboardCard";
import {
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useLoaderData } from "react-router-dom";
import DashboardChart from "../components/DashboardChart";

const Dashboard = () => {
  const { orders, revenue } = useLoaderData();

  const labels = revenue.carts.map(cart => `User-${cart.userId}`);
  const data = revenue.carts.map(cart => cart.total);

  return (
    <>
      <h2>Dashboard</h2>
      <Space>
        <DashboardCard
          title={"Inventory"}
          value={123}
          icon={<ShopOutlined />}
        />
        <DashboardCard
          title={"Customers"}
          value={123}
          icon={<UserOutlined />}
        />
        <DashboardCard
          title={"Orders"}
          value={123}
          icon={<ShoppingCartOutlined />}
        />
      </Space>
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
      ></Table>
      <DashboardChart labels={labels} data={data} />
    </>
  );
};
export default Dashboard;
