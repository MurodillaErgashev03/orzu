import { CustomButton } from "src/components/common";
import styles from "./idea-support.module.scss";
import avatar from "src/assets/img/avatar.png";
import { useScreenSize } from "src/utils/useWindowSize";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/donate");
  };

  return (
    <div className={styles.ideaSupport}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <h2 className={styles.title}>ПОДДЕРЖИ ИДЕЮ</h2>
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
              Поддержать
            </CustomButton>
          </div>
          <div className={styles.rightBlock}>
            <div
              className={styles.titleBlock}
              style={{
                display: isMobileTitle ? "none" : "flex",
              }}
            >
              <h3>Список донаторов</h3>
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
                открыть
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
                Список донаторов
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
              Поддержать
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaSupport;

const donators: Donator[] = [
  {
    id: 1,
    name: "ДАНИИЛ Р.",
    initials: "ДР",
    quote: "“Горжусь быть частью этого пути”",
    avatarUrl: avatar,
  },
  {
    id: 2,
    name: "ДАНИИЛ Р.",
    initials: "ДР",
    quote: "“Горжусь быть частью этого пути”",
    avatarUrl: avatar,
  },
  {
    id: 3,
    name: "НУР М.",
    initials: "НМ",
    quote: "“Горжусь быть частью этого пути”",
    avatarUrl: avatar,
  },
  {
    id: 4,
    name: "АЛИШЕР Т.",
    initials: "АТ",
    quote: "“Rahmat, ajoyib loyiha!”",
    avatarUrl: avatar,
  },
  {
    id: 5,
    name: "ЕЛЕНА С.",
    initials: "ЕС",
    quote: "“Men ham qo'llab-quvvatlayman.”",
    avatarUrl: avatar,
  },
  {
    id: 6,
    name: "САИД К.",
    initials: "СК",
    quote: "“Omad tilayman!”",
    avatarUrl: avatar,
  },
];

const infiniteDonators = [...donators, ...donators, ...donators, ...donators];
