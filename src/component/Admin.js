import React from "react";
import AdminSidebar from "./admin/AdminSliderbar";
import AdminNavbar from "./admin/AdminNavbar";
import AdminContent from "./admin/AdminContent";
import AddCustomer from "./admin/AddCustomer";
import CustList from "./admin/CustList";

const Admin = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
      <AdminNavbar />
      <div className="flex flex-1">
        <AdminSidebar />
        <div className="flex-1 bg-gray-100 overflow-auto">
          {/*
          <CustList/>
          <AdminContent/>
          */}
          <AddCustomer/>
        </div>
      </div> 
    </div>
    </>
  );
};

export default Admin;
