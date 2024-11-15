"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0,
        rotateY: -90,
        transformOrigin: "100% 100%", // Bottom-right corner
    },
    in: {
        opacity: 1,
        rotateY: 0,
        transformOrigin: "100% 100%", // Bottom-right corner
    },
    out: {
        opacity: 0,
        rotateY: 90,
        transformOrigin: "100% 100%", // Bottom-right corner
    },
};

const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 1.5, // Slower for a clear "flip" effect
};

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{
            width: "100%",
            minHeight: "100vh", // Allow content to expand and scroll
            perspective: 1500, // Adds a 3D effect
            position: "relative", // Keep it relative for proper layering
        }}
    >
        <motion.div
            style={{
                width: "100%",
                minHeight: "100vh", // Matches outer div
                borderLeft: "1px dotted",
                borderRight: "1px dotted",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Adds depth
                transformOrigin: "100% 100%", // Bottom-right corner
                borderRadius: "4px", // Optional, for a more realistic page look
            }}
        >
            {children}
        </motion.div>
    </motion.div>
);

export default PageTransition;
