import { useEffect, useState } from "react";
import styles from "./home-slide.module.scss";
import img1 from "src/assets/img/slide1.png";
import img2 from "src/assets/img/slide2.png";

function HomeSlide() {
  const STEPS_DATA = [
    {
      step: 1,
      title: "МЕЧТЫ ОБРЕТАЮТ ФОРМУ", // DREAMS TAKE FORM
      subtitle: "Интервью с детьми", // Interview with children
      body: "We talked to kids and asked them to tell us about their heroes — who they are, what powers they have, and what they look like. From these stories, we created magical descriptions that became the foundation of our prompts.",
      bgColor: "bg-blue-600",
      imageUrl: img1,
    },
    {
      step: 2,
      title: "ГЕНЕРАЦИЯ ОПИСАНИЙ", // DESCRIPTION GENERATION
      subtitle: "Создание волшебного", // Creating the magical prompt
      body: "We translated the children's imaginative tales into precise, structured prompts, focusing on cinematic lighting, vibrant colors, and thematic details to guide the AI generation process effectively.",
      bgColor: "bg-indigo-600",
      imageUrl: img2,
    },
    {
      step: 3,
      title: "ВОПЛОЩЕНИЕ ОБРАЗОВ", // IMAGE EMBODIMENT
      subtitle: "Первая визуализация", // First visualization
      body: "The prompts were fed into the AI generator, which produced the initial hero concepts. We reviewed these first drafts for fidelity to the child's original vision, making necessary revisions.",
      bgColor: "bg-purple-600",
      imageUrl: img1,
    },
    {
      step: 4,
      title: "СБОРНИК ГЕРОЕВ", // HERO COLLECTION
      subtitle: "Завершение истории", // Completing the story
      body: "The final polished artwork is presented alongside the original child interview and prompt, completing the journey from a dream to a fully realized visual hero and published story.",
      bgColor: "bg-pink-600",
      imageUrl: img2,
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  // const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const currentData = STEPS_DATA.find((data) => data.step === currentStep);
  const AUTO_ADVANCE_DELAY = 3000;

  useEffect(() => {
    // if (!isAutoPlaying) {
    //   return;
    // }

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
    // setIsAutoPlaying(false);
  };

  if (!currentData) return <div>Error: Step data not found.</div>;
  return (
    <div className={styles.homeSlide}>
      <div className="container">
        <div className={styles.appContainer}>
          <div className={`${styles.leftPanel}`}>
            <h3>мечты обретают форму</h3>
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
                  Шаг {step.step}
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
