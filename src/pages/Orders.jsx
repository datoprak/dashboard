import { Table, Typography } from "antd";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const orders = useLoaderData();

  let order = [];
  orders.carts.forEach(cart => {
    order = [...order, ...cart.products];
  });

  return (
    <div className="orders">
      <h2>Orders</h2>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: price => <Typography.Text>${price}</Typography.Text>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
          },
          {
            title: "Total Price",
            dataIndex: "total",
            key: "total",
            render: price => <Typography.Text>${price}</Typography.Text>,
          },
          {
            title: "Discounted Price",
            dataIndex: "discountedPrice",
            key: "discountedPrice",
            render: price => <Typography.Text>${price}</Typography.Text>,
          },
        ]}
        dataSource={order}
        rowKey="id"
        pagination={{ pageSize: 5, position: ["bottomCenter"] }}
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "8px",
        }}
      ></Table>
    </div>
  );
};
export default Orders;
