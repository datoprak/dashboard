import { DashboardTwoTone, MailTwoTone, NotificationTwoTone } from "@ant-design/icons";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <DashboardTwoTone />
        <h1>Dashboard</h1>
      </div>
      <nav>
        <MailTwoTone />
        <NotificationTwoTone />
      </nav>
    </header>
  );
};
export default Header;
