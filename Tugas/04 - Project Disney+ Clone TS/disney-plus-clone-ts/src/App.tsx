import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { selectUserName } from "./features/user/userSlice";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/detail/movies/:id" element={<Detail />} />
          <Route path="/detail/series/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
