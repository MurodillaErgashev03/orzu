import { Money, Star, User } from "src/assets/svg";
import styles from "./year-review.module.scss";
import { useTranslation } from "react-i18next";

function YearReview() {
  const { t } = useTranslation();

  const cardData = [
    { id: 1, icon: <Money />, text: t("home.yearReview.text1") },
    { id: 2, icon: <Star />, text: t("home.yearReview.text2") },
    { id: 3, icon: <User />, text: t("home.yearReview.text3") },
  ];
  return (
    <div className={styles.yearReview}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.topBlock}>
            <div className={styles.textWrapper}>
              <h2>{t("home.yearReview.title")}</h2>
              <div className={styles.descriptionWrapper}>
                <p>{t("home.yearReview.desc1")}</p>
                <p>{t("home.yearReview.desc2")}</p>
              </div>
            </div>
            <iframe
              style={{
                borderRadius: "20px",
              }}
              width="687"
              height="465"
              src="https://www.youtube.com/embed/NHXFQSlXNa4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
          <div className={styles.cards}>
            {cardData.map((item) => (
              <div key={item.id} className={styles.card}>
                {item.icon}
                <h3>{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YearReview;
