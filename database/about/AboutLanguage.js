export default function AboutLanguage({ language, setLanguage }) {
  return (
    <>
      <label> Language: </label>
      <input
        type="text"
        value={language}
        required
        onChange={(e) => setLanguage(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
