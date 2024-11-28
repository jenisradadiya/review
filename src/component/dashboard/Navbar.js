import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Typography } from "antd";
import { useState } from "react";

function Navbar() {
  const [comments] = useState([{ body: "This is the first comment." }, { body: "This is the second comment." }]);
  const [orders] = useState([{ title: "Product 1" }, { title: "Product 2" }]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between h-20 px-4 border-b bg-white shadow-md">
      <Typography.Title level={4} className="ml-10 my-2">
        Dashboard
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

export default Navbar;


// import { BellFilled, MailOutlined } from "@ant-design/icons";
// import { Badge, Drawer, List, Space, Typography } from "antd";
// import { useState } from "react";

// function Navbar() {
//   const [comments] = useState([
//     { body: "This is the first comment." },
//     { body: "This is the second comment." },
//   ]);
//   const [orders] = useState([
//     { title: "Product 1" },
//     { title: "Product 2" },
//   ]);
//   const [commentsOpen, setCommentsOpen] = useState(false);
//   const [notificationsOpen, setNotificationsOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-between h-20 px-4 border-b border-gray-300">
//       <Typography.Title level={4} className="m-0">
//         Aamir's Dashboard
//       </Typography.Title>
//       <Space>
// <img
//   className="w-8 h-8"
//   src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
//   alt="Logo"
// />
//         <Badge count={comments.length} dot>
//           <MailOutlined
//             className="text-xl cursor-pointer"
//             onClick={() => setCommentsOpen(true)}
//           />
//         </Badge>
//         <Badge count={orders.length}>
//           <BellFilled
//             className="text-xl cursor-pointer"
//             onClick={() => setNotificationsOpen(true)}
//           />
//         </Badge>
//       </Space>
//       <Drawer
//         title="Comments"
//         open={commentsOpen}
//         onClose={() => setCommentsOpen(false)}
//         maskClosable
//       >
//         <List
//           dataSource={comments}
//           renderItem={(item) => <List.Item>{item.body}</List.Item>}
//         />
//       </Drawer>
//       <Drawer
//         title="Notifications"
//         open={notificationsOpen}
//         onClose={() => setNotificationsOpen(false)}
//         maskClosable
//       >
//         <List
//           dataSource={orders}
//           renderItem={(item) => (
//             <List.Item>
//               <Typography.Text strong>{item.title}</Typography.Text> has been
//             </List.Item>
//           )}
//         />
//       </Drawer>
//     </div>
//   );
// }

// export default Navbar;

{/* import React from "react";
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      {/* <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-lg font-bold">
            Dashboard App
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative focus:outline-none">
              <IoMdNotifications className="h-6 w-6 text-white hover:text-gray-200" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-xs font-bold text-white rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <img
              className="h-8 w-8 rounded-full border-2 border-white"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </nav> 


    </>
  );
};

export default Navbar; */}


