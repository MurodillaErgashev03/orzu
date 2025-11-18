import styles from "./dreamkids-cards.module.scss";
import avatar from "src/assets/img/avatar.png";
import { CustomButton } from "src/components/common";
import img from "src/assets/img/all-cardsimg.png";
import { useScreenSize } from "src/utils/useWindowSize";
import { useTranslation } from "react-i18next";

interface IKidsCardProps {
  avatar: string;
  background?: string;
  name: string;
  img: string;
  title: string;
  description: string;
  onClick?: () => void;
}
function KidsAllCards() {
  const isMobile = useScreenSize(500);

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
      background: "#13fe8cff",
      avatar: avatar,
      name: t("home.dreamKids.card.name6"),
      img: img,
      title: t("home.dreamKids.card.bigName6"),
      description: t("home.dreamKids.card.description6"),
    },
  ];

  return (
    <div className={styles.kidsAllCards}>
      <div className="container">
        <div className={styles.cards}>
          {kidsData.map((item, i) => (
            <div
              className={styles.kidsCards}
              style={{
                background: item.background,
              }}
            >
              <div className={styles.leftBlock}>
                <div className={styles.topcontent}>
                  <img className={styles.avatar} src={avatar} alt={item.name} />
                  <p className={styles.name}>{item.name}</p>
                </div>

                <div className={styles.bottomContent}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>

                  <CustomButton
                    height={47}
                    style={{
                      padding: "0 20px",
                      marginTop: "26px",
                    }}
                    textColor="#1454CD"
                    borderColor="#1454CD"
                    bg="inherit"
                  >
                    {t("home.dreamKids.button1")}
                  </CustomButton>
                </div>
              </div>

              <div>
                <img
                  className={styles.images}
                  src={item.img}
                  alt={item.title}
                />
              </div>

              {isMobile ? (
                <div
                  style={{
                    height: "54px",
                    width: "100%",
                    marginTop: "25px",
                  }}
                >
                  <CustomButton
                    width={"100%"}
                    style={{
                      width: "100%",
                    }}
                    textColor="#1454CD"
                    borderColor="#1454CD"
                    bg="inherit"
                  >
                    Подробнее
                  </CustomButton>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KidsAllCards;
