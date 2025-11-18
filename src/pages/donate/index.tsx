import { CustomButton } from "src/components/common";
import styles from "./donate.module.scss";
import { Flex } from "antd";
import avatar from "src/assets/img/donate-avatar.png";
import { useScreenSize } from "src/utils/useWindowSize";
import { useTranslation } from "react-i18next";

function DonatePage() {
  const isDesktop = useScreenSize(1130);
  const isMobile = useScreenSize(850);

  const { t } = useTranslation();

  const kidsData = [
    { img: avatar, title: t("donate.name1") },
    { img: avatar, title: t("donate.name2") },
    { img: avatar, title: t("donate.name3") },
    { img: avatar, title: t("donate.name4") },
    { img: avatar, title: t("donate.name5") },
    { img: avatar, title: t("donate.name6") },
    { img: avatar, title: t("donate.name7") },
    { img: avatar, title: t("donate.name8") },
    { img: avatar, title: t("donate.name9") },
    { img: avatar, title: t("donate.name10") },
    { img: avatar, title: t("donate.name11") },
    { img: avatar, title: t("donate.name12") },
    { img: avatar, title: t("donate.name13") },
    { img: avatar, title: t("donate.name14") },
  ];

  return (
    <div className={styles.donatePage}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.topContent}>
            <div className={styles.titleWrapper}>
              <h2>{t("donate.title")}</h2>
              <p>{t("donate.desc")}</p>
            </div>
            <div className={styles.buttonWrapper}>
              <Flex
                style={{
                  flexDirection: isMobile ? "column" : "row",
                  gap: isMobile ? "20px" : "",
                }}
                justify="space-between"
              >
                <CustomButton
                  fontSize={isDesktop ? 32 : isMobile ? 24 : 50}
                  height={isMobile ? 64 : 100}
                  borderColor="white"
                  bg="inherit"
                  width={isMobile ? "100%" : "70%"}
                  textColor="white"
                  borderRadius={66}
                >
                  {t("donate.nameBtn")}
                </CustomButton>
                <CustomButton
                  fontSize={isDesktop ? 32 : isMobile ? 24 : 50}
                  height={isMobile ? 64 : 100}
                  borderColor="#FFFE46"
                  bg="#FFFE46"
                  width={isMobile ? "100%" : "28%"}
                  borderRadius={66}
                >
                  {t("donate.anonimBtn")}
                </CustomButton>
              </Flex>
              <CustomButton
                style={{
                  marginTop: "20px",
                }}
                fontSize={isDesktop ? 32 : isMobile ? 24 : 50}
                height={isMobile ? 64 : 100}
                borderColor="#ffffff"
                bg="#ffffff"
                width={"100%"}
                borderRadius={66}
              >
                {t("donate.supportBtn")}
              </CustomButton>
            </div>
          </div>

          <div className={styles.bottomBlock}>
            <h3> {t("donate.subtitle")}</h3>
            <div className={styles.cards}>
              {kidsData.map((kid, index) => (
                <div key={index} className={styles.card}>
                  <img src={kid.img} alt={kid.title} />
                  <h4>{kid.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonatePage;
