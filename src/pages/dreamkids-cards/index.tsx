import styles from "./dreamkids-cards.module.scss";
import avatar from "src/assets/img/avatar.png";
import { CustomButton } from "src/components/common";
import cardImg from "src/assets/img/all-cardsimg.png";
import { useScreenSize } from "src/utils/useWindowSize";

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
                    Подробнее
                  </CustomButton>
                </div>
              </div>

              <div className={styles.images}>
                <img src={cardImg} alt={item.title} />
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

const kidsData = [
  {
    background: "#4d90eb",
    avatar: avatar,
    name: "Комилжонов Саидкамол",
    img: cardImg,
    title: "Aleksandr",
    description:
      "Похож на человека с голубоватой кожей. Крупные руки, длинные пальцы, густые брови. На голове чалма с золотым значком. Носит синий плащ. Усы длинные, закрученные вверх. Хвост как вихрь, вместо ног.",
  },
  {
    background: "#f5a623",
    avatar: avatar,
    name: "Собирова Малика",
    img: cardImg,
    title: "Luna",
    description:
      "Девочка с серебристыми волосами и светящимися глазами. Она управляет лунным светом и умеет делать ночное небо ярче. Всегда носит белое платье с блестками.",
  },
  {
    background: "#f44336",
    avatar: avatar,
    name: "Рахимов Амир",
    img: cardImg,
    title: "Blaze",
    description:
      "Мальчик, который управляет огнём. Его руки покрыты узорами, напоминающими пламя. На спине огненные крылья, а глаза светятся янтарным цветом.",
  },
  {
    background: "#50e3c2",
    avatar: avatar,
    name: "Каримова Диана",
    img: cardImg,
    title: "Aqua",
    description:
      "Живет в подводном мире. У неё голубые волосы, а кожа слегка переливается, как вода. Может вызывать дождь и говорить с морскими существами.",
  },
  {
    background: "#9013fe",
    avatar: avatar,
    name: "Мирзаев Шерзод",
    img: cardImg,
    title: "Volt",
    description:
      "Его тело излучает электричество. Он двигается со скоростью молнии и может заряжать всё вокруг. На его куртке всегда сверкает знак молнии.",
  },
];
