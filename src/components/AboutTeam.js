import { forwardRef } from "react";
import styles from '@styles/AboutTeam.module.css';

const AboutTeam = forwardRef((props, ref) => {
  return (
    <section className="container" ref={ref}>
      <div className="section">
        <div className="titleContainer">
          <h2 className="title">Ekibimiz</h2>
        </div>
        <div className="contentContainer">
          <img
            className={styles.teamPic}
            src="https://media.istockphoto.com/id/1350474131/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=_rwVn8lkmzXc-_Q5tSyH-Jt0tt_acwxvXVYCckg8v0M="
            alt="ekibimiz"
          />
          <div className={styles.teamPicInfo}>
            <span>Bu maceraya 2019' da başladık.</span>
            <p className={styles.teamInfo}>
              SZ art services ekibi olarak emekle kültürü birleştirmeye çok uğraşıyoruz
              yahu.Bu yüzdende beraber fotoğraf çektirme fırsatı bulamadık henüz. Ama
              emin olun baya havalıyız ha!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutTeam;
