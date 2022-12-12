import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";
import Forgot from "./views/Forgot";
import Home from "./views/Home";
import Room from "./views/Room";
import Gametest from "./views/GameTest";
import Matpling from "./views/MatplingPage";

function App() {
  console.log("app")
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
      {/* Route Authentification */}
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot-password" element={<Forgot/>} />
      <Route path="/" element={<Login/>} />
      {/* Route Game/Room */}
      <Route path="/room:id" element={<Room/>} />
      <Route path="/test2048" element={<Gametest/>} />
      <Route path="/matpling" element={<Matpling/>} />

      </Routes>
  </BrowserRouter>
  );
}

export default App;
