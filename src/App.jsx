import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import Details from "./pages/details";

import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Details />} />{" "}
          {/* Ensure this path matches */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
