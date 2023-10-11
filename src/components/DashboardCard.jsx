import { Card, Space, Statistic } from "antd";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};
export default DashboardCard;
