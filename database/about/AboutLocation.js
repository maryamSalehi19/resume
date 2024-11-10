export default function AboutLocation({ location, setLocation }) {
  return (
    <>
      <label>Location: </label>
      <input
        type="text"
        value={location}
        required
        onChange={(e) => setLocation(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
