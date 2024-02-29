import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const fetchLogin = useCallback(
    async (code: String) => {
      try {
        const param = {
          code,
        };

        const response = await (
          await fetch("http://localhost:8080/api/auth/kakao", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(param), // string으로 전달해야함
          })
        ).json();

        navigate("/memoPage"); // API 호출 성공 시 메모 페이지로 이동
      } catch (error) {
        alert("Function fetchLogin error!");
        console.error(error);
      }
    },
    [navigate]
  );

  /**
   * @description login API fetch
   */
  useEffect(() => {
    if (code) {
      fetchLogin(code);
    }
  }, [code, fetchLogin]);

  /**
   * @description code 값 가져오기
   */
  useEffect(() => {
    const Address = new URL(window.location.href); // url 가져오기
    const code = Address.searchParams.get("code") || ""; // 👈 code value

    setCode(code);
  }, []);

  return <div>로그인 중...</div>;
};
export default KakaoPage;
