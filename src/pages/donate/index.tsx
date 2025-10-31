import { CustomButton } from "src/components/common";
import styles from "./donate.module.scss";
import { Flex } from "antd";
import avatar from "src/assets/img/donate-avatar.png";

const kidsData = [
  { img: avatar, title: "Айша К." },
  { img: avatar, title: "Саидкамол К." },
  { img: avatar, title: "Малика Н." },
  { img: avatar, title: "Амир А." },
  { img: avatar, title: "Диана Р." },
  { img: avatar, title: "Иброхим М." },
  { img: avatar, title: "Фотима Х." },
  { img: avatar, title: "Камила С." },
  { img: avatar, title: "Мухаммад А." },
  { img: avatar, title: "София П." },
  { img: avatar, title: "Ислам Ж." },
  { img: avatar, title: "Раяна Т." },
  { img: avatar, title: "Омар Ш." },
  { img: avatar, title: "Лейла Ф." },
];

function DonatePage() {
  return (
    <div className={styles.donatePage}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.topContent}>
            <div className={styles.titleWrapper}>
              <h2>Поддержи идею</h2>
              <p>
                Orzu 3.0 x AVO — это история о заботе, технологиях и детской
                вере, которая способна изменить реальность.
              </p>
            </div>
            <div className={styles.buttonWrapper}>
              <Flex justify="space-between">
                <CustomButton
                  fontSize={50}
                  height={100}
                  borderColor="white"
                  bg="inherit"
                  width={"70%"}
                  textColor="white"
                  borderRadius={66}
                >
                  Имя
                </CustomButton>
                <CustomButton
                  fontSize={50}
                  height={100}
                  borderColor="#FFFE46"
                  bg="#FFFE46"
                  width={"28%"}
                  borderRadius={66}
                >
                  Анонимно
                </CustomButton>
              </Flex>
              <CustomButton
                style={{
                  marginTop: "26px",
                }}
                fontSize={50}
                height={100}
                borderColor="#ffffff"
                bg="#ffffff"
                width={"100%"}
                borderRadius={66}
              >
                Анонимно
              </CustomButton>
            </div>
          </div>

          <div className={styles.bottomBlock}>
            <h3>Список донаторов</h3>
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
