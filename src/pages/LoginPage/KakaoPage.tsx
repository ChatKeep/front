import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoPage = () => {
  const navigate = useNavigate();
  // const code = new URL(window.location.href).searchParams.get("code");

  // //인가코드 백으로 보내는 코드
  // useEffect(() => {
  //   const kakaoLogin = async () => {
  //     await axios({
  //       method: "GET",
  //       url: `http://localhost:8080/users/callback?code=${code}`,
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
  //         "Access-Control-Allow-Origin": "*", //이건 cors 에러때문에 넣어둔것. 당신의 프로젝트에 맞게 지워도됨
  //       },
  //     }).then((res) => {
  //       //백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
  //       console.log(res);
  //       //계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장해두자
  //       //localStorage.setItem("name", res.data.account.kakaoName);
  //       //로그인이 성공하면 이동할 페이지
  //       navigate("/memoPage");
  //     });
  //   };
  //   kakaoLogin();
  // });

  const [code, setCode] = useState("");

  const fetchLogin = useCallback(
    async (code: String) => {
      try {
        const param = {
          code,
        };

        const response = await (
          await fetch("http://localhost:8080/users/callback", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(param), // string으로 전달해야함
          })
        ).json();

        navigate("/memoPage"); // API 호출 성공 시 메인 페이지로 이동
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
