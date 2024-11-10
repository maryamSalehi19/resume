import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

import ReactLinkLink from "./ReactLink";
import ReactImage from "./ReactImage";
import ReactDesc from "./ReactDesc";
import ReactGithub from "./ReactGithub";

export default function WpProject() {
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("ReactProject")
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
        <ReactLinkLink link={link} setLink={setLink} />
        <br />
        <ReactImage image={image} setImage={setImage} />
        <br />
        <ReactDesc desc={desc} setDesc={setDesc} />
        <br />
        <ReactGithub githubLink={githubLink} setGithubLink={setGithubLink} />
        <br />
        <button type="submit">Add</button>
      </form>
      {error && <div>{error.message}</div>}
    </>
  );
}
