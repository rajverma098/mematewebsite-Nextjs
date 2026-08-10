"use client";

import { useState } from "react";
import "./Tabs.css";

export default function Tabs({ tabs, defaultTab }) {
  const [activeTab, setActiveTab] = useState(
    defaultTab || tabs[0].id
  );

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${
              activeTab === tab.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}