export default function AboutBirth({ birthDate, setBirthDate }) {
  return (
    <>
      <label>Birth Date: </label>
      <input
        type="date"
        value={birthDate}
        required
        onChange={(e) => setBirthDate(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
