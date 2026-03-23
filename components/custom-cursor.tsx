"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const x = useSpring(0, { stiffness: 200, damping: 25, mass: 0.2 });
  const y = useSpring(0, { stiffness: 200, damping: 25, mass: 0.2 });

  useEffect(() => {
    x.set(pos.x);
    y.set(pos.y);
  }, [pos.x, pos.y, x, y]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };
    const handleEnter = () => setVisible(true);
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      style={{ x, y, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.18 }}
    >
      <div className="custom-cursor" />
    </motion.div>
  );
}

