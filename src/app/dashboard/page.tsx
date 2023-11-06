"use client";

import React from "react";
import MiddleCardAnimation from "@/components/MiddleCardAnimation";
import PathAnimation from "@/components/PathAnimation";

const fourPaths = [
  {
    title: "Daily Reflections",
    description:
      "This corner could feature a calming icon of a rising sun, symbolizing new beginnings and daily progress. Users can click here to pen down their thoughts on the day's events, lessons learned, and emotions felt.",
  },
  {
    title: "Gratitude Path",
    description:
      "An icon resembling a heart or something that symbolizes thankfulness could lead users to a space where they can write about things they're grateful for, helping them cultivate a positive mindset.",
  },
  {
    title: "Goal Setting Gateway",
    description:
      "Featuring an icon of a target or a stepping-stone pathway, this section allows users to set and review personal goals, track their progress, and adjust their path as needed.",
  },
  {
    title: "Mindfulness Corner",
    description:
      "An icon such as a peaceful lotus or a tranquil landscape could invite users to engage in mindfulness practices, write about their meditation experiences, or note moments of clarity and presence.",
  },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen">
      {/* {fourPaths.map((path) => (
        <PathAnimation
          title={path.title}
          description={path.description}
          key={path.title}
        />
        ))} */}
      <PathAnimation
        title={fourPaths[0].title}
        description={fourPaths[0].description}
        key={fourPaths[0].title}
      />

      <MiddleCardAnimation />
    </div>
  );
};

export default Dashboard;
