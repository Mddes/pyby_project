import styles from "./Contacts.module.css";
import React from "react";

const Contacts = () => {
    return (
        <div className={styles.wrapp}>
            <div className={styles.contacts__left}>
                <div className={styles.leftTop}>
                    <p>Рекламодателям</p>
                    <p className={styles.smoke}>
                        Высокий охват целевой аудитории и доступность выбора ограничений по
                        содержанию рекламного контента - дает возможность существенно
                        повысить эффективность вашей рекламной кампании.
                    </p>
                    <button className={styles.btn}>Стать рекламодателем</button>
                </div>
                <div className={styles.flex}>
                    <a
                        className={styles.a}
                        href="tg://resolve?domain=ValeriiS03"
                        target="_blank"
                    >
                        <div>
                            <span>@ValeriiS03</span>
                        </div>
                    </a>

                    <a
                        className={styles.a}
                        href="skype:live:valerii.s_1?chat"
                        target="_blank"
                    >
                        <div>
                            <span>live:valerii.s_1 </span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="contacts__right">
                <div className={styles.rightTop}>
                    <p>Вебмастерам</p>
                    <p className={styles.smoke}>
                        Высокий охват целевой аудитории и доступность выбора ограничений по
                        содержанию рекламного контента - дает возможность существенно
                        повысить эффективность вашей рекламной кампании.
                    </p>
                    <button className={styles.btn}>Стать вебмастером</button>
                </div>
                <div className={styles.flex}>
                    <a
                        className={styles.a}
                        href="tg://resolve?domain=alex_agency"
                        target="_blank"
                    >
                        <div>
                            <span>@alex_agency </span>
                        </div>
                    </a>
                    <a
                        className={styles.a}
                        href="skype:live:alex.buyer_1?chat"
                        target="_blank"
                    >
                        <div>
                            <span>live:alex.buyer_1 </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
