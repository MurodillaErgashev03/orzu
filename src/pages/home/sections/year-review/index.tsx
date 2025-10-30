import { Money, Star, User } from "src/assets/svg";
import styles from "./year-review.module.scss";

function YearReview() {
  return (
    <div className={styles.yearReview}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.topBlock}>
            <div className={styles.textWrapper}>
              <h2>КАК ЭТО БЫЛО В ПРОШЛОМ ГОДУ</h2>
              <div className={styles.descriptionWrapper}>
                <p>
                  Проект Orzu стартовал в прошлом году и вызвал широкий
                  общественный отклик. Тогда слабовидящие дети описывали
                  картины, которые художники создавали по их словам при помощи
                  нейросетей. Каждая работа стала отражением их внутреннего мира
                  — того, что они чувствуют и представляют.
                </p>
                <p>
                  Затем прошла выставка и благотворительный аукцион. Все картины
                  были проданы, а вырученные средства направлены на лечение и
                  реабилитацию 15 детей с нарушением зрения.
                </p>
              </div>
            </div>
            <iframe
              style={{
                borderRadius: "20px",
              }}
              width="687"
              height="465"
              src="https://www.youtube.com/embed/NHXFQSlXNa4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.cards}>
            {cardData.map((item) => (
              <div key={item.id} className={styles.card}>
                {item.icon}
                <h3>{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YearReview;

const cardData = [
  { id: 1, icon: <Money />, text: "150+ млн сумов собрано" },
  { id: 2, icon: <Star />, text: "20 картин продано" },
  { id: 3, icon: <User />, text: "15 детей участвовало" },
];
