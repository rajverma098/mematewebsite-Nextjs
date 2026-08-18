"use client";

import Tabs from "./Tabs";
import Business from "./Business";
import BusinessMap from "./BusinessMap";
import WorkMap from "./WorkMap";
import WorkTabs from "./WorkTabs";
import "./HowItWorks.css";
import BackgroundShape from "./BackgroundShape";

export default function HowItWorks() {
  const tabs = [
    {
      id: "business",
      label: "Business",
      content: <Business />,
    },
    {
      id: "work",
      label: "Work",
      content: <WorkTabs />,
    },
    {
      id: "enquiry",
      label: "Enquiry",
       content: [],
    },
    {
      id: "assets",
      label: "Assets",
       content: [],
    },
  ];

  return (
    <section className="how-it-works-wrapper hero-section">
       <BackgroundShape className="hero-bg" />
     <div className="hero-content">
      <div className="how-it-works-header">
              <h2>meMate</h2>
              <div className="sales-heading-works gradientText"> How it works </div>
            </div>
            <Tabs tabs={tabs} />
      </div>
    </section>
  );
}