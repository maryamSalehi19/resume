"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

import styles from "@/styles/SocialPage.module.css";

export default function SocialPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("socialMedia").select("*");
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
    <>
      {data.map((item) => (
        <div key={item.id} className={`flex container ${styles.socialBox}`}>
          <div className="w-3/5">
            <div className={`flex ${styles.boxSocialMedia}`}>
              {item.linkdin && (
                <div className="mx-2">
                  <Link href={item.linkdinLink}>
                    <img src="/image/linkdin.png" alt="linkdin" />
                  </Link>
                </div>
              )}
              {item.instagram && (
                <div className="mx-2">
                  <Link href={item.instagramLink}>
                    <img src="/image/instagram.png" alt="instagram" />
                  </Link>
                </div>
              )}
              {item.git && (
                <div className="mx-2">
                  <Link href={item.gitLink}>
                    <img src="/image/git.png" alt="git" />
                  </Link>
                </div>
              )}
              {item.tel && (
                <div className="mx-2">
                  <Link href={item.telLink}>
                    <img src="/image/Telegram.png" alt="telegram" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
