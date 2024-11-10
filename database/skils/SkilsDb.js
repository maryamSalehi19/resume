import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

import SkilsTitle from "./SkilTitle";
import SkilLevel from "./SkilLevel";

export default function SkilsDb() {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("skils").insert([
      {
        title,
        level,
      },
    ]);
    if (error) {
      setError(error);
    } else {
      setTitle("");
      setLevel("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SkilsTitle title={title} setTitle={setTitle} />
        <br />
        <SkilLevel level={level} setLevel={setLevel} />
        <br />
        <button type="submit">Add</button>
      </form>
      {error && <div>{error.message}</div>}
    </>
  );
}
