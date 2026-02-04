import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const UserCard = ({ user, sendRequestHandler, feed }) => {
  const { _id, photoUrl, firstName, lastName } = user;

  // for animation
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = _id === feed[feed.length - 1]._id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  // Handle drag
  const handleDragEnd = () => {
    const status = x.get() > 0 ? "interested" : "ignored";
    console.log(status);
    sendRequestHandler(status, _id);
  };

  return (
    <motion.img
      src={photoUrl}
      alt={`${firstName} ${lastName}`}
      className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        position: "absolute", // Stack cards on top of each other

        margin: "auto", // Center them
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1.05 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{}}
      onDragEnd={handleDragEnd}
    />
  );
};

export default UserCard;
