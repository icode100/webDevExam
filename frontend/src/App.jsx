import { useState } from "react";
import React from "react";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          {/* <Route path="/reglog" element={}>
            <Route path="login" element={} />
            <Route path="register" element={} />
          </Route>
          <Route path="/main" element={} />
          <Route path="/info" element={} />
          <Route path="/settings" element={} />
          <Route path="/logout" element={} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
