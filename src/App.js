import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import NoPage from "./component/NoPage";
import Admin from "./component/Admin";
import AddClient from "./component/admin/AddClient";
import Home from "./component/Home";
import Review from "./component/Review";
import Dashboard from "./component/Dashboard";
import BadReviews from "./component/dashboard/BadReviews";
import Profile from "./component/dashboard/Profile";
import MyQR from "./component/dashboard/MyQR";
import Content from "./component/dashboard/Content"
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/addclient" element={<AddClient/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/review" element={<Review/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
