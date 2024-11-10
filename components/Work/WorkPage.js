"use client";

import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import styles from "@/styles/WorkPage.module.css";
import WorkWordpress from "./WorkWordpress";
import WorkReact from "./WorkReact";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="portfolio">
      <div className={`flex justify-center my-5 py-3 ${styles.title}`}>
        My Works.
      </div>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList className="flex justify-center ">
          <Tab
            className={`mx-5 cursor-pointer ${
              activeTab === 0 ? styles.active : styles.inactive
            }`}
          >
            Wordpress
          </Tab>
          <Tab
            className={`mx-5 cursor-pointer ${
              activeTab === 1 ? styles.active : styles.inactive
            }`}
          >
            React
          </Tab>
        </TabList>
        <br />
        <TabPanel>
          <WorkWordpress />
        </TabPanel>
        <TabPanel>
          <WorkReact />
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default TabComponent;
