"use client";
import { useState } from "react";
import Sidebar from "../layout/Sidebar";
import MainContent from "../layout/MainContent";

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
