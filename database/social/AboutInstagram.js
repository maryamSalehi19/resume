export default function AboutInstagram({
  instagram,
  setInstagram,
  linkInstagram,
  setInstagramLink,
}) {
  return (
    <>
      <label htmlFor="instagram">Instagram </label>
      <input
        type="checkbox"
        id="instagram"
        name="instagram"
        checked={instagram}
        onChange={(e) => setInstagram(e.target.checked)}
      />
      <input
        type="text"
        value={linkInstagram}
        onChange={(e) => setInstagramLink(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
