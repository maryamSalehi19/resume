export default function AboutMe({ aboutMe, setAboutMe }) {
  return (
    <>
      <label> About Me: </label>

      <textarea
        name="message"
        rows="4"
        cols="50"
        required
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
        style={{ border: "1px solid #000" }}
      ></textarea>
    </>
  );
}
