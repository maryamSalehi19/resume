export default function WpGithub({ githubLink, setGithubLink }) {
  return (
    <>
      <label>githubLink: </label>
      <input
        type="text"
        required
        value={githubLink}
        onChange={(e) => setGithubLink(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
