import { motion } from "framer-motion";

const Box3 = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
        // delayChildren: 1,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="pb-10">
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="box hover:cursor-pointer"
      >
        {[1, 2, 3].map((box) => (
          <motion.li
            key={box}
            variants={listVariant}
            className="bg-white list-none w-8 h-8 p-2 m-2"
          />
        ))}
      </motion.div>
    </div>
  );
};
export default Box3;
