export default function AboutPosition({ position, setPosition }) {
  return (
    <>
      <label>Position: </label>
      <input
        type="text"
        value={position}
        required
        onChange={(e) => setPosition(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
