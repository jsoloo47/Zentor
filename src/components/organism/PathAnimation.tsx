"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

type PathAnimationProps = {
  title: string;
  description: string;
  moveX: number;
  moveY: number;
  primaryColor: string;
  index: number;
  imageUrl: string;
};

const PathAnimation: FC<PathAnimationProps> = ({
  title,
  description,
  moveX,
  moveY,
  primaryColor,
  imageUrl,
  index,
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

  const animationVariants = {
    hidden: { x: moveX * 2, y: moveY * 2, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 },
  };

  useEffect(() => {
    // Set up a resize event listener
    const handleResize = () => {
      // Calculate scale based on viewport width

      const baseWidth = 0.002; // base width in pixels
      const scaleFactor = 0.47; // scale factor for each 100px increment

      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const additionalScale = ((vw - baseWidth) / 100) * scaleFactor;
      const newScale = 1 + Math.max(additionalScale, 0); // don't allow negative scale
      setScale(newScale);
    };

    window.addEventListener("resize", handleResize);

    // Call the resize function to set the initial scale
    handleResize();

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center flex-col "
      // style={}
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      // transition={{ duration: 0.5 }}
      transition={{ ease: "easeOut", duration: 1, delay: index / 4 }}
      // transition={{ type: "spring", stiffness: 50 }}
    >
      <motion.div
        className="circle-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          width: 100,
          height: 100,
          cursor: "pointer",
          left: "200px",
          top: "-0px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1 }}
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
          className="flex justify-center items-center text-center"
        >
          {title}
        </motion.div>
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
      </motion.div>
      {/* <h1 className="text-l font-bold" style={{ zIndex: 1 }}>
        {title}
      </h1> */}
      {/* <p className="text-sm text-center" style={{ zIndex: 1 }}>
        {description}
      </p> */}
      {/* image png */}
      <Image
        src={imageUrl}
        width={300}
        height={300}
        alt="test"
        className="absolute"
      />
    </motion.div>
  );
};
export default PathAnimation;
