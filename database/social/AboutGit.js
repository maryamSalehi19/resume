export default function AboutGit({ git, setGit, gitLink, setGitLink }) {
  return (
    <>
      <label htmlFor="git">git </label>
      <input
        type="checkbox"
        id="git"
        name="git"
        checked={git}
        onChange={(e) => setGit(e.target.checked)}
      />
      <input
        type="text"
        value={gitLink}
        onChange={(e) => setGitLink(e.target.value)}
        style={{ border: "1px solid #000" }}
      />
    </>
  );
}
