"use client"
import { useEffect, useState } from "react";
import styles from "@styles/HeroSection.module.css";

const videos = [
  "/hero-video.mp4",
  "/hero-video2.mp4",
  "/hero-video3.mp4",
];

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState(null); // Başlangıçta null

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setVideoSrc(videos[randomIndex]);
  }, []);

  return (
    <div className={styles.heroSection}>
      {videoSrc && ( // Eğer videoSrc null değilse video render edilsin
        <video autoPlay muted loop playsInline className={styles.videoBackground}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className={styles.overlay}>
        <h1 className={styles.title}>SZ ART SERVICES</h1>
        <p className={styles.slogan}>Empowering Creativity, Curating Excellence</p>
      </div>
    </div>
  );
};

export default HeroSection;
