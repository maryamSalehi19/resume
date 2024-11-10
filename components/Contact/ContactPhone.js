import styles from "../../styles/ContactInput.module.css";

export default function ContactPhone({ phone, setPhone }) {
  return (
    <input
      type="text"
      required
      value={phone}
      placeholder="Phone"
      className={`${styles.inputBox}`}
      onChange={(e) => setPhone(e.target.value)}
    />
  );
}
