import React, { FC } from "react";
import { motion } from "framer-motion";

type PathAnimationProps = {
  title: string;
  description: string;
};

const PathAnimation: FC<PathAnimationProps> = ({ title, description }) => {
  return <div onClick={() => console.log("Clicked")}>Hover and Click Me</div>;
};
export default PathAnimation;
