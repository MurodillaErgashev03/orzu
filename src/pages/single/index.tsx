import { Flex } from "antd";
import styles from "./single.module.scss";
import cardimg from "src/assets/img/single-card.png";
import img from "src/assets/img/freepik.png";
import modern from "src/assets/img/modern.png";
import { I3Dcube } from "iconsax-react";
import IdeaSupport from "../home/sections/idea-support";
import { useScreenSize } from "src/utils/useWindowSize";
import { useTranslation } from "react-i18next";

function SinglePage() {
  const isMobile = useScreenSize(650);
  const { t } = useTranslation();

  return (
    <div className={styles.single}>
      <div className="container">
        <div className={styles.content}>
          <Flex className={styles.topContent} gap={16}>
            <div className={styles.userCard}>
              <img src={cardimg} alt="card-img" />
              <h3>{t("single.topTitle")}</h3>
              <p>{t("single.topdesc")}</p>
            </div>

            <iframe
              style={{
                borderRadius: "20px",
                width: "100%",
              }}
              className={styles.iframe}
              src="https://www.youtube.com/embed/NHXFQSlXNa4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Flex>

          <Flex className={styles.bottomBlock}>
            <Flex className={styles.leftBlock}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3>Defne</h3>
                  <p>{t("single.bottomLeftDesc")}</p>
                </div>
                <h5>{t("single.sculptureExhibit")}</h5>
              </div>
              <img src={img} alt="" />
              <h6>{t("single.sculptureExhibit")}</h6>

              {isMobile ? "" : <I3Dcube size="32" color="black" />}
            </Flex>

            <div className={styles.images}>
              <img src={modern} alt="modern" />
            </div>
          </Flex>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
        }}
      >
        <IdeaSupport />
      </div>
    </div>
  );
}

export default SinglePage;
