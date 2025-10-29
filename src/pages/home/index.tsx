import styles from "./home.module.scss";
import DreamKids from "./sections/dreamkids";
import HomeHero from "./sections/hero";
import HomeSlide from "./sections/slide";

function Home() {
  return (
    <div className={styles.home}>
      <HomeHero />
      <HomeSlide />
      {/* <HomeSwiper /> */}
      <DreamKids />
    </div>
  );
}

export default Home;
