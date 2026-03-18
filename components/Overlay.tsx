"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
    // Section 1: 0% to 20%
    const opacity1 = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(progress, [0, 0.2], [0, -50]);

    // Section 2: 25% to 55%
    const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(progress, [0.2, 0.55], [50, -50]);

    // Section 3: 60% to 90%
    const opacity3 = useTransform(progress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
    const y3 = useTransform(progress, [0.55, 0.9], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none text-white z-10 flex flex-col items-center justify-center p-8">

            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">Sahaj Sharma</h1>
                <p className="text-xl md:text-3xl text-gray-300 font-light drop-shadow-md">Creative Developer.</p>
            </motion.div>

            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex flex-col items-start justify-center max-w-7xl mx-auto w-full px-8 md:px-24"
            >
                <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl text-left leading-tight drop-shadow-lg">
                    I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">digital experiences.</span>
                </h2>
            </motion.div>

            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex flex-col items-end justify-center max-w-7xl mx-auto w-full px-8 md:px-24"
            >
                <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl text-right leading-tight drop-shadow-lg">
                    Bridging <br /> <span className="italic font-light text-gray-400">design</span> and <span className="font-bold underline decoration-gray-500 underline-offset-8">engineering.</span>
                </h2>
            </motion.div>

        </div>
    );
}
