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
  const { orders, revenue, products, customers } = useLoaderData();

  const labels = revenue.carts.map(cart => `User-${cart.userId}`);
  const data = revenue.carts.map(cart => cart.total);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Space>
        <DashboardCard
          title={"Inventory"}
          value={products.total}
          icon={<ShopOutlined />}
        />
        <DashboardCard
          title={"Customers"}
          value={customers.total}
          icon={<UserOutlined />}
        />
        <DashboardCard
          title={"Orders"}
          value={orders.discountedTotal}
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
    </div>
  );
};
export default Dashboard;
