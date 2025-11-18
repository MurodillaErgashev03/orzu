import avatar from "src/assets/img/avatar.png";
import img from "src/assets/img/kids-card-img.png";
import { CustomButton } from "src/components/common";
import { colors } from "src/constants/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import KidsCards from "./components/cards";
import styles from "./dreamkids.module.scss";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "src/utils/useWindowSize";
import { useTranslation } from "react-i18next";

function DreamKids() {
  const navigate = useNavigate();
  const isMobile = useScreenSize(786);
  const { t } = useTranslation();

  const kidsData = [
    {
      background: "#4d90eb",
      avatar: avatar,
      name: t("home.dreamKids.card.name1"),
      img: img,
      title: t("home.dreamKids.card.bigName1"),
      description: t("home.dreamKids.card.description1"),
    },
    {
      background: "#f5a623",
      avatar: avatar,
      name: t("home.dreamKids.card.name2"),
      img: img,
      title: t("home.dreamKids.card.bigName2"),
      description: t("home.dreamKids.card.description2"),
    },
    {
      background: "#f44336",
      avatar: avatar,
      name: t("home.dreamKids.card.name3"),
      img: img,
      title: t("home.dreamKids.card.bigName3"),
      description: t("home.dreamKids.card.description3"),
    },
    {
      background: "#50e3c2",
      avatar: avatar,
      name: t("home.dreamKids.card.name4"),
      img: img,
      title: t("home.dreamKids.card.bigName4"),
      description: t("home.dreamKids.card.description4"),
    },
    {
      background: "#9013fe",
      avatar: avatar,
      name: t("home.dreamKids.card.name5"),
      img: img,
      title: t("home.dreamKids.card.bigName5"),
      description: t("home.dreamKids.card.description5"),
    },
    {
      background: "#9013fe",
      avatar: avatar,
      name: t("home.dreamKids.card.name6"),
      img: img,
      title: t("home.dreamKids.card.bigName6"),
      description: t("home.dreamKids.card.description6"),
    },
  ];

  const handleClick = () => {
    navigate("/all-cards");
  };
  return (
    <div className={styles.dreamkids}>
      <div className="container">
        <div className={styles.contentTop}>
          <h2 className={styles.title}>{t("home.dreamKids.title")}</h2>
          <CustomButton
            style={{
              cursor: "pointer",
              display: isMobile ? "none" : "inline-block",
            }}
            onClick={handleClick}
            borderColor={colors.black}
          >
            {t("home.dreamKids.button")}
          </CustomButton>
        </div>
      </div>
      <div className={styles.cards} style={{ marginTop: "47px" }}>
        <Swiper
          spaceBetween={33}
          slidesPerView={2.9}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            560: {
              slidesPerView: 1.6,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1.9,
              spaceBetween: 20,
            },
            1420: {
              slidesPerView: 2.9,
              spaceBetween: 20,
            },
          }}
          loop={true}
          style={{ width: "100%" }}
        >
          {kidsData.map((kid, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <KidsCards
                background={kid.background}
                avatar={kid.avatar}
                name={kid.name}
                img={kid.img}
                title={kid.title}
                description={kid.description}
                onClick={() => console.log(`Clicked on ${kid.name}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <CustomButton
          style={{
            cursor: "pointer",
            marginTop: "32px",
            display: isMobile ? "inline-block" : "none",
          }}
          onClick={handleClick}
          borderColor={colors.black}
        >
          {t("home.dreamKids.button")}
        </CustomButton>
      </div>
    </div>
  );
}

export default DreamKids;
