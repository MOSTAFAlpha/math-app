import React from 'react';
import { motion } from 'framer-motion';

const FunctionGraph = () => {
    // SVG Viewport configuration
    const width = 400;
    const height = 400;
    const scale = 20; // pixels per unit
    const originX = 50;
    const originY = 350;

    // Helper to map math coordinates to SVG coordinates
    const toSVG = (x, y) => ({
        x: originX + x * scale,
        y: originY - y * scale
    });

    // f(x) = x / (sqrt(x) - 1)
    const f = (x) => x / (Math.sqrt(x) - 1);

    // Generate path data for f(x)
    const generatePath = (start, end, steps, func) => {
        let d = "";
        for (let i = 0; i <= steps; i++) {
            const x = start + (end - start) * (i / steps);
            try {
                const y = func(x);
                if (Math.abs(y) < 20) { // Clip huge values near asymptote
                    const pos = toSVG(x, y);
                    if (i === 0) d += `M ${pos.x} ${pos.y}`;
                    else d += ` L ${pos.x} ${pos.y}`;
                }
            } catch (e) { }
        }
        return d;
    };

    // Branch 1: [0, 1[
    const path1 = generatePath(0, 0.95, 40, f);
    // Branch 2: ]1, 10]
    const path2 = generatePath(1.1, 12, 100, f);

    return (
        <div className="w-full flex justify-center py-4 bg-slate-900 rounded-xl border border-slate-700 mt-4 shadow-inner">
            <div className="relative overflow-visible">
                <svg width={width} height={height} className="bg-slate-800 rounded-lg overflow-visible shadow-lg">
                    {/* Grid */}
                    <defs>
                        <pattern id="grid" width={scale} height={scale} patternUnits="userSpaceOnUse">
                            <path d={`M ${scale} 0 L 0 0 0 ${scale}`} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Axes */}
                    <line x1={0} y1={originY} x2={width} y2={originY} stroke="white" strokeWidth="2" strokeOpacity="0.8" /> {/* X Axis */}
                    <line x1={originX} y1={0} x2={originX} y2={height} stroke="white" strokeWidth="2" strokeOpacity="0.8" /> {/* Y Axis */}

                    {/* Asymptote x=1 */}
                    <line x1={originX + scale} y1={0} x2={originX + scale} y2={height} stroke="#ef4444" strokeDasharray="4" opacity="0.6" strokeWidth="1.5" />
                    <text x={originX + scale + 5} y={20} fill="#ef4444" fontSize="10" opacity="0.8">x=1 (Asymptote)</text>

                    {/* y=x */}
                    <line x1={originX} y1={originY} x2={originX + 15 * scale} y2={originY - 15 * scale} stroke="gray" strokeDasharray="4" opacity="0.4" />
                    <text x={width - 40} y={100} fill="gray" fontSize="10" transform="rotate(-45 360 100)">y=x</text>

                    {/* Curves with Animation */}
                    <motion.path
                        d={path1}
                        stroke="#06b6d4"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path
                        d={path2}
                        stroke="#06b6d4"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    />

                    {/* Special Point (4, 4) */}
                    <motion.circle
                        cx={originX + 4 * scale}
                        cy={originY - 4 * scale}
                        r="4"
                        fill="#a855f7"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5, type: "spring" }}
                    />
                    <motion.text
                        x={originX + 4 * scale + 10}
                        y={originY - 4 * scale}
                        fill="#a855f7"
                        fontSize="12"
                        fontWeight="bold"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 }}
                    >
                        Min (4, 4)
                    </motion.text>

                    {/* Labels */}
                    <text x={width - 20} y={originY + 20} fill="white" fontSize="12">x</text>
                    <text x={originX - 20} y={20} fill="white" fontSize="12">f(x)</text>
                </svg>

                <div className="absolute top-4 right-4 bg-slate-900/90 px-3 py-2 rounded-lg text-xs text-white border border-slate-700 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-0.5 bg-cyan-500"></div>
                        <span className="text-cyan-400 font-bold">Courbe $(C_f)$</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-red-500 border-t border-dashed border-red-500"></div>
                        <span className="text-red-400">Asymptote $x=1$</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunctionGraph;
