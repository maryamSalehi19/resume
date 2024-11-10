export default function SkilsTitle({ title, setTitle }) {
  return (
    <>
      <label>Skils: </label>
      <input
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
