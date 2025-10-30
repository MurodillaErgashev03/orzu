import styles from "./partners.module.scss";
import img1 from "src/assets/img/partners1.png";
import img2 from "src/assets/img/partners2.png";
import img3 from "src/assets/img/partners3.png";
import img4 from "src/assets/img/partners4.png";
import img5 from "src/assets/img/partners5.png";

function Partners() {
  return (
    <div className={styles.partners}>
      <div className="container">
        <div className={styles.titleContent}>
          <h3>партнеры</h3>
          <p>
            Этот проект стал возможен благодаря тем, кто верит в силу искусства,
            технологии и важность инклюзии.
          </p>
        </div>
        <div className={styles.backImgWrapper}>
          <p>
            AVObank — главный партнёр проекта, обеспечивший его реализацию и
            поддержку на каждом этапе.
          </p>
        </div>

        <div className={styles.logos}>
          {ImgData.map((img) => (
            <div className={styles.logoItem} key={img.id}>
              <img src={img.imgSrc} alt={`partner-${img.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;

export const ImgData = [
  {
    id: 1,
    imgSrc: img1,
  },
  {
    id: 2,
    imgSrc: img2,
  },
  {
    id: 3,
    imgSrc: img3,
  },
  {
    id: 4,
    imgSrc: img4,
  },
  {
    id: 5,
    imgSrc: img5,
  },
];
