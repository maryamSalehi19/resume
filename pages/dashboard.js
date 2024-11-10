import { getSession } from "next-auth/react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import styles from "../styles/Dashboard.module.css";
import AboutDb from "../database/about/AboutDb";
import SocialDb from "@/database/social/SocialDb";
import SkilsDb from "@/database/skils/SkilsDb";
import WpProject from "@/database/project/WP/WpProject";
import ReactProject from "@/database/project/React/ReactProject";
import ContactMe from "@/database/contact/ContactMe";

export default function DashboardPage({ session }) {
  // if (!session) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <p>Access Denied</p>
  //     </div>
  //   );
  // }

  return (
    <>
      <Tabs className={`flex h-screen ${styles.customContainer} `}>
        <TabList className="w-1/6 bg-gray-800 text-white p-4">
          <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500 focus:outline-none focus:text-blue-500">
            About
          </Tab>
          <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500 focus:outline-none focus:text-blue-500">
            Social Media
          </Tab>
          <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500 focus:outline-none focus:text-blue-500">
            Skils
          </Tab>
          <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500 focus:outline-none focus:text-blue-500">
            Wordpress Project
          </Tab>
          <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500 focus:outline-none focus:text-blue-500">
            React Project
          </Tab>
          <Tab className="px-4 py-2 cursor-pointer hover:text-blue-500 focus:outline-none focus:text-blue-500">
            message
          </Tab>
        </TabList>
        <div className="w-5/6 p-4">
          <TabPanel>
            <AboutDb />
          </TabPanel>
          <TabPanel>
            <SocialDb />
          </TabPanel>
          <TabPanel>
            <SkilsDb />
          </TabPanel>
          <TabPanel>
            <WpProject />
          </TabPanel>
          <TabPanel>
            <ReactProject />
          </TabPanel>
          <TabPanel>
            <ContactMe />
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: { session },
  };
}
