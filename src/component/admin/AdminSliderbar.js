import { Menu, Button, Drawer } from "antd";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { RiDashboardFill, RiDashboardHorizontalLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState(location.pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => setSelectedKeys(location.pathname), [location.pathname]);

  const menuItems = [
    {label: "Admin Panel", icon: <RiDashboardFill/>,key: "/dashboard" },
    {label: "Customer List",icon: <RiDashboardHorizontalLine/>, key: "/badreviews" },
    {label: "Add Customer",icon: <CgProfile/>, key: "/profile" },
  ];

  return (
    <div className="flex">
      {/* Desktop View */}
      <div className="hidden md:block w-64 bg-white shadow-md">
        <Menu
          mode="vertical"
          selectedKeys={[selectedKeys]}
          onClick={(e) => navigate(e.key)}
          items={[
            ...menuItems,
            {
              key: "login",
              icon: <TbLogout2 />,
              label: "Logout",
            },
          ]}
        />
      </div>
      {/* Mobile View */}
      <Button
        className="md:hidden fixed top-2 left-4 z-10"
        icon={<CiMenuBurger />}
        onClick={() => setDrawerOpen(true)}
      />
      <Drawer
        title="Menu"
        placement="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Menu
          mode="vertical"
          selectedKeys={[selectedKeys]}
          onClick={(e) => navigate(e.key)}
          items={menuItems}
        />
      </Drawer>
    </div>
  );
}

export default AdminSidebar;
