"use client";

import { useMouse } from "@/hooks/use-mouse";
import { useThrottle } from "@/hooks/use-throttle";
import { MousePointer2 } from "lucide-react";
import React, { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

// Remove SocketContext import and related socket logic

const RemoteCursors = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { x, y } = useMouse({ allowPage: true });

  const handleMouseMove = useThrottle((x, y) => {
    // Remove the socket emit for cursor change, as we're not using socket now
    // socket?.emit("cursor-change", {
    //   pos: { x, y },
    //   socketId: socket.id,
    // });
  }, 200);

  useEffect(() => {
    if (isMobile) return;
    handleMouseMove(x, y);
  }, [x, y, isMobile]);

  // Since socket logic is removed, users array will be replaced with a static or dummy array
  const users = [
    // Example static user data
    { socketId: "1", pos: { x: 100, y: 200 }, color: "#FF5733", location: "USA", flag: "🇺🇸" },
    { socketId: "2", pos: { x: 300, y: 400 }, color: "#33FF57", location: "Canada", flag: "🇨🇦" }
  ];

  return (
    <div className="h-0 z-10 relative">
      {users.map((user) => (
        <Cursor
          key={user.socketId}
          x={user.pos.x}
          y={user.pos.y}
          color={user.color}
          socketId={user.socketId}
          headerText={`${user.location} ${user.flag}`}
        />
      ))}
    </div>
  );
};

const Cursor = ({
  color,
  x,
  y,
  headerText,
  socketId,
}: {
  x: number;
  y: number;
  color?: string;
  headerText: string;
  socketId: string;
}) => {
  const [showText, setShowText] = useState(false);
  const [msgText, setMsgText] = useState("");

  useEffect(() => {
    setShowText(true);
    const fadeOutTimeout = setTimeout(() => {
      setShowText(false);
    }, 3000); // 1 second

    return () => {
      clearTimeout(fadeOutTimeout);
    };
  }, [x, y, msgText]);

  return (
    <motion.div
      animate={{
        x: x,
        y: y,
      }}
      className="w-6 h-6"
      transition={{
        duration: 0.2, // Adjust duration for smoothness
        ease: "easeOut", // Choose an easing function
      }}
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <MousePointer2
        className="w-6 h-6 z-[9999999]"
        style={{ color: color }}
        strokeWidth={7.2}
      />
      <AnimatePresence>
        {showText && headerText && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -7 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xs rounded-xl w-fit p-2 px-4 ml-4 cursor-can-hover cursor-can-hover cursor-can-hover cursor-can-hover"
            style={{
              backgroundColor: color + "f0",
            }}
          >
            <div className="text-nowrap">{headerText}</div>
            {msgText && <div className="font-mono w-44">{msgText}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RemoteCursors;
