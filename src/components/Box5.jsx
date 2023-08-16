import { motion, useAnimation, useAnimationControls } from "framer-motion";

const Box5 = () => {
  const control = useAnimationControls();
  console.log(control);
  return (
    <div className="pb-10">
      <button
        onClick={() => {
          control.start({
            x: "80vw",
            transition: { duration: 2 },
          });
        }}
        className="btn"
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
        className="btn"
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: { duration: 1 },
          });
        }}
        className="btn"
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "0%",
            transition: { duration: 1 },
          });
        }}
        className="btn"
      >
        Square
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
        className="btn"
      >
        Stop
      </button>
      <motion.div className="box hover:cursor-pointer" animate={control} />
    </div>
  );
};

export default Box5;
