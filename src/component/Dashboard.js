import Content from "./dashboard/Content";
import MyQR from "./dashboard/MyQR";
import Profile from "./dashboard/Profile";
import BadReviews from './dashboard/BadReviews'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 bg-gray-100 overflow-auto p-4">
          {/* <MyQR /> */}
          {/* <Profile/> */}
          {/* <BadReviews/> */}
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;