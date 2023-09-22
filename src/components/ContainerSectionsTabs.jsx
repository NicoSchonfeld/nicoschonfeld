"use client";

import React, { useEffect } from "react";
import { Skeleton, Tab, Tabs } from "@nextui-org/react";
import FeedSection from "./FeedSection";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const ContainerSectionsTabs = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  return (
    <>
      <Tabs
        variant="underlined"
        aria-label="Tabs variants"
        color="secondary"
        radius="full"
        className="mt-10 px-10"
      >
        <Tab key="projects" title="Proyectos">
          <FeedSection isLoaded={isLoaded} />
        </Tab>

        <Tab key="about" title="Sobre Mi">
          <AboutMe isLoaded={isLoaded} />
        </Tab>

        <Tab key="blog" title="Blog">
          <div className="h-screen space-y-5 px-10">
            <p className="text-2xl font-bold">Próximamente...</p>

            <Skeleton className="rounded-lg px-10 py-16" />
            <Skeleton className="rounded-lg px-10 py-28" />
            <Skeleton className="rounded-lg px-10 py-16" />
          </div>
        </Tab>
      </Tabs>

      <Footer />
    </>
  );
};

export default ContainerSectionsTabs;
