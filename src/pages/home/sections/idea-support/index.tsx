import { CustomButton } from "src/components/common";
import styles from "./idea-support.module.scss";
import avatar from "src/assets/img/avatar.png";

interface Donator {
  id: number;
  name: string;
  initials: string;
  quote: string;
  avatarUrl: string;
}

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

function IdeaSupport() {
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
              }}
              width={"100%"}
              fontSize={50}
              bg="#FAFF00"
            >
              Поддержать
            </CustomButton>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.titleBlock}>
              <h3>Список донаторов</h3>
              <CustomButton
                borderColor="white"
                textColor="white"
                bg="inherit"
                height={50}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaSupport;
