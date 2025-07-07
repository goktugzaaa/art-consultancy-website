"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clientPathName, setClientPathname] = useState("");

  useEffect(() => {
    setClientPathname(window.location.pathname);
  }, []);


  const pageTitles = {
    "/about": "Hakkımızda",
    "/services": "Hizmetler",
    "/projects": "Projeler",
    "/contact": "İletişim",
    "/artists": "Sanatçılar",
    "/journal": "Jurnal",
  };

  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (isOpen){
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "";
    }
    },[isOpen]);

  const isHomePage = pathname === "/";
  const currentPageTitle = pageTitles[pathname] || "";

  return (
    <nav className={`${styles.navbar} ${!isHomePage ? styles.otherPage : ""}`}>
      <div>
        <Link
          href="/"
          className={`${styles.logo} ${isOpen ? styles.menuOpen : ""}`}
          style={{ display: isHomePage && !isOpen ? "block" : "block" }}
        >
          <span>SZArtServices</span>
        </Link>
      </div>

      <div className="center">
        {!isHomePage && <p className={styles.mainTitle}>{currentPageTitle}</p>}
      </div>

      <div className={styles.hamburgerBtn} onClick={toggleMenu}>
        <div
          className={`${styles.hamburgerBar} ${isOpen ? styles.open : ""} ${isHomePage ? styles.homePage : styles.otherPage}`}
        ></div>
      </div>

      <div className={`${styles.fullscreenMenu} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.menuItems}>
          <Link href="/about" className={styles.menuItem}>
            <span>Hakkımızda</span>
          </Link>
          <Link href="/projects" className={styles.menuItem}>
            <span>Projelerimiz</span>
          </Link>
          <Link href="/services" className={styles.menuItem}>
            <span>Hizmetler</span>
          </Link>
          <Link href="/artists" className={styles.menuItem}>
            <span>Sanatçılar</span>
          </Link>
          <Link href="/journal" className={styles.menuItem}>
            <span>Jurnal</span>
          </Link>
          <Link href="/contact" className={styles.menuItem}>
            <span>İletişim</span>
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;