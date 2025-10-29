import { Link } from "react-router-dom";
import { CustomButton } from "src/components/common";
import styles from "./home.module.scss";
import HomeHero from "./sections/hero";
import HomeSlide from "./sections/slide";

function Home() {
  return (
    <div className={styles.home}>
      <HomeHero />
      <HomeSlide />
    </div>
  );
}

export default Home;
