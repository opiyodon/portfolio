import { ISkill } from "@/type";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, name, level } }) => {

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-3 font-medium text-black bg-light_black rounded-full">
      <motion.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-l from-primary to-secondary"
        style={{ width: level, }}
        //framer motion
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mx-1 text-light_black" />
        <div className="flex gap-2">
          <div>{name}</div>
          <div>({level})</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Bar;
