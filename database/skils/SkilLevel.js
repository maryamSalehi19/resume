export default function SkilLevel({ level, setLevel }) {
  return (
    <>
      <label>Level: </label>
      <input
        type="number"
        value={level}
        required
        min={0}
        max={5}
        onChange={(e) => setLevel(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
