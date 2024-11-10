import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

import AboutGit from "./AboutGit";
import AboutInstagram from "./AboutInstagram";
import AboutLinkdin from "./AboutLinkdin";
import AboutTel from "./AboutTel";

export default function SocialDb() {
  const [git, setGit] = useState(true);
  const [gitLink, setGitLink] = useState("");
  const [instagram, setInstagram] = useState(true);
  const [instagramLink, setInstagramLink] = useState("");
  const [linkdin, setLinkdin] = useState(true);
  const [linkdinLink, setLinkdinLink] = useState("");
  const [tel, setTel] = useState(true);
  const [telLink, setTelLink] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("socialMedia").insert([
      {
        git,
        gitLink,
        instagram,
        instagramLink,
        linkdin,
        linkdinLink,
        tel,
        telLink,
      },
    ]);
    if (error) {
      setError(error);
    } else {
      setGit(false);
      setGitLink("");
      setInstagram(false);
      setInstagramLink("");
      setLinkdin(false);
      setLinkdinLink("");
      setTel(false);
      setTelLink("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AboutGit
          git={git}
          setGit={setGit}
          gitLink={gitLink}
          setGitLink={setGitLink}
        />
        <br />
        <AboutInstagram
          instagram={instagram}
          setInstagram={setInstagram}
          instagramLink={instagramLink}
          setInstagramLink={setInstagramLink}
        />
        <br />
        <AboutLinkdin
          linkdin={linkdin}
          setLinkdin={setLinkdin}
          linkdinLink={linkdinLink}
          setLinkdinLink={setLinkdinLink}
        />
        <br />
        <AboutTel
          tel={tel}
          setTel={setTel}
          telLink={telLink}
          setTelLink={setTelLink}
        />
        <br />
        <button type="submit">Add</button>
      </form>
      {error && <div>{error.message}</div>}
    </>
  );
}
