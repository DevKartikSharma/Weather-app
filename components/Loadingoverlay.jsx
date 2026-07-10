"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function LoadingOverlay({
    loading,
    hasData,
    children
}) {
    return (
        <div className="relative">

            {/* Content */}
            <motion.div
                animate={
                    loading && hasData
                        ? {
                            filter: "blur(8px)",
                            opacity: 0.45,
                            scale: 0.98,
                        }
                        : {
                            filter: "none",
                            opacity: 1,
                            scale: 1,
                        }
                }
                transition={{
                    duration: 0.35,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>


            <AnimatePresence mode="wait">

                {/* First fetch */}
                {loading && !hasData && (
                    <motion.div
                        key="skeleton"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                            space-y-6
                        "
                    >

                        <SkeletonCard height="h-64" />
                        <SkeletonCard height="h-48" />
                        <SkeletonCard height="h-56" />

                    </motion.div>
                )}


                {/* Refresh fetch */}
                {loading && hasData && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                            absolute
                            inset-0
                            z-20
                            rounded-3xl
                            overflow-hidden
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <div
                            className="
                                absolute
                                inset-0
                                backdrop-blur-xl
                                bg-slate-950/40
                                border
                                border-white/10
                            "
                        />


                        <motion.div
                            className="
                                absolute
                                h-72
                                w-72
                                rounded-full
                                bg-cyan-400/20
                                blur-3xl
                            "
                            animate={{
                                x: [-30, 30, -30],
                                y: [20, -20, 20]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />


                        <motion.div
                            className="
                                relative
                                z-10
                                h-12
                                w-12
                                rounded-full
                                border-2
                                border-cyan-400/30
                                border-t-cyan-400
                            "
                            animate={{
                                rotate: 360
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                    </motion.div>
                )}

            </AnimatePresence>

        </div>
    );
}



function SkeletonCard({ height }) {
    return (
        <div
            className={`
                ${height}
                rounded-3xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                animate-pulse
            `}
        />
    );
}