import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Login from "./component/Login";
import NoPage from "./component/NoPage";
import Admin from "./component/Admin";
import Home from "./component/Home";
import Review from "./component/Review";
import Dashboard from "./component/Dashboard";
const isAuthenticated = (userType) => userType === 'admin' || userType === 'client';
const getUserType = () => localStorage.getItem('userType');


function App() {
  const [userType, setUserType] = useState(getUserType());

  return (
<>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/review" element={<Review />} />
      <Route path="*" element={<NoPage/>}/>
    </Routes>
  </Router>
</>
  );
}

export default App;
