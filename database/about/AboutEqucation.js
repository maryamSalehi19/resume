export default function AboutEqucation({ equcation, setEqucation }) {
  return (
    <>
      <label> Equcation: </label>
      <input
        type="text"
        value={equcation}
        required
        onChange={(e) => setEqucation(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
