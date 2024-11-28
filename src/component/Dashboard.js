import Content from "./dashboard/Content";
import MyQR from "./dashboard/MyQR";
import Profile from "./dashboard/Profile";
import BadReviews from './dashboard/BadReviews'
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 bg-gray-100 overflow-auto p-4">
          {/* <MyQR /> */}
          {/* <Profile/> */}
          {/* <BadReviews/> */}
           <Link to="/"><Content/></Link>
            <Link to="/"><Profile/></Link>
             <Link to="/"><BadReviews/></Link>
             <Link to="/myqr"><MyQR/></Link>
        </div>
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
    {/* <div>
      <header>
        <h1>My App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div> */}
    </>
  );
}

export default Dashboard;