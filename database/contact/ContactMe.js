import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function ContactMe() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("Contact").select("*");
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="dir-rtl">
      <div className="py-2 flex justify-end">: پیام های دریافتی</div>
      <hr />
      {data.map((item, index) => (
        <div className="py-2 text-right">
          <button>{index + 1} ) : </button>
          <div className="my-1">
            {item.fullName} , در تاریخ {formatDate(item.created_at)} برای شما
            پیام ارسال کرده است.{" "}
          </div>
          <div className="my-1">متن پیام : ‌{item.message}</div>
          <div className="my-1">شماره تماس‌ : {item.phone} </div>
          {item.email && <div className="my-1">{item.email} : ایمیل </div>}
          <hr />
        </div>
      ))}
    </div>
  );
}
