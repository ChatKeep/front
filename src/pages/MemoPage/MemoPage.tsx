import React from "react";
import styles from "./MemoPage.module.css";
import Nav from "../../components/common/Nav";
import { useNavigate } from "react-router-dom";

const MemoPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Nav />
      </div>
      <div className={styles.rightSection}>
        <div>폴더 리스트</div>
        <div className={styles.innerContainer}>내용을 입력하세요</div>
      </div>
    </div>
  );
};

export default MemoPage;
