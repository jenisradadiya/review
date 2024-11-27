import React from 'react'
import { Table, Typography } from "antd";
import { StarFilled } from '@ant-design/icons';

const BadReviews = () => {
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
    <>
    <div className='p-4'>

    <Typography.Title level={4}>Dashboard</Typography.Title>

    <div className="mt-6 bg-white p-4 shadow-md rounded-md">
    <Typography.Title level={5} className="mb-4">
      Recent Orders
    </Typography.Title>
    <Table dataSource={recentReview} columns={columns} pagination={false} />
    </div>
    </div>
    </>
  )
}

export default BadReviews
