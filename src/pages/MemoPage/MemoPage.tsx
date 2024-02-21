import React from "react";
import styles from "./MemoPage.module.css";
import Nav from "../../components/common/Nav";
import { useNavigate } from "react-router-dom";
import FolderContainer from "./FolderContainer";
import MemoContainer from "./MemoContainer";

const MemoPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Nav />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.folderContainer}>
          <FolderContainer />
        </div>
        <div className={styles.memoContainer}>
          <MemoContainer />
        </div>
      </div>
    </div>
  );
};

export default MemoPage;
