"use client";
import styles from '@styles/Services.module.css';
import { useState, useRef, useEffect } from 'react'; 
import services from "@data/services";
import Head from "next/head";

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const contentRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <>
      {/* SEO Başlık ve Açıklama */}
      <Head>
        <title>Hakkımızda & Sanat Danışmanlığı Hizmetleri | SZ Art Services</title>
        <meta 
          name="description" 
          content="SZ Art Services, bireysel ve kurumsal sanat danışmanlığı, koleksiyon yönetimi ve sanatçı temsilciliği hizmetleri sunar. Sanata yön veren profesyonel çözümler için bizimle iletişime geçin."
        />
        <meta name="keywords" content="sanat danışmanlığı, koleksiyon yönetimi, sanatçı temsilciliği, sanat hizmetleri, sergi organizasyonu" />
        <meta name="author" content="SZ Art Services" />
        <meta property="og:title" content="Hakkımızda & Sanat Danışmanlığı Hizmetleri | SZ Art Services" />
        <meta property="og:description" content="SZ Art Services, sanat dünyasında rehberiniz! Koleksiyon yönetimi, sanat danışmanlığı ve daha fazlası için bize katılın." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.szartservices.com/services" />
        <meta property="og:image" content="https://www.szartservices.com/assets/about-us.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sanat Danışmanlığı",
            "provider": {
              "@type": "Organization",
              "name": "SZ Art Services",
              "url": "https://www.szartservices.com"
            },
            "description": "SZ Art Services, sanat danışmanlığı, koleksiyon yönetimi ve sanatçı temsilciliği hizmetleri sunar.",
            "areaServed": "Global",
            "image": "https://www.szartservices.com/assets/services-cover.jpg"
          })}
        </script>
      </Head>

      {/* Hakkımızda Bölümü */}
      <section className={styles.aboutUs}>
        <div className={styles.aboutUsContent}>
          <div className={styles.aboutUsText}>
            <h1>Sanata Yön Veren Profesyonel Danışmanlık</h1>
            <p>
              SZ Art Services olarak, sanatın evrensel gücünü keşfetmeniz için rehberlik ediyoruz. 
              Koleksiyon yönetimi, sanat danışmanlığı ve sanatçı temsilciliği gibi hizmetlerimizle, 
              sanatı en doğru şekilde değerlendirmenizi sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Hizmetler Bölümü */}
      <div className={styles.servicesContainer}>
        <h2 className={styles.servicesHeader}>Hizmetlerimiz</h2>
        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceItem} ${activeService === index ? styles.active : ''}`}
            >
              <div className={styles.serviceTitle} onClick={() => toggleService(index)}>
                <h3>{service.title}</h3>
                <span className={`${styles.serviceArrow} ${activeService === index ? styles.rotateArrow : ''}`}>
                  →
                </span>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={styles.serviceItemContainer}
                style={{
                  height: activeService === index ? `${Math.max(contentRefs.current[index]?.scrollHeight, isMobile ? 800 : 0)}px` : '0',
                }}
              >
                <div className={styles.serviceImageContainer}>
                  <img className={styles.serviceImage} src={service.imageUrl} alt={service.title} />
                </div>
                <div className={styles.serviceDescriptionContainer}>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
