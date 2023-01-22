import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import "./motion.css";

 const Motion = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="flex">
    <motion.div className="container container-motion" ref={constraintsRef}>
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />

    </motion.div>
    <motion.div className="container container-motion" ref={constraintsRef}>
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />
      <motion.div className="item-drag" drag dragConstraints={constraintsRef} />

    </motion.div>
    
    </div>
    
  );
};

export default Motion;