import { Card, Statistic } from "antd";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card>
      {icon}
      <Statistic title={title} value={value} />
    </Card>
  );
};
export default DashboardCard;
