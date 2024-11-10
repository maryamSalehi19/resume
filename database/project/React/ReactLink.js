export default function ReactLink({ link, setLink }) {
  return (
    <>
      <label>Link: </label>
      <input
        type="text"
        value={link}
        required
        onChange={(e) => setLink(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
