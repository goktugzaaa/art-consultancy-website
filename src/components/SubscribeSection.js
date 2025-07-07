import styles from "@styles/SubscribeSection.module.css";

export default function SubscriptionSection() {
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
        <div className="container">
            <div className={`section ${styles.noBorderTop}`}>
                <div className={styles.SubscribeSectionContent}>
                    <h2 className={styles.title}>Abone Olun</h2>
                    <p className={styles.description}>
                        Sanatçılarımız, sergilerimiz ve sanat fuarlarımız hakkında haber almak için abone olun.
                    </p>
                    <div className={styles.inputContainer}>
                        <input type="email" placeholder="E-posta adresinizi girin" className={styles.input} />
                        <button className={styles.button}>Abone Ol</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
