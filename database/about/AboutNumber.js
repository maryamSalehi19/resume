export default function AboutNumber({ number, setNumber }) {
  return (
    <>
      <label>Number: </label>
      <input
        type="tel"
        value={number}
        required
        onChange={(e) => setNumber(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
