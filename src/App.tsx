import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage/LoginPage";
import MemoPage from "./pages/MemoPage/MemoPage";
import KakaoPage from "./pages/LoginPage/KakaoPage";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />}></Route>
      {/* <Route index element={<MemoPage />}></Route> */}
      <Route path="/kakao" element={<KakaoPage />}></Route>
      <Route path="/memoPage" element={<MemoPage />}></Route>
    </Routes>
  );
}

export default App;
