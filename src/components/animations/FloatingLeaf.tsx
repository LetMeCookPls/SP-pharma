"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FloatingLeaf({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const [isMounted, setIsMounted] = useState(false);
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    // eslint-disable-next-line
    setIsMounted(true);
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use a spring to completely eliminate scroll lag and frame skipping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Exact pixel calculations instead of CSS strings so the GPU can interpolate flawlessly
  const leafSize = 450;
  const startY = windowHeight * 0.1;
  const endY = windowHeight - leafSize;

  const y = useTransform(smoothProgress, [0, 1], [startY, endY]);
  
  // Swaying motion side to side
  const x = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0vw", "-8vw", "2vw", "-5vw", "1vw", "0vw"]
  );
  
  // Continuous rotation
  const rotate = useTransform(smoothProgress, [0, 1], [0, 720]);

  // Adjusting crossfade ranges so they spawn sequentially without overlap.
  // Green Leaf (Hero section) fades out at 0.35
  const greenOpacity = useTransform(smoothProgress, [0, 0.25, 0.35, 1], [1, 1, 0, 0]);
  
  // Yellow Leaf (Mid sections) starts spawning only at 0.35
  const yellowOpacity = useTransform(smoothProgress, [0, 0.35, 0.45, 0.65, 0.75, 1], [0, 0, 1, 1, 0, 0]);
  
  // Brown Leaf (Contact section) starts spawning only at 0.75
  const brownOpacity = useTransform(smoothProgress, [0, 0.75, 0.85, 1], [0, 0, 1, 1]);

  if (!isMounted) return null;


  return (
    <motion.div
      className="absolute right-[5vw] xl:right-[10vw] pointer-events-none z-0"
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
            fill
            sizes="450px"
            className="object-contain drop-shadow-xl"
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
            fill
            sizes="450px"
            className="object-contain drop-shadow-xl"
            priority
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
            fill
            sizes="450px"
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
