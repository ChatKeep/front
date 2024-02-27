import React from "react";
import styles from "./LoginPage.module.css";
import logoImage from "../../assets/images/logoImage.png";
import loginImage from "../../assets/images/kakao_login_large_wide.png";
import logo from "../../assets/images/navLogo.png";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const loginKakao = async () => {
    try {
      const { url } = await (
        await fetch("http://localhost:8080/users/login")
      ).json();

      console.log(url); // 응답으로 온 url
      document.location.href = url;
    } catch (error) {
      alert("Function fetchGetURL error!");
      console.error(error);
    }
  };

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const REDIRECT_URI = "http://localhost:8080/users/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.navContainer}>
          <img src={logo} alt="Nav Logo" />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.innerContainer}>
          <img className={styles.logoImage} src={logoImage} alt="logoImage" />
          <h2>카카오톡으로 로그인</h2>
          <div className={styles.loginButton}>
            <button onClick={loginKakao}>
              <img src={loginImage} alt="kako Login" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
