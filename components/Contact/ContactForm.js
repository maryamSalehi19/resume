"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

import styles from "../../styles/ContactMe.module.css";
import ContactFullName from "./ContactFullName";
import ContactEmail from "./ContactEmail";
import ContactPhone from "./ContactPhone";
import ContactMessage from "./ContactMessage";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("Contact")
      .insert([{ fullName, email, phone, message }]);
    if (error) {
      setError(error);
    } else {
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ContactFullName fullName={fullName} setFullName={setFullName} />
        <br />
        <ContactEmail email={email} setEmail={setEmail} />
        <br />
        <ContactPhone phone={phone} setPhone={setPhone} />
        <br />
        <ContactMessage message={message} setMessage={setMessage} />
        <br />
        <button type="submit" className={` mt-4 ${styles.contactSubmit} `}>
          Send message
        </button>
      </form>
      {error && <div>{error.message}</div>}
    </>
  );
}
