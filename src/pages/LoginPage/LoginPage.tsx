import React from "react";
import styles from "./LoginPage.module.css";
import logoImage from "../../assets/images/logoImage.png";
import loginImage from "../../assets/images/kakao_login_large_wide.png";
import logo from "../../assets/images/navLogo.png";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();

  async function fetchKakaoLoginUrl() {
    try {
      const response = await fetch("http://localhost:8080/api/auth");
      const data = await response.json(); // Assuming the backend sends a proper JSON response
      if (data.url) {
        console.log(data.url); // Use the URL as needed, e.g., redirecting the user
        window.location.href = data.url;
      } else {
        console.error("URL not received from backend");
      }
    } catch (error) {
      console.error("Error fetching Kakao login URL:", error);
    }
  }

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const REDIRECT_URI = "http://localhost:8080/api/auth/kakao";
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
            <button onClick={fetchKakaoLoginUrl}>
              <img src={loginImage} alt="kako Login" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
