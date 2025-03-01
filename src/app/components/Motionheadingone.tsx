'use client'
import React from 'react'
import { motion } from "framer-motion"
export default function Motionheadingone({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <motion.h1
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: [20, -5, 0],
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            className={className}
        >{children}</motion.h1>
    )
}
