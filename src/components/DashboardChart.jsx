import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Order revenue",
    },
  },
};

const DashboardChart = ({ labels, data }) => {
  const dataSource = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: data,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  
  return <Bar options={options} data={dataSource} />;
};
export default DashboardChart;
