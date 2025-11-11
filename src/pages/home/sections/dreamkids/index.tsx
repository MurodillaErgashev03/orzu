import avatar from "src/assets/img/avatar.png";
import img from "src/assets/img/kids-card-img.png";
import { CustomButton } from "src/components/common";
import { colors } from "src/constants/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import KidsCards from "./components/cards";
import styles from "./dreamkids.module.scss";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "src/utils/useWindowSize";

function DreamKids() {
  const navigate = useNavigate();
  const isMobile = useScreenSize(786);

  const handleClick = () => {
    navigate("/all-cards");
  };
  return (
    <div className={styles.dreamkids}>
      <div className="container">
        <div className={styles.contentTop}>
          <h2 className={styles.title}>Дети, которые мечтают</h2>
          <CustomButton
            style={{
              cursor: "pointer",
              display: isMobile ? "none" : "inline-block",
            }}
            onClick={handleClick}
            borderColor={colors.black}
          >
            Посмотреть все
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
          Посмотреть все
        </CustomButton>
      </div>
    </div>
  );
}

export default DreamKids;

const kidsData = [
  {
    background: "#4d90eb",
    avatar: avatar,
    name: "Комилжонов Саидкамол",
    img: img,
    title: "Aleksandr",
    description:
      "Похож на человека с голубоватой кожей. Крупные руки, длинные пальцы, густые брови. На голове чалма с золотым значком. Носит синий плащ. Усы длинные, закрученные вверх. Хвост как вихрь, вместо ног.",
  },
  {
    background: "#f5a623",
    avatar: avatar,
    name: "Собирова Малика",
    img: img,
    title: "Luna",
    description:
      "Девочка с серебристыми волосами и светящимися глазами. Она управляет лунным светом и умеет делать ночное небо ярче. Всегда носит белое платье с блестками.",
  },
  {
    background: "#f44336",
    avatar: avatar,
    name: "Рахимов Амир",
    img: img,
    title: "Blaze",
    description:
      "Мальчик, который управляет огнём. Его руки покрыты узорами, напоминающими пламя. На спине огненные крылья, а глаза светятся янтарным цветом.",
  },
  {
    background: "#50e3c2",
    avatar: avatar,
    name: "Каримова Диана",
    img: img,
    title: "Aqua",
    description:
      "Живет в подводном мире. У неё голубые волосы, а кожа слегка переливается, как вода. Может вызывать дождь и говорить с морскими существами.",
  },
  {
    background: "#9013fe",
    avatar: avatar,
    name: "Мирзаев Шерзод",
    img: img,
    title: "Volt",
    description:
      "Его тело излучает электричество. Он двигается со скоростью молнии и может заряжать всё вокруг. На его куртке всегда сверкает знак молнии.",
  },
];
