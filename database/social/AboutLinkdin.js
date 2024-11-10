export default function AboutLinkdin({
  linkdin,
  linkdinLink,
  setLinkdin,
  setLinkdinLink,
}) {
  return (
    <>
      <label htmlFor="linkdin">LinkedIn </label>
      <input
        type="checkbox"
        id="linkdin"
        name="linkdin"
        checked={linkdin}
        onChange={(e) => setLinkdin(e.target.checked)}
      />
      <input
        type="text"
        value={linkdinLink}
        onChange={(e) => setLinkdinLink(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
