import styles from "../../styles/ContactMe.module.css";
import ContactForm from "./ContactForm";

export default function ContactMe() {
  return (
    <section id="contact">
      <div className={`flex justify-center ${styles.title} `}>Contact me.</div>
      <div className="flex">
        <div className={`w-2/5 ${styles.ContactText}`}>
          Let's work together!
        </div>
        <div className="w-3/5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
