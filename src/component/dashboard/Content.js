import { StarFilled } from "@ant-design/icons";
import { Table, Typography } from "antd";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { IoEyeOutline } from "react-icons/io5";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";
import { GiBallPyramid } from "react-icons/gi";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Content() {
  const stats = [
    { title: "Overall Review", value: 120, icon: <GiBallPyramid />, color: "text-green-500" },
    { title: "Last Month Review", value: 50, icon: <BsGraphUp />, color: "text-blue-500" },
    { title: "Current Month Review", value: 30, icon: <BsGraphDown />, color: "text-purple-500" },
    { title: "QR Impression", value: 200, icon: <IoEyeOutline />, color: "text-red-500" },
  ];

  const chartData = {
    labels: ["User-1", "User-2", "User-3"],
    datasets: [{ label: "Revenue", data: [2000, 4000, 3000], backgroundColor: "rgba(255, 99, 132, 0.5)" }],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Revenue Breakdown" },
    },
  };

  const recentReview = [
    { key: 1, name: "name 1", mobile: "9595857485", date: "2024-11-01", rating: "3", review:"hello"},
    { key: 2, name: "name 2", mobile: "6812632541", date: "2024-11-02", rating: "1", review:"how are you?" },
    { key: 3, name: "name 3", mobile: "6352874596", date: "2024-11-03", rating: "2", review:"i am fine.." },
  ];

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Mobile no", dataIndex: "mobile", key: "mobile" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => (
        <>
          {rating} 
          <StarFilled style={{margin:"1px", color: "#fadb14" }} />
        </>
      ), // Custom render to display rating with a star icon
    },
    { title: "Review", dataIndex: "review", key: "review" },
  ];

  return (
    <div className="p-4">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div className="p-4 bg-white shadow-md rounded-md flex items-center gap-4">
            <div className={`text-2xl p-2 rounded-full ${stat.color}`}>{stat.icon}</div>
            <div>
              <div className="text-sm text-gray-600">{stat.title}</div>
              <div className="text-lg font-bold">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-6 lg:flex-row gap-6">
  {/* Recent Orders Section */}
  <div className="flex-1 bg-white p-4 shadow-md rounded-md">
    <Typography.Title level={5} className="mb-4">
      Recent Reviews
    </Typography.Title>
    <Table dataSource={recentReview} columns={columns} pagination={false} />
  </div>

  {/* Chart Section */}
  <div className="flex-1 bg-white p-4 shadow-md rounded-md">
    <Bar options={chartOptions} data={chartData} />
  </div>
</div>
    </div>
  );
}

export default Content;
