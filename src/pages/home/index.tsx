import styles from "./home.module.scss";
import DreamKids from "./sections/dreamkids";
import HomeHero from "./sections/hero";
import IdeaSupport from "./sections/idea-support";
import HomeSlide from "./sections/slide";
import YearReview from "./sections/year-review";

function Home() {
  return (
    <div className={styles.home}>
      <HomeHero />
      <HomeSlide />
      {/* <HomeSwiper /> */}
      <DreamKids />
      <IdeaSupport />
      <YearReview />
    </div>
  );
}

export default Home;
