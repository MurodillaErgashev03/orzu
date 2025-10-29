import { CustomButton } from "src/components/common";
import styles from "./kids-cards.module.scss";

interface IKidsCardProps {
  avatar: string;
  background?: string;
  name: string;
  img: string;
  title: string;
  description: string;
  onClick?: () => void;
}

function KidsCards({
  avatar,
  name,
  img,
  title,
  description,
  background,
  onClick,
}: IKidsCardProps) {
  return (
    <div
      className={styles.kidsCards}
      style={{
        background: background,
      }}
    >
      <div className={styles.topcontent}>
        <img className={styles.avatar} src={avatar} alt={name} />
        <p className={styles.name}>{name}</p>
      </div>

      <img className={styles.images} src={img} alt={title} />

      <div className={styles.bottomContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <CustomButton
          height={47}
          style={{
            padding: "0 20px",
            marginTop: "26px",
          }}
          textColor="#1454CD"
          borderColor="#1454CD"
          bg="inherit"
          onClick={onClick}
        >
          Подробнее
        </CustomButton>
      </div>
    </div>
  );
}

export default KidsCards;
