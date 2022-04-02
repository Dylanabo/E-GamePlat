import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";
import Forgot from "./views/Forgot";
import Home from "./views/Home";

function App() {
  console.log("app")
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot-password" element={<Forgot/>} />
      <Route path="/" element={<Login/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
