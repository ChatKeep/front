import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage/LoginPage";
import MemoPage from "./pages/MemoPage/MemoPage";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />}></Route>
      <Route path="/memoPage" element={<MemoPage />}></Route>
    </Routes>
  );
}

export default App;
