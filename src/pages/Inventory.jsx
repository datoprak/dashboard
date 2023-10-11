import { Avatar, Rate, Table, Typography } from "antd";
import { useLoaderData } from "react-router-dom";

const Inventory = () => {
  const products = useLoaderData();

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <Table
        columns={[
          {
            title: "Image",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: link => <Avatar src={link} />,
          },
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
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            render: rating => <Rate value={rating} allowHalf disabled />,
          },
          {
            title: "Stock",
            dataIndex: "stock",
            key: "stock",
          },
          {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: category => (
              <Typography.Text>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography.Text>
            ),
          },
        ]}
        dataSource={products.products}
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
export default Inventory;
