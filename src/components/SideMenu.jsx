import {
  DashboardTwoTone,
  ShopTwoTone,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    setSelectedKeys(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <Menu
        onClick={item => {
          navigate(item.key);
        }}
        selectedKeys={selectedKeys}
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
