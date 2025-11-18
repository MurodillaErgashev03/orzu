import { useEffect, useState } from "react";
import styles from "./home-slide.module.scss";
import img1 from "src/assets/img/slide1.png";
import img2 from "src/assets/img/slide2.png";
import img3 from "src/assets/img/slide3.png";
import img4 from "src/assets/img/slide4.png";
import { useTranslation } from "react-i18next";

function HomeSlide() {
  const { t } = useTranslation();
  const STEPS_DATA = [
    {
      step: 1,
      title: "МЕЧТЫ ОБРЕТАЮТ ФОРМУ",
      subtitle: t("home.homeSlide.subTitle1"),
      body: t("home.homeSlide.description1"),
      bgColor: "bg-blue-600",
      imageUrl: img1,
    },
    {
      step: 2,
      title: "ГЕНЕРАЦИЯ ОПИСАНИЙ",
      subtitle: t("home.homeSlide.subTitle2"),
      body: t("home.homeSlide.description2"),
      bgColor: "bg-indigo-600",
      imageUrl: img2,
    },
    {
      step: 3,
      title: "ВОПЛОЩЕНИЕ ОБРАЗОВ",
      subtitle: t("home.homeSlide.subTitle3"),
      body: t("home.homeSlide.description3"),
      bgColor: "bg-purple-600",
      imageUrl: img3,
    },
    {
      step: 4,
      title: "СБОРНИК ГЕРОЕВ",
      subtitle: t("home.homeSlide.subTitle4"),
      body: t("home.homeSlide.description4"),
      bgColor: "bg-pink-600",
      imageUrl: img4,
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const currentData = STEPS_DATA.find((data) => data.step === currentStep);
  const AUTO_ADVANCE_DELAY = 3000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => {
        const nextStep = prevStep === STEPS_DATA.length ? 1 : prevStep + 1;
        return nextStep;
      });
    }, AUTO_ADVANCE_DELAY);

    return () => clearInterval(timer);
  }, []);

  const handleStepClick = (step: any) => {
    setCurrentStep(step);
  };

  if (!currentData) return <div>Error: Step data not found.</div>;
  return (
    <div className={styles.homeSlide}>
      <div className="container">
        <div className={styles.appContainer}>
          <div className={`${styles.leftPanel}`}>
            <h3>{t("home.homeSlide.cardTitle")}</h3>
            <div>
              <h5 className={styles.subtitle}>{currentData.subtitle}</h5>
              <p className={styles.text}>{currentData.body}</p>
            </div>

            <div className={styles.stepsContainer}>
              {STEPS_DATA.map((step) => (
                <div
                  key={step.step}
                  className={`${styles.stepItem} ${currentStep === step.step ? styles.active : ""}`}
                  onClick={() => handleStepClick(step.step)}
                >
                  {t("home.homeSlide.step")} {step.step}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightPanel}>
            <img
              src={currentData.imageUrl}
              alt="Interview Context"
              className={styles.staticImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlide;
