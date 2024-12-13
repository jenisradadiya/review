import React from 'react';
import { Table, Typography } from 'antd';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { IoEyeOutline } from 'react-icons/io5';
import { BsGraphDown, BsGraphUp } from 'react-icons/bs';
import { GiBallPyramid } from 'react-icons/gi';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminContent = () => {
  const stats = [
    { title: 'No. of Customers', value: 300, icon: <GiBallPyramid />, color: 'text-green-500' },
    { title: 'Last Month Customers', value: 100, icon: <BsGraphUp />, color: 'text-blue-500' },
    { title: 'Total Reviews', value: 120, icon: <BsGraphDown />, color: 'text-purple-500' },
    { title: 'Total QR Scans', value: 500, icon: <IoEyeOutline />, color: 'text-red-500' },
  ];

  const chartData = {
    labels: ['Business-1', 'Business-2', 'Business-3'],
    datasets: [
      {
        label: 'QR Scans',
        data: [50, 120, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'QR Scan Breakdown' },
    },
  };

  const customerList = [
    { key: 1, business: 'Business 1', contact: '9595857485' },
    { key: 2, business: 'Business 2', contact: '6812632541' },
    { key: 3, business: 'Business 3', contact: '6352874596' },
  ];

  const columns = [
    { title: 'Business Name', dataIndex: 'business', key: 'business' },
    { title: 'Contact Number', dataIndex: 'contact', key: 'contact' },
  ];

  return (
    <div className="p-4">
      <Typography.Title level={4}>Dashboard</Typography.Title>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="p-4 bg-white shadow-md rounded-md flex items-center gap-4"
          >
            <div className={`text-2xl p-2 rounded-full ${stat.color}`}>{stat.icon}</div>
            <div>
              <div className="text-sm text-gray-600">{stat.title}</div>
              <div className="text-lg font-bold">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col mt-6 gap-6 lg:flex-row">
        {/* Customer List Section */}
        <div className="flex-1 bg-white p-4 shadow-md rounded-md">
          <Typography.Title level={5} className="mb-4">
            Customer List
          </Typography.Title>
          <Table dataSource={customerList} columns={columns} pagination={false} />
        </div>

        {/* Chart Section */}
        <div className="flex-1 bg-white p-4 shadow-md rounded-md">
          <Bar options={chartOptions} data={chartData} />
        </div>
      </div>

      {/* Mobile Responsiveness */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
          .lg:flex-row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminContent;

