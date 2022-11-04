import React from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={styles.wrapp}>
      <div className={styles.navbar}>
        <div className={styles.menu}>
          <ul>
            <Link to="/">
              <button className={styles.btn}>home</button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
