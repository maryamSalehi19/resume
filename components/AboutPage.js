"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../styles/AboutPage.module.css";
import SocialPage from "./Social/SocialPage";

export default function AboutPage() {
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

  return (
    <section id="#home">
      {data.map((item) => (
        <div key={item.id} className={`flex container ${styles.aboutBox}`}>
          <div className="w-3/5">
            <h1 className={`${styles.aboutName}`}> {item.name} </h1>
            <p className={`${styles.aboutPosition}`}> I`m a {item.position} </p>
            <div className="flex">
              <div className={`my-5 py-2 px-5 ${styles.aboutCV}`}>
                <Link href="/">Download CV</Link>
              </div>
              <div className={`my-5 py-2 ${styles.aboutPortfolio}`}>
                <Link href="/https://github.com/">My Portfolio</Link>
              </div>
            </div>
            <SocialPage />
          </div>

          <div className={`w-2/5 ${styles.imageBox}`}>
            <img src={item.imageURL} alt={item.name} />
          </div>
        </div>
      ))}
    </section>
  );
}
