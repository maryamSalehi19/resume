export default function AboutMail({ mail, setMail }) {
  return (
    <>
      <label>Email: </label>
      <input
        type="email"
        value={mail}
        required
        onChange={(e) => setMail(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
