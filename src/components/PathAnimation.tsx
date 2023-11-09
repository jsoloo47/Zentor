"use client";
import React, { FC, useEffect, useState } from "react";
import { calcLength, motion } from "framer-motion";

type PathAnimationProps = {
  title: string;
  description: string;
  moveX: number;
  moveY: number;
  primaryColor: string;
};

const PathAnimation: FC<PathAnimationProps> = ({
  title,
  description,
  moveX,
  moveY,
  primaryColor,
}) => {
  const [hover, setHover] = useState(false);
  const [scale, setScale] = useState(8);
  const expandedCircleVariants = {
    hover: {
      scale: scale,
      y: moveY,
      x: moveX,
      transition: { type: "spring", stiffness: 70 },
    },
  };

  const colorVariants = {
    primary: { backgroundColor: "#fff" },
    secondary: { backgroundColor: primaryColor },
  };
  useEffect(() => {
    // Set up a resize event listener
    const handleResize = () => {
      // Calculate scale based on viewport width
      // For example, you might decide that at 500px width, the scale should be 1,
      // and for each additional 100px, the scale increases by 0.1
      const baseWidth = 0.001; // base width in pixels
      const scaleFactor = 0.47; // scale factor for each 100px increment

      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const additionalScale = ((vw - baseWidth) / 100) * scaleFactor;
      const newScale = 1 + Math.max(additionalScale, 0); // Ensure scale doesn't go below 1

      setScale(newScale);
    };

    window.addEventListener("resize", handleResize);

    // Call the resize function to set the initial scale
    handleResize();

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex justify-center items-center flex-col "
      style={{ zIndex: 10000 }}
    >
      <h1 className="text-xl font-bold">{title}</h1>
      <div
        className="circle-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ position: "relative", width: 100, height: 100 }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          transition={{ duration: 0.3 }}
          variants={colorVariants}
          animate={hover ? "primary" : "secondary"}
          initial="secondary"
        />
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: primaryColor,
            zIndex: 0,
            position: "absolute",
          }}
          variants={expandedCircleVariants}
          animate={hover ? "hover" : "initial"}
        />
      </div>
    </div>
  );
};
export default PathAnimation;
