"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@styles/AboutSection.module.css";

const AboutSection = ({ scrollToAboutTeam }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";


  const scrollDown = () => {
    if (scrollToAboutTeam && scrollToAboutTeam.current) {
      scrollToAboutTeam.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={`container ${isHomePage ? "" : "otherpage"} ${styles.mobileContainer}`}>
      <section className={`section ${isHomePage ? "" : "otherpage"}`}>
        <div className={`titleContainer ${isHomePage ? "left" : ""}`}>
          <h2 className={` title ${isHomePage ? "" : "otherpage"}`}>Hakkımızda</h2>
        </div>

        <div className={`contentContainer ${isHomePage ? "" : "otherpage"}`}>
  <div className={`${styles.aboutText} ${!isHomePage ? styles.aboutTextOtherPage : ""}`}>
    {isHomePage ? (
      <>
        <p>SZ Art Services olarak Türkiye'nin ilk sanat ve tasarım danışmanlık ajansıyız.</p>
        <p>
          Sanatçıları, kurumları ve izleyicileri bir araya getiriyor, sanat ve hayat arasındaki bağı güçlendiren çözümler sunuyoruz.
        </p>
      </>
    ) : (
      <>
        <p>
          SZ Art Services, bireysel ve kurumsal sanat danışmanlığı, art brokeraj, sanatçı temsiliyeti ve küratöryel hizmetler sunan bağımsız bir sanat girişimidir.
        </p>
        <p>
          Sanatı bir yatırım aracının ötesinde, kültürel bir değer ve ifade biçimi olarak görüyor; koleksiyonerlere özgün danışmanlık sunarken, sanatçılar için sürdürülebilir bir temsil alanı oluşturmayı hedefliyoruz.
        </p>
        <p>
          Amacımız, sanatın dönüştürücü gücünü daha geniş kitlelerle buluşturmak.
        </p>
      </>
    )}
  </div>
</div>


        {isHomePage ? (
          <div className={styles.learnMoreContainer}>
            <a href="/about" className={styles.learnMore}>
              Learn more <span className={styles.arrow}>→</span>
            </a>
          </div>
        ) : (
          <div className={styles.scrollDownContainer}>
            <button onClick={scrollDown} className={styles.scrollDown}>
              ↓
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default AboutSection;
