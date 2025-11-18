import { useTranslation } from "react-i18next";
import styles from "./partners.module.scss";
import img1 from "src/assets/img/partners1.png";
import img2 from "src/assets/img/partners2.png";
import img3 from "src/assets/img/partners3.png";
import img4 from "src/assets/img/partners4.png";
import img5 from "src/assets/img/partners5.png";
import { Swiper, SwiperSlide } from "swiper/react";

function Partners() {
  const { t } = useTranslation();
  return (
    <div className={styles.partners}>
      <div className="container">
        <div className={styles.titleContent}>
          <h3>{t("home.partners.title")}</h3>
          <p>{t("home.partners.desc1")}</p>
        </div>
        <div className={styles.backImgWrapper}>
          <p>{t("home.partners.desc2")}</p>
        </div>

        <Swiper
          spaceBetween={33}
          slidesPerView={5}
          breakpoints={{
            0: {
              slidesPerView: 2.7,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          loop={true}
          style={{ width: "100%" }}
        >
          {ImgData.map((img, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  marginTop: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className={styles.logoItem}
                key={img.id}
              >
                <img
                  className={styles.partnersLogo}
                  src={img.imgSrc}
                  alt={`partner-${img.id}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Partners;

export const ImgData = [
  {
    id: 1,
    imgSrc: img1,
  },
  {
    id: 2,
    imgSrc: img2,
  },
  {
    id: 3,
    imgSrc: img3,
  },
  {
    id: 4,
    imgSrc: img4,
  },
  {
    id: 5,
    imgSrc: img5,
  },
];
