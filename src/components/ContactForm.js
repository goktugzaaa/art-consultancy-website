import styles from "@styles/ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  return (
    <div className={styles.contactForm}>
      <h3 className={styles.contactTitle}>
        Formu doldur ve danışmanlarımız seninle yakın zamanda irtibata geçsin.
      </h3>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroupRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>*Email</label>
            <input type="email" name="email" id="email" className={styles.inputField} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>*İsim</label>
            <input type="text" name="name" id="name" className={styles.inputField} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastname" className={styles.label}>*Soyisim</label>
            <input type="text" name="lastname" id="lastname" className={styles.inputField} required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>İletişim</label>
          <input type="tel" name="phone" id="phone" className={styles.inputField} placeholder="5xx xxx xxxx" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>*Mesajınız</label>
          <textarea name="message" id="message" rows="5" className={styles.textareaField} required></textarea>
        </div>

        
        <input type="text" name="website" className={styles.hiddenField} style={{ display: 'none' }} />

        <button type="submit" className={styles.submitButton}>Gönder</button>
      </form>
    </div>
  );
}

