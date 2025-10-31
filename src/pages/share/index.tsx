import styles from "./share.module.scss";
import img from "src/assets/img/thanks-img.png";

function Share() {
  return (
    <div className={styles.share}>
      <div className="container">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Share;
