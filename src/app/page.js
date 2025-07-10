"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about"); // Default to About section

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <>
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <MainContent
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
    </>
  );
}
