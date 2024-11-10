import styles from "../../styles/ContactInput.module.css";

export default function ContactEmail({ email, setEmail }) {
  return (
    <>
      <input
        type="text"
        value={email}
        placeholder="Email"
        className={`${styles.inputBox}`}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
}
