import styles from "./home.module.scss";
import DreamKids from "./sections/dreamkids";
import HomeHero from "./sections/hero";
import IdeaSupport from "./sections/idea-support";
import HomeSlide from "./sections/slide";

function Home() {
  return (
    <div className={styles.home}>
      <HomeHero />
      <HomeSlide />
      {/* <HomeSwiper /> */}
      <DreamKids />
      <IdeaSupport />
    </div>
  );
}

export default Home;
