import React, {useState, useMemo}from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./public/NavBar";
import CreateAccount from "./public/CreateAccount";
import Deposit from "./public/Deposit";
import Home from "./public/Home";
import Withdraw from "./public/Withdraw";
import AllData from "./public/AllData";
import NotFound from "./components/NotFound";
import Login from "./public/Login";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
            <Route path="/Deposit" element={<Deposit/>}></Route>
            <Route path="/Withdraw" element={<Withdraw/>}></Route>
            <Route path="/AllData" element={<AllData/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            
            <Route path="*" element={<NotFound/>}></Route>    

            
            
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;