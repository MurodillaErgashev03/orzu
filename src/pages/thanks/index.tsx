import { CustomButton } from "src/components/common";
import styles from "./thanks.module.scss";

function Thanks() {
  return (
    <div className={styles.thanks}>
      <div className="container">
        <div className={styles.content}>
          <h3>СПАСИБО ЗА ПОМОЩЬ</h3>

          <div className={styles.buttonBlock}>
            <CustomButton
              fontSize={50}
              height={100}
              borderColor="white"
              bg="white"
              width={437}
              borderRadius={66}
            >
              ПОДЕЛИТЬСЯ
            </CustomButton>
            <CustomButton
              fontSize={50}
              height={100}
              borderColor="black"
              bg="black"
              width={336}
              textColor="white"
              borderRadius={66}
            >
              ПОДДЕРЖАТЬ
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
