import { Avatar, Table, Typography } from "antd";
import { useLoaderData } from "react-router-dom";

const Customers = () => {
  const data = useLoaderData();

  return (
    <div className="customers">
      <h2>Customers</h2>
      <Table
        columns={[
          {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: link => <Avatar src={link} />,
          },
          {
            title: "First Name",
            dataIndex: "firstName",
            key: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
            key: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address",
            render: address => (
              <Typography.Text>
                {address.address}, {address.city}
              </Typography.Text>
            ),
          },
        ]}
        dataSource={data.users}
        rowKey="id"
        pagination={{ pageSize: 5, position: ["bottomCenter"] }}
      ></Table>
    </div>
  );
};
export default Customers;
