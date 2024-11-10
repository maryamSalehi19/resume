"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import styles from "@/styles/AboutMe.module.css";

export default function AboutMe() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("about").select("*");
        if (error) {
          setError(error);
        } else {
          setData(data);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "+98 " + match[1] + " " + match[2] + " " + match[3];
    }
    return null;
  }

  return (
    <section id="about">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className={`flex container my-5 py-5 ${styles.aboutMeBox}`}
          >
            <div className="w-2/5">
              <img src="/image/Girl.png" alt={item.name} />
            </div>
            <div className="w-3/5">
              <div className={`${styles.aboutName}`}>{item.name}</div>
              <div className="flex flex-wrap">
                <div className="w-1/3 my-1">
                  <span className={`${styles.aboutTitle}`}>Location: </span>
                  <span className={`${styles.aboutValue}`}>
                    {item.location}
                  </span>
                </div>
                <div className="w-1/3 my-1">
                  <span className={`${styles.aboutTitle}`}>Number: </span>
                  <span className={`${styles.aboutValue}`}>
                    {formatPhoneNumber(item.number)}
                  </span>
                </div>
                <div className="w-1/3 my-1">
                  <span className={`${styles.aboutTitle}`}>Mail: </span>
                  <span className={`${styles.aboutValue}`}>{item.mail}</span>
                </div>
                <div className="w-1/3 my-1">
                  <span className={`${styles.aboutTitle}`}>Birthdate: </span>
                  <span className={`${styles.aboutValue}`}>
                    {item.birthDate}
                  </span>
                </div>
                <div className="w-1/3 my-1">
                  <span className={`${styles.aboutTitle}`}>Language: </span>
                  <span className={`${styles.aboutValue}`}>
                    {item.language}
                  </span>
                </div>
                <div className="w-1/3 my-1">
                  <span className={`${styles.aboutTitle}`}>Equcation: </span>
                  <span className={`${styles.aboutValue}`}>
                    {item.equcation}
                  </span>
                </div>
              </div>
              <div className={`my-4 ${styles.aboutMe}`}>{item.aboutMe}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
