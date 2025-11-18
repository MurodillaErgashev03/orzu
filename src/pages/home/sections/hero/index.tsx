import { useTranslation } from "react-i18next";
import styles from "./home-hero.module.scss";
import left from "src/assets/img/left-charachters.png";
import right from "src/assets/img/right-charachters.png";

function HomeHero() {
  const { t } = useTranslation();
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.iframe}
              style={{
                borderRadius: "20px",
              }}
              width="830"
              height="470 "
              src="https://www.youtube.com/embed/NHXFQSlXNa4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles.imagesWrapper}>
            <img
              className={styles.leftImage}
              src={left}
              alt="left characters"
            />
            <img
              className={styles.rightImage}
              src={right}
              alt="right characters"
            />
          </div>

          <div className={styles.textWrapper}>
            <div className={styles.titleBlock}>
              <div className={styles.mobileBlock}>
                <span>20.11-03.12</span>
              </div>
              <h3>{t("home.hero.title")}</h3>
              <p>{t("home.hero.description")}</p>
            </div>
            <div className={styles.informationBlock}>
              <div>
                <span>20.11-03.12</span>
              </div>
              <h4>{t("home.hero.eventName")}</h4>
              <p>{t("home.hero.location")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
