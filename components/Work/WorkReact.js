import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "@/styles/workWordpress.module.css";

export default function WorkReact() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("ReactProject").select("*");
        if (error) {
          setError(error.message);
        } else {
          setData(data);
          setError("");
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div className="flex flex-wrap mx-3">
      {data.map((item) => (
        <div key={item.id} className="w-1/3 px-3 mb-6">
          <div className={` ${styles.projextBox} `}>
            <div className={`pb-4 ${styles.imageBox}`}>
              <img src={item.image} width="370" height="240" />
            </div>
            <div className={`px-4 ${styles.linkBox}`}>
              <Link href={item.link}>{item.link}</Link>
            </div>
            <div className="flex items-end pb-4">
              <div className={`px-4 ${styles.projectDesc}`}>{item.desc}</div>
              <Link href={item.githubLink}>
                {item.githubLink && (
                  <img
                    src="/image/git.png"
                    width="40px"
                    height="40px"
                    className="mx-4"
                  />
                )}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
