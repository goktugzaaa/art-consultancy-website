"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "@styles/ProjectsSection.module.css";
import projects from "@data/projects";

const ProjectsSection = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setIsHomePage(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className={`container ${isHomePage ? "" : "otherpage"}`}>
      <section className={`section ${isHomePage ? "" : "otherpage"}`}>
        <div className={`titleContainer ${isHomePage ? "left" : ""}`}>
          <h2 className={` title ${isHomePage ? "" : "otherpage"}`}>Projeler</h2>
        </div>

        <div className={styles.sliderContainer}>
          {/* Title above the slider */}
          <h3 className={styles.projectTitle}>
            {projects[currentSlide].name}
          </h3>

          <button onClick={prevSlide} className={styles.sliderButton}>
            ←
          </button>

          <div className={styles.slideWrapper}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={styles.slide}
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                  position: currentSlide === index ? "relative" : "absolute",
                }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    className={styles.projectImage}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button onClick={nextSlide} className={styles.sliderButton}>
            →
          </button>

          
          <p className={styles.projectDescription}>
            {projects[currentSlide].description}
          </p>

          <div className={styles.indicators}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${currentSlide === index ? styles.activeIndicator : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
