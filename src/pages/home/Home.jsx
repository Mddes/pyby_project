import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <p>
          рекламная сеть <span className={styles.blue}> playbuy.agency</span>
        </p>
        <h1 style={{ margin: "30px 0" }}>
          Рекламная сеть <br /> Больших возможностей
        </h1>
        <p className={styles.smoke}>
          Мы создаем уникальные решения монетизации <br /> десктопного и
          мобильного трафика на своей инновационной платформе,
          <br /> используя наиболее эффективные форматы рекламы.
        </p>
        <div className={styles.btnWrapp}>
          <Link to="/pyby_project/main">
            <button className={styles.btn}>Рекламодателям</button>
          </Link>
          <Link to="/pyby_project/main">
          <button className={styles.btn}>Вебмастерам</button>
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.fs60}>Наши преимущества для рекламодателей:</p>

        <div className={styles.cardWrapp}>
          <div className={styles.card}>
            <p className={styles.smoke}>Только качественный “живой” трафик</p>
          </div>
          <div className={styles.card}>
            <p className={styles.smoke}>
              Поддержка квалифицированными специалистами на всех этапах
              рекламной кампании
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.smoke}>Личный менеджер 24/7</p>
          </div>
          <div className={styles.card}>
            <p className={styles.smoke}>Удобный личный кабинет</p>
          </div>
          <div className={styles.card}>
            <p className={styles.smoke}>
              Различные тематики трафика, под любой продукт/услугу
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
