import React from "react";
import styles from "./Nav.module.css";
import logo from "../../assets/images/navLogo.png";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="Nav Logo" />
      </div>
      <div>+ New Note</div>
      <div>All</div>
      <div>모든 메모</div>
      <div>folders</div>
      <div>
        <div>Personal</div>
        <div>Work</div>
      </div>
      <div>More</div>
      <div>
        <div>favorites</div>
        <div>Trash</div>
      </div>
    </div>
  );
};

export default Nav;
