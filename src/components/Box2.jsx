import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <div className="pb-10">
      <motion.div
        className="box hover:cursor-pointer"
        drag
        dragConstraints={{ left: 0, right: 700, top: -300, bottom: 100 }}
        // dragMomentum={false}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      />
    </div>
  );
};
export default Box2;
