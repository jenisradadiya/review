import React from 'react';
import { Table, Typography } from 'antd';

const CustList = () => {
  const customerList = [
    {
      key: 1,
      name: 'Customer 1',
      business: 'Business 1',
      contact: '9595857485',
      email: 'customer1@example.com',
      totalReview: 10,
      qrImpression: 50,
    },
    {
      key: 2,
      name: 'Customer 2',
      business: 'Business 2',
      contact: '6812632541',
      email: 'customer2@example.com',
      totalReview: 8,
      qrImpression: 30,
    },
    {
      key: 3,
      name: 'Customer 3',
      business: 'Business 3',
      contact: '6352874596',
      email: 'customer3@example.com',
      totalReview: 15,
      qrImpression: 70,
    },
  ];

  const columns = [
    { title: 'Customer Name', dataIndex: 'name', key: 'name' },
    { title: 'Business Name', dataIndex: 'business', key: 'business' },
    { title: 'Contact Number', dataIndex: 'contact', key: 'contact' },
    { title: 'Email ID', dataIndex: 'email', key: 'email' },
    { title: 'Total Reviews', dataIndex: 'totalReview', key: 'totalReview' },
    { title: 'QR Impressions', dataIndex: 'qrImpression', key: 'qrImpression' },
  ];

  return (
    <div className="p-4">
      <Typography.Title level={4}>Customer List</Typography.Title>
      <div className="bg-white p-4 shadow-md rounded-md">
        <Table 
          dataSource={customerList} 
          columns={columns} 
          pagination={false} 
          scroll={{ x: 'max-content' }} 
        />
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .p-4 {
            padding: 1rem;
          }
          .ant-table {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .p-4 {
            padding: 0.5rem;
          }
          .ant-table {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default CustList;
