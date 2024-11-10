"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import styles from "@/styles/SkilsPage.module.css";

export default function SkilsPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("skils").select("*");
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
    <section id="skills">
      <div className={`flex justify-center my-5 ${styles.title} `}>
        My Skills.
      </div>
      {data.map((item, index) => (
        <div key={item.id} className="my-4">
          {index % 3 === 0 && (
            <div className="flex">
              {data.slice(index, index + 3).map((titleItem) => (
                <div
                  key={`title-${titleItem.id}`}
                  className={`w-1/3 ${styles.progressTitle}`}
                >
                  {titleItem.title}
                </div>
              ))}
            </div>
          )}
          {index % 3 === 0 && (
            <div className="flex">
              {data.slice(index, index + 3).map((valueItem) => (
                <div
                  key={`value-${valueItem.id}`}
                  className={`w-1/3 my-2 ${styles.progressBar}`}
                >
                  <div
                    className={` ${styles.progressValue} `}
                    style={{
                      width: `${(valueItem.level / 5) * 100}%`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
