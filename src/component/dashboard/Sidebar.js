import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu, Button, Drawer } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState(location.pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => setSelectedKeys(location.pathname), [location.pathname]);

  const menuItems = [
    { label: "Dashboard", icon: <AppstoreOutlined />, key: "/" },
    { label: "Inventory", icon: <ShopOutlined />, key: "/inventory" },
    { label: "Orders", icon: <ShoppingCartOutlined />, key: "/orders" },
    { label: "Customers", icon: <UserOutlined />, key: "/customers" },
  ];

  return (
    <div className="flex">
      {/* Desktop View */}
      <div className="hidden lg:block w-64 h-screen bg-white shadow-md">
        <Menu mode="vertical" selectedKeys={[selectedKeys]} onClick={(e) => navigate(e.key)} items={menuItems} />
      </div>

      {/* Mobile View */}
      <Button
        className="lg:hidden fixed top-16 left-4 z-10"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setDrawerOpen(true)}
      />
      <Drawer
        title="Menu"
        placement="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Menu mode="vertical" selectedKeys={[selectedKeys]} onClick={(e) => navigate(e.key)} items={menuItems} />
      </Drawer>
    </div>
  );
}

export default Sidebar;



// import {
//   AppstoreOutlined,
//   ShopOutlined,
//   ShoppingCartOutlined,
//   UserOutlined,
//   MenuOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";
// import { Menu, Button, Drawer } from "antd";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function Sidebar() {
//   const location = useLocation();
//   const [selectedKeys, setSelectedKeys] = useState("/");
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   useEffect(() => {
//     const pathName = location.pathname;
//     setSelectedKeys(pathName);
//   }, [location.pathname]);

//   const navigate = useNavigate();

//   const handleMenuClick = (item) => {
//     navigate(item.key);
//     setIsDrawerOpen(false); // Close the drawer after navigation
//   };

//   return (
//     <div className="flex">
//       {/* Desktop Sidebar */}
//       <div className="hidden lg:block w-64 h-screen bg-white shadow-lg">
//         <Menu
//           mode="vertical"
//           className="h-full"
//           onClick={handleMenuClick}
//           selectedKeys={[selectedKeys]}
//           items={[
//             {
//               label: "Dashboard",
//               icon: <AppstoreOutlined />,
//               key: "/",
//             },
//             {
//               label: "Inventory",
//               key: "/inventory",
//               icon: <ShopOutlined />,
//             },
//             {
//               label: "Orders",
//               key: "/orders",
//               icon: <ShoppingCartOutlined />,
//             },
//             {
//               label: "Customers",
//               key: "/customers",
//               icon: <UserOutlined />,
//             },
//           ]}
//         />
//       </div>

//       {/* Mobile/Tablet Menu Toggle */}
//       <div className="lg:hidden p-4">
//         <Button
//           type="primary"
//           icon={<MenuOutlined />}
//           onClick={() => setIsDrawerOpen(true)}
//           className="flex items-center"
//         >
//         </Button>
//       </div>

//       {/* Drawer for Mobile/Tablet */}
//       <Drawer
//         title={
//           <div className="flex justify-between items-center">
//             <span>Menu</span>
//             <Button
//               type="text"
//               icon={<CloseOutlined />}
//               onClick={() => setIsDrawerOpen(false)}
//             />
//           </div>
//         }
//         placement="left"
//         onClose={() => setIsDrawerOpen(false)}
//         open={isDrawerOpen}
//       >
//         <Menu
//           mode="vertical"
//           onClick={handleMenuClick}
//           selectedKeys={[selectedKeys]}
//           items={[
//             {
//               label: "Dashboard",
//               icon: <AppstoreOutlined />,
//               key: "/",
//             },
//             {
//               label: "Inventory",
//               key: "/inventory",
//               icon: <ShopOutlined />,
//             },
//             {
//               label: "Orders",
//               key: "/orders",
//               icon: <ShoppingCartOutlined />,
//             },
//             {
//               label: "Customers",
//               key: "/customers",
//               icon: <UserOutlined />,
//             },
//           ]}
//         />
//       </Drawer>
//     </div>
//   );
// }

// export default Sidebar;




{/* import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
  return (
    // <aside className="bg-gray-800 text-white w-64 h-screen flex flex-col shadow-md">
    //   <div className="p-4 text-lg font-bold border-b border-gray-700">
    //     Menu
    //   </div>
    //   <nav className="flex-1 p-4 space-y-4">
    //     <a
    //       href="#"
    //       className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
    //     >
    //       <RiDashboardFill className="r-2 h-5 w-5" /> {/* Icon on the left */}
    //       <span className="ml-2">Dashboard</span> {/* Text on the right */}
    //     </a>
    //     <a
    //       href="#"
    //       className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
    //     >
    //       <RiDashboardLine className="mr-2 h-5 w-5" /> {/* Icon on the left */}
    //       <span className="ml-2">Bad Reviews</span> {/* Text on the right */}
    //     </a>
    //     <a
    //       href="#"
    //       className=" flex items-center px-3 py-2 rounded-md hover:bg-gray-700 "
    //     >
    //       <CgProfile className="mr-2 h-5 w-5" /> {/* Icon on the left */}
    //       <span className="ml-2">Profile </span> {/* Text on the right */}
    //     </a>
    //     <a
    //       href="/login"
    //       className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
    //     >
    //       <TbLogout2 className="mr-2 h-5 w-5" /> {/* Icon on the left */}
    //       <span className="ml-2"> Logout </span> 
    //     </a>
    //   </nav>
    // </aside>
    {/*<>
    
    </>
  );
};

export default Sidebar; */}
