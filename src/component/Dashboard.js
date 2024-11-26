import Content from "./dashboard/Content";
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar";
const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 bg-gray-100 overflow-auto p-4">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;