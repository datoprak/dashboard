import {
  DashboardOutlined,
  MailOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Badge, Drawer, List } from "antd";
import { useState } from "react";

const Header = ({ comments, notifications }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <DashboardOutlined />
        <h1>Dashboard</h1>
      </div>
      <nav>
        <Badge count={comments.total} onClick={() => setIsCommentOpen(true)}>
          <MailOutlined />
        </Badge>
        <Badge
          count={notifications.products.length}
          onClick={() => setIsNotificationOpen(true)}
        >
          <NotificationOutlined />
        </Badge>
      </nav>
      <Drawer
        title="Comments"
        open={isCommentOpen}
        onClose={() => setIsCommentOpen(false)}
      >
        <List
          dataSource={comments.comments}
          renderItem={item => <List.Item>{item.body}</List.Item>}
        />
      </Drawer>
      <Drawer
        title="Notifications"
        open={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
      >
        <List
          dataSource={notifications.products}
          renderItem={item => <List.Item>{item.title}</List.Item>}
        />
      </Drawer>
    </header>
  );
};
export default Header;
