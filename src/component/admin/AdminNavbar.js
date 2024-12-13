import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Typography } from "antd";
import { useState } from "react";

function AdminNavbar() {
  const [comments] = useState([{ body: "This is the first comment." }, { body: "This is the second comment." }]);
  const [orders] = useState([{ title: "Product 1" }, { title: "Product 2" }]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between h-20 px-4 border-b bg-white shadow-md">
      <Typography.Title level={4} className="ml-10 my-2">
        Admin Panel
      </Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined onClick={() => setCommentsOpen(true)} className="text-xl cursor-pointer" />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled onClick={() => setNotificationsOpen(true)} className="text-xl cursor-pointer" />
        </Badge>
      </Space>
      <Drawer title="Comments" open={commentsOpen} onClose={() => setCommentsOpen(false)}>
        <List dataSource={comments} renderItem={(item) => <List.Item>{item.body}</List.Item>} />
      </Drawer>
      <Drawer title="Notifications" open={notificationsOpen} onClose={() => setNotificationsOpen(false)}>
        <List dataSource={orders} renderItem={(item) => <List.Item>{item.title}</List.Item>} />
      </Drawer>
    </div>
  );
}

export default AdminNavbar;

