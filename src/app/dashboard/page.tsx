"use client";

import React from "react";
import MiddleCardAnimation from "@/components/organism/MiddleCardAnimation";
import PathAnimation from "@/components/organism/PathAnimation";

const fourPaths = [
  {
    title: "Daily Reflections",
    description:
      "This corner could feature a calming icon of a rising sun, symbolizing new beginnings and daily progress. Users can click here to pen down their thoughts on the day's events, lessons learned, and emotions felt.",
    moveX: -100,
    moveY: -250,
    primaryColor: "#CEEAD6",
    imageUrl: "/images/bonsai.svg",
  },
  {
    title: "Gratitude Path",
    description:
      "An icon resembling a heart or something that symbolizes thankfulness could lead users to a space where they can write about things they're grateful for, helping them cultivate a positive mindset.",
    moveX: 100,
    moveY: -250,
    primaryColor: "#D2E3FC",
    imageUrl: "/images/walk.svg",
  },
  {
    title: "Goal Setting Gateway",
    description:
      "Featuring an icon of a target or a stepping-stone pathway, this section allows users to set and review personal goals, track their progress, and adjust their path as needed.",
    moveX: -100,
    moveY: 250,
    primaryColor: "#F8D2CE",
    imageUrl: "/images/goals.svg",
  },
  {
    title: "Mindfulness Corner",
    description:
      "An icon such as a peaceful lotus or a tranquil landscape could invite users to engage in mindfulness practices, write about their meditation experiences, or note moments of clarity and presence.",
    moveX: 100,
    moveY: 250,
    primaryColor: "#FFEFC3",
    imageUrl: "/images/mindful.svg",
  },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen overflow-hidden">
      {fourPaths.map((path, index) => (
        <PathAnimation
          title={path.title}
          description={path.description}
          key={path.title}
          moveX={path.moveX}
          moveY={path.moveY}
          primaryColor={path.primaryColor}
          index={index}
          imageUrl={path.imageUrl}
        />
      ))}
      <MiddleCardAnimation />
    </div>
  );
};

export default Dashboard;
