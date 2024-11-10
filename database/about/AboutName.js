export default function AboutName({ name, setName }) {
  return (
    <>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
