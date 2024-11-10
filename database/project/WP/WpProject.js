import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

import WpLink from "./WpLink";
import WpImage from "./WpImage";
import WpDesc from "./WpDesc";
import WpGithub from "./WpGithub";

export default function WpProject() {
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("wordpressProject")
      .insert([{ link, image, desc, githubLink }]);
    if (error) {
      setError(error);
    } else {
      setLink("");
      setImage("");
      setDesc("");
      setGithubLink("");
      setError("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <WpLink link={link} setLink={setLink} />
        <br />
        <WpImage image={image} setImage={setImage} />
        <br />
        <WpDesc desc={desc} setDesc={setDesc} />
        <br />
        <WpGithub githubLink={githubLink} setGithubLink={setGithubLink} />
        <br />
        <button type="submit">Add</button>
      </form>
      {error && <div>{error.message}</div>}
    </>
  );
}
