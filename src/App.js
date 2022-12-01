import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./main/Mainpage";
import Login from "./pages/Login";
import Navbar from './nav/Navbar';
import Post from './pages/create-post/Post';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-post" element={<Post />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
