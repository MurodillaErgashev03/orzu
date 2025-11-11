import { Flex } from "antd";
import styles from "./single.module.scss";
import cardimg from "src/assets/img/single-card.png";
import img from "src/assets/img/freepik.png";
import modern from "src/assets/img/modern.png";
import { I3Dcube } from "iconsax-react";
import IdeaSupport from "../home/sections/idea-support";
import { useScreenSize } from "src/utils/useWindowSize";

function SinglePage() {
  const isMobile = useScreenSize(650);

  return (
    <div className={styles.single}>
      <div className="container">
        <div className={styles.content}>
          <Flex className={styles.topContent} gap={16}>
            <div className={styles.userCard}>
              <img src={cardimg} alt="card-img" />
              <h3>Шавкатова Севнора</h3>
              <p>
                Ангел‑хранитель – женский образ в белом платье, с большими
                крыльями; длинные чёрные волосы; хрустальный шар.
              </p>
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
                  <p>
                    Ангел‑хранитель – женский образ в белом платье, с большими
                    крыльями; длинные чёрные волосы; хрустальный шар.
                  </p>
                </div>
                <h5>Скульптура для выставки</h5>
              </div>
              <img src={img} alt="" />
              <h6>Скульптура для выставки</h6>

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
