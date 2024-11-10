import SocialPage from "@/components/Social/SocialPage";
import styles from "@/styles/FooterBox.module.css";

export default function Footer() {
  return (
    <>
      <SocialPage />
      <div className="py-2 flex justify-between">
        <div className={` ${styles.footerBox} `}>
          Copyright © 2024 All rights reserved
        </div>
        <div className={` ${styles.footerBox} `}>
          This template is made with by Simin
        </div>
      </div>
    </>
  );
}
