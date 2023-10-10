import {
  DashboardTwoTone,
  ShopTwoTone,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Menu
        onClick={item => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            key: "/",
            icon: <DashboardTwoTone />,
          },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopTwoTone />,
          },
          {
            label: "Customers",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Orders",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};
export default SideMenu;
