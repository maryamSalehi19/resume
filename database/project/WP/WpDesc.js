export default function WpDesc({ desc, setDesc }) {
  return (
    <>
      <label>desc: </label>
      <input
        type="text"
        value={desc}
        required
        onChange={(e) => setDesc(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
