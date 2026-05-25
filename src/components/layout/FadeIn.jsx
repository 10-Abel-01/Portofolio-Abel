import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const directions = {
    up:    { initial: { opacity: 0, y: 32 },  animate: { opacity: 1, y: 0 } },
    down:  { initial: { opacity: 0, y: -32 }, animate: { opacity: 1, y: 0 } },
    left:  { initial: { opacity: 0, x: -32 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 32 },  animate: { opacity: 1, x: 0 } },
    none:  { initial: { opacity: 0 },          animate: { opacity: 1 } },
  };

  const { initial, animate } = directions[direction] ?? directions.up;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;