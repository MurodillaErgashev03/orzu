import styles from "./home.module.scss";
import DreamKids from "./sections/dreamkids";
import HomeHero from "./sections/hero";
import IdeaSupport from "./sections/idea-support";
import Partners from "./sections/partners";
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
      <Partners />
    </div>
  );
}

export default Home;
