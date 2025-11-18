import { CustomButton } from "src/components/common";
import styles from "./idea-support.module.scss";
import avatar from "src/assets/img/avatar.png";
import { useScreenSize } from "src/utils/useWindowSize";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Donator {
  id: number;
  name: string;
  initials: string;
  quote: string;
  avatarUrl: string;
}

function IdeaSupport() {
  const isMobile = useScreenSize(1200);
  const isMobileTitle = useScreenSize(786);
  const { t } = useTranslation();

  const donators: Donator[] = [
    {
      id: 1,
      name: t("home.ideaSupport.donators.d1.name"),
      initials: t("home.ideaSupport.donators.d1.initials"),
      quote: t("home.ideaSupport.donators.d1.quote"),
      avatarUrl: avatar,
    },
    {
      id: 2,
      name: t("home.ideaSupport.donators.d2.name"),
      initials: t("home.ideaSupport.donators.d2.initials"),
      quote: t("home.ideaSupport.donators.d2.quote"),
      avatarUrl: avatar,
    },
    {
      id: 3,
      name: t("home.ideaSupport.donators.d3.name"),
      initials: t("home.ideaSupport.donators.d3.initials"),
      quote: t("home.ideaSupport.donators.d3.quote"),
      avatarUrl: avatar,
    },
    {
      id: 4,
      name: t("home.ideaSupport.donators.d4.name"),
      initials: t("home.ideaSupport.donators.d4.initials"),
      quote: t("home.ideaSupport.donators.d4.quote"),
      avatarUrl: avatar,
    },
    {
      id: 5,
      name: t("home.ideaSupport.donators.d5.name"),
      initials: t("home.ideaSupport.donators.d5.initials"),
      quote: t("home.ideaSupport.donators.d5.quote"),
      avatarUrl: avatar,
    },
    {
      id: 6,
      name: t("home.ideaSupport.donators.d6.name"),
      initials: t("home.ideaSupport.donators.d6.initials"),
      quote: t("home.ideaSupport.donators.d6.quote"),
      avatarUrl: avatar,
    },
  ];
  const infiniteDonators = [...donators, ...donators, ...donators, ...donators];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/donate");
  };

  return (
    <div className={styles.ideaSupport}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <h2 className={styles.title}>{t("home.ideaSupport.title")}</h2>
            <CustomButton
              style={{
                height: 100,
                borderRadius: 66,
                display: isMobile ? "none" : "inline-block",
              }}
              width={"100%"}
              fontSize={50}
              bg="#FAFF00"
            >
              {t("home.ideaSupport.button")}
            </CustomButton>
          </div>
          <div className={styles.rightBlock}>
            <div
              className={styles.titleBlock}
              style={{
                display: isMobileTitle ? "none" : "flex",
              }}
            >
              <h3>{t("home.ideaSupport.donorsList")}</h3>
              <CustomButton
                borderColor="white"
                textColor="white"
                bg="inherit"
                height={50}
                onClick={handleClick}
                style={{
                  cursor: "pointer",
                }}
              >
                {t("home.ideaSupport.donorsListOpen")}
              </CustomButton>
            </div>

            <div className={styles.carouselContainer}>
              <div className={styles.carouselTrack}>
                {infiniteDonators.map((donator, index) => (
                  <div
                    className={styles.donatorCard}
                    key={`${donator.id}-${index}`}
                  >
                    <div className={styles.cardContent}>
                      <div className={styles.cardAvatarWrapper}>
                        <img
                          src={donator.avatarUrl}
                          alt={donator.initials}
                          className={styles.cardAvatar}
                        />
                      </div>
                      <div className={styles.cardInfo}>
                        <h3 className={styles.cardName}>{donator.name}</h3>
                        <p className={styles.cardQuote}>{donator.quote}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={styles.titleBlock}
              style={{
                display: isMobileTitle ? "inline-block" : "none",
              }}
            >
              <h3
                style={{
                  cursor: "pointer",
                  fontSize: "24px",
                  marginTop: "24px",
                }}
                onClick={handleClick}
              >
                {t("home.ideaSupport.donorsList")}
              </h3>
            </div>

            <CustomButton
              style={{
                height: 64,
                borderRadius: 66,
                display: isMobile ? "inline-block" : "none",
                marginTop: "60px",
              }}
              width={"100%"}
              fontSize={24}
              bg="#FAFF00"
            >
              {t("home.ideaSupport.button")}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaSupport;

//
