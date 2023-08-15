import { motion } from "framer-motion";
import { useState } from "react";

const Box1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="pb-10">
      <motion.div
        onClick={() => setIsAnimating(!isAnimating)}
        initial={{ x: 0, opacity: 0.25 }}
        animate={{
          x: isAnimating ? "70vw" : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        transition={{
          type: "spring",
          delay: 0.5,
          bounce: 0.4,
          duration: 1,
          // opacity: {},
          // stiffness: 60,
          // damping: 8,
          // mass: 1.5,
          // duration: 2,
          //   x: { type: "tween", duration: 1, delay: 0.4 },
          //   x: { type: "spring", stiffness: 70, damping: 10, delay: 0.4 },
          // x: { type: "spring", stiffness: 100, mass: 2, delay: 0.4 },
        }}
        className="box hover:cursor-pointer"
      >
        {/* <div className="box" /> */}
      </motion.div>
    </div>
  );
};

export default Box1;
