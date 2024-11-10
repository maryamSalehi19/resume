export default function AboutTel({ tel, setTel, linkTel, setTelLink }) {
  return (
    <>
      <label htmlFor="tel">Tel </label>
      <input
        type="checkbox"
        id="tel"
        name="tel"
        checked={tel}
        onChange={(e) => setTel(e.target.checked)}
      />
      <input
        type="text"
        value={linkTel}
        onChange={(e) => setTelLink(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
