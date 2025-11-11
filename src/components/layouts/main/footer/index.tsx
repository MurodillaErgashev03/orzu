import {
  Bird,
  Facebook,
  Instagram,
  LogoFooter,
  LogoFooterMobile,
  Telegram,
} from "src/assets/svg";
import styles from "./footer.module.scss";
import img1 from "src/assets/img/footerimg1.png";
import img2 from "src/assets/img/footerimg2.png";
import { Flex } from "antd";
import { useScreenSize } from "src/utils/useWindowSize";

function Footer() {
  const isMobile = useScreenSize(650);
  return (
    <footer className={styles.footer}>
      <div className={styles.topContent}>
        <div className={styles.leftBg}></div>
        <div className={styles.rightBg}></div>

        <div
          className="container"
          style={{
            width: "100%",
            paddingLeft: isMobile ? "10px" : "",
            paddingRight: isMobile ? "10px" : "",
          }}
        >
          <div className={styles.inner}>
            <div className={styles.leftBlock}>
              <div>
                <h3>ВЫСТАВКА СКУЛЬПТУР НЕЗРЯЧИХ ДЕТЕЙ</h3>
                <div className={styles.dateBlock}>
                  <p>20.11-03.12</p>
                </div>
              </div>
              {isMobile ? <LogoFooterMobile /> : <LogoFooter />}
            </div>
            <div className={styles.rightBlock}>
              <div className={styles.rightContent}>
                <img
                  style={isMobile ? { width: "80px" } : {}}
                  className={styles.image}
                  src={img1}
                  alt="img1"
                />
                <div>
                  <h3>ART REGENERATION</h3>
                  <Flex justify="space-between" align="end">
                    <Bird />

                    <div className={styles.location}>
                      <p>3 этаж</p>
                      <h4> Tashkent City Mall</h4>
                    </div>
                  </Flex>
                </div>
                <img
                  style={isMobile ? { width: "70px" } : {}}
                  className={styles.image}
                  src={img2}
                  alt="img2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Flex
          className={styles.bottomContent}
          justify="space-between"
          align="center"
        >
          <Flex gap={160}>
            <div className={styles.linkWrapper}>
              <h5>Главная</h5>
              <div>
                <a href="">Дети / Персонажи</a>
                <a href="">Выставка</a>
                <a href="">Партнеры</a>
              </div>
              <p>© 2025 — ORZU X AVO</p>
            </div>
            <div className={styles.documents}>
              <h5>Полезное</h5>
              <div>
                <p>Пользовательское соглашение</p>
                <p>Политика конфиденциальности</p>
              </div>
              <Flex className={styles.icons} gap={33}>
                <Telegram />
                <Instagram />
                <Facebook />
              </Flex>
            </div>
          </Flex>
          <LogoFooter />
        </Flex>

        <div className={styles.mobileBlock}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className={styles.linkWrapper}>
              <h5>Главная</h5>
              <div>
                <a href="">Дети / Персонажи</a>
                <a href="">Выставка</a>
                <a href="">Партнеры</a>
              </div>
            </div>
            <LogoFooter />
          </div>
          <div className={styles.documents}>
            <h5>Полезное</h5>
            <div>
              <p>Пользовательское соглашение</p>
              <p>Политика конфиденциальности</p>
            </div>
          </div>
          <Flex
            style={{
              marginTop: "65px",
              flexDirection: "row",
            }}
            className={styles.icons}
            gap={33}
          >
            <Telegram />
            <Instagram />
            <Facebook />
          </Flex>
          <p className={styles.mobileTitle}>© 2025 — ORZU X AVO</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
