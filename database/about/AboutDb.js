import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

import AboutName from "./AboutName";
import AboutPosition from "./AboutPosition";
import AboutImage from "./AboutImage";
import AboutLocation from "./AboutLocation";
import AboutNumber from "./AboutNumber";
import AboutMail from "./AboutMail";
import AboutBirth from "./AboutBirth";
import AboutLanguage from "./AboutLanguage";
import AboutEqucation from "./AboutEqucation";
import AboutMe from "./AboutMe";

export default function AboutDb() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [language, setLanguage] = useState("");
  const [equcation, setEqucation] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("about").insert([
      {
        name,
        position,
        imageURL,
        location,
        number,
        mail,
        birthDate,
        language,
        equcation,
        aboutMe,
      },
    ]);

    if (error) {
      setError(error.message);
    } else {
      setName("");
      setPosition("");
      setImageURL("");
      setLocation("");
      setNumber("");
      setMail("");
      setBirthDate("");
      setLanguage("");
      setEqucation("");
      setAboutMe("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AboutName name={name} setName={setName} />
        <br />
        <AboutPosition position={position} setPosition={setPosition} />
        <br />
        <AboutImage imageURL={imageURL} setImageURL={setImageURL} />
        <br />
        <AboutLocation location={location} setLocation={setLocation} />
        <br />
        <AboutNumber number={number} setNumber={setNumber} />
        <br />
        <AboutMail mail={mail} setMail={setMail} />
        <br />
        <AboutBirth birthDate={birthDate} setBirthDate={setBirthDate} />
        <br />
        <AboutLanguage language={language} setLanguage={setLanguage} />
        <br />
        <AboutEqucation equcation={equcation} setEqucation={setEqucation} />
        <br />
        <AboutMe aboutMe={aboutMe} setAboutMe={setAboutMe} />
        <br />
        <button type="submit">Add</button>
      </form>
      {error && <div>{error}</div>}
    </>
  );
}
