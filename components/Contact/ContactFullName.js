import styles from "../../styles/ContactInput.module.css";

export default function ContactFullName({ fullName, setFullName }) {
  return (
    <>
      <input
        type="text"
        required
        value={fullName}
        placeholder="Full name"
        className={`${styles.inputBox}`}
        onChange={(e) => setFullName(e.target.value)}
      />
    </>
  );
}
