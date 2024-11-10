import Header from "../components/Header";
import AboutPage from "@/components/AboutPage";
import AboutMe from "@/components/About/AboutMe";
import SkilsPage from "@/components/Skils/SkilsPage";
import WorkPage from "@/components/Work/WorkPage";
import ContactMe from "@/components/Contact/ContactMe";
import Footer from "@/components/Footer";

import styles from "../styles/Page.module.css";

export default function HomePage() {
  return (
    <div className={`mx-auto ${styles.customContainer}`}>
      <Header />
      <AboutPage />
      <AboutMe />
      <SkilsPage />
      <WorkPage />
      <ContactMe />
      <Footer />
    </div>
  );
}
