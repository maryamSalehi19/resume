import styles from "../../styles/ContactInput.module.css";

export default function ContactMessage({ message, setMessage }) {
  return (
    <textarea
      value={message}
      rows={7}
      required
      placeholder="write you message"
      className={`${styles.inputMessage}`}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
}
