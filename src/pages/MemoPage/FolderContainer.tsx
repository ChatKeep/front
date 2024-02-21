import React from "react";
import { LuChevronLeftCircle } from "react-icons/lu";
import styles from "./FolderContainer.module.css";
const FolderContainer = () => {
  return (
    <div className={styles.container}>
      <LuChevronLeftCircle />
      <div className={styles.list}>
        <div className={styles.label}>Personal</div>
        <div className={styles.listItem}>
          <div className={styles.itemHeader}>
            Business Partners Work at Modern Office
          </div>
          <div className={styles.itemContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui.
          </div>
          <div className={styles.itemDate}>Feb 8, 2021</div>
        </div>
        <div className={styles.listItem_un}>
          <div className={styles.itemHeader}>
            Business Partners Work at Modern Office
          </div>
          <div className={styles.itemContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui.
          </div>
          <div className={styles.itemDate}>Feb 8, 2021</div>
        </div>
      </div>
    </div>
  );
};

export default FolderContainer;
