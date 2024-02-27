import React from "react";
import styles from "./MemoContainer.module.css";

import { LuMoreHorizontal, LuCalendarDays, LuFolder } from "react-icons/lu";

const MemoContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>[내용을 입력하세요.]</div>
        <div className={styles.more} onClick={() => console.log("수정")}>
          <LuMoreHorizontal />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.date}>
          <LuCalendarDays />
          Date 2024/02/24
        </div>
        <div className={styles.folder}>
          <LuFolder />
          Personal
        </div>
      </div>
      <div className={styles.content}>[메모를 입력하세요.]</div>
    </div>
  );
};

export default MemoContainer;
