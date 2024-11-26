import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Table, Typography } from "antd";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Content() {
  const stats = [
    { title: "Orders", value: 120, icon: <ShoppingCartOutlined />, color: "text-green-500" },
    { title: "Inventory", value: 50, icon: <ShoppingOutlined />, color: "text-blue-500" },
    { title: "Customers", value: 30, icon: <UserOutlined />, color: "text-purple-500" },
    { title: "Revenue", value: "$20,000", icon: <DollarCircleOutlined />, color: "text-red-500" },
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

  const recentOrders = [
    { key: 1, product: "Product 1", customer: "John Doe", date: "2024-11-01", total: "$300" },
    { key: 2, product: "Product 2", customer: "Jane Smith", date: "2024-11-02", total: "$150" },
    { key: 3, product: "Product 3", customer: "Mike Brown", date: "2024-11-03", total: "$500" },
  ];

  const columns = [
    { title: "Product", dataIndex: "product", key: "product" },
    { title: "Customer", dataIndex: "customer", key: "customer" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Total", dataIndex: "total", key: "total" },
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
      Recent Orders
    </Typography.Title>
    <Table dataSource={recentOrders} columns={columns} pagination={false} />
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
