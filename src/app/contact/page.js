"use client"
import ContactForm from "@/components/ContactForm";
import styles from "@styles/Contacts.module.css";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      name: e.target.name.value,
      lastname: e.target.lastname.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Mesaj başarıyla gönderildi!");
        e.target.reset(); // Formu resetler
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  }

  return (
    <section className={styles.contactsSection}>
      <div className="container">
        <div className="section">
          <div className="titleContainer">
            <h2 className="title">Contact Us</h2>
          </div>

          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h3>Mail:</h3>
                <a href="mailto:szartservices@hotmail.com" className={styles.emailLink}>
                  szartservices@hotmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <h3>Adres: </h3>
                <p>İkbal apt. 84/1, Osmanbey, İstanbul</p>
              </div>
              <div className={styles.contactItem}>
                <h3>Telefon: </h3>
                <p>(+90) 553 361 0282</p>
              </div>
            </div>

            <div className={styles.contactFormContainer}>
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



