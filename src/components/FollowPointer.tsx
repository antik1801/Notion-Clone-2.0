import stringToColor from '@/lib/stringToColor'
import React from 'react'
import { motion } from "motion/react";


const FollowPointer = ({x , y, info}: {
  x: number | undefined,
  y: number | undefined,
  info: {
    name: string | null | undefined, 
    email: string | null | undefined, 
    avatar: string | null | undefined
  }
}) => {
  const color = stringToColor(info?.name)
  return (
    <motion.div
    className="h-4 w-4 rounded-full absolute z-50"
    style={{
      top: y,
      left: x,
      pointerEvents: "none",
    }}
    initial={{
      scale: 1,
      opacity: 1,
    }}
    animate={{
      scale: 1,
      opacity: 1,
    }}
    exit={{
      scale: 0,
      opacity: 0,
    }}
  >
    <svg
      stroke={color}
      fill={color}
      strokeWidth="0"
      viewBox="0 0 16 16"
      className="h-6 w-6 text-[${color}] transform -rotate-[70deg] -translate-x-[2px] -translate-y-[1px] stroke-[$color]"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 8.2 182.5 s 0 1 103.557 5.2 15.467 s 0.5 0 1.917.087L5.8 83.6 s 5 0 1.086.961L12.728 5.657 s 5 0 1.556.1823"></path>
    </svg>
    <motion.div
      style={{
        backgroundColor: color,
      }}
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0.5,
        opacity: 0,
      }}
    className="px-2 py-2 bg-og-neutral-200 text-black font-bold whitespace-nowrap text-ellipsis rounded-full"
    >
      {info.name || info.email}
    </motion.div>
  </motion.div>
)
}

export default FollowPointer
