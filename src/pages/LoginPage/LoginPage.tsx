import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import logoImage from "../../assets/images/logoImage.png";
import loginImage from "../../assets/images/kakao_login_medium.png";
import logo from "../../assets/images/navLogo.png";

const LoginPage = () => {
  const navigate = useNavigate();

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
            <button
              onClick={() => {
                navigate("/MemoPage");
              }}
            >
              <img src={loginImage} alt="kako Login" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
