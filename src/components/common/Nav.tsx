import React from "react";
import styles from "./Nav.module.css";
import logo from "../../assets/images/navLogo.png";
import {
  LuFolder,
  LuPlus,
  LuFolderOpen,
  LuFolderPlus,
  LuStar,
  LuTrash,
} from "react-icons/lu";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Nav Logo" />
      </div>
      <div className={styles.new} onClick={() => console.log("추가ㅏ")}>
        <LuPlus size={13} /> New Note
      </div>
      <div className={styles.label}>
        <div>All</div>
        <LuFolderPlus />
      </div>

      <div className={styles.folder}>
        <LuFolderOpen />
        모든 메모
      </div>
      <div className={styles.label}>folders</div>
      <div className={styles.folder_un}>
        <LuFolderOpen />
        Personal
      </div>
      <div className={styles.folder_un}>
        <LuFolder />
        Work
      </div>
      <div className={styles.label}>More</div>
      <div className={styles.folder_un}>
        <LuStar />
        favorites
      </div>
      <div className={styles.folder_un}>
        <LuTrash />
        Trash
      </div>
    </div>
  );
};

export default Nav;
