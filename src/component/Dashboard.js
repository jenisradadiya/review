import Content from "./dashboard/Content";
import MyQR from "./dashboard/MyQR";
import Profile from "./dashboard/Profile";
import BadReviews from './dashboard/BadReviews'
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar"

const Dashboard = () => {
  return (
    <>
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 bg-gray-100 overflow-auto p-4">
          <Content/>
          {/*<BadReviews/> 
          <Profile/>
          <MyQR />*/} 
        </div>
      </div> 
    </div>
    </>
  );
}

export default Dashboard;