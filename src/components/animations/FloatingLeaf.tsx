"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FloatingLeaf({ scrollYProgress }: { scrollYProgress: any }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Vertical position: starts near the top of the screen, ends near the bottom
  const y = useTransform(scrollYProgress, [0, 1], ["10vh", "85vh"]);
  
  // Swaying motion side to side
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0vw", "-8vw", "2vw", "-5vw", "1vw", "0vw"]
  );
  
  // Continuous rotation
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  // Adjusting crossfade ranges to properly start at 0 so there are no extrapolation glitches at the very top.
  // Opacity for Green Leaf (Hero section)
  const greenOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4, 1], [1, 1, 0, 0]);
  
  // Opacity for Yellow Leaf (Mid sections)
  const yellowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4, 0.65, 0.8, 1], [0, 0, 1, 1, 0, 0]);
  
  // Opacity for Brown Leaf (Contact section)
  const brownOpacity = useTransform(scrollYProgress, [0, 0.65, 0.8, 1], [0, 0, 1, 1]);

  if (!isMounted) return null;

  // Made leaf size much bigger
  const leafSize = 350;

  return (
    <motion.div
      className="absolute right-[5vw] xl:right-[10vw] pointer-events-none z-50"
      style={{
        y,
        x,
        rotate,
      }}
    >
      <div className="relative" style={{ width: leafSize, height: leafSize }}>
        {/* Green Leaf */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: greenOpacity }}
        >
          <Image
            src="/leaf-green.png"
            alt="Green Leaf"
            width={leafSize}
            height={leafSize}
            className="object-contain drop-shadow-xl"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </motion.div>

        {/* Yellow Leaf */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: yellowOpacity }}
        >
          <Image
            src="/leaf-yellow.png"
            alt="Yellow Leaf"
            width={leafSize}
            height={leafSize}
            className="object-contain drop-shadow-xl"
            style={{ width: "auto", height: "auto" }}
          />
        </motion.div>

        {/* Brown Leaf */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: brownOpacity }}
        >
          <Image
            src="/leaf-brown.png"
            alt="Brown Leaf"
            width={leafSize}
            height={leafSize}
            className="object-contain drop-shadow-xl"
            style={{ width: "auto", height: "auto" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
