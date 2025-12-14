import React, { useState } from 'react';
import Latex from 'react-latex-next';
import { ChevronDown, ChevronUp, CheckCircle, Lightbulb } from 'lucide-react';
import clsx from 'clsx';

const SolutionCard = ({ question, answer, tip, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="glass-panel overflow-hidden mb-4 transition-all duration-300">
            <div
                className="p-4 flex justify-between items-start cursor-pointer hover:bg-white/5"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex gap-3">
                    <div className={clsx(
                        "mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                        isOpen ? "bg-cyan-500 text-white" : "bg-slate-700 text-slate-400"
                    )}>
                        <span className="text-xs font-bold">Q</span>
                    </div>
                    <div className="text-sm font-medium pt-1 pr-4">
                        <Latex>{question}</Latex>
                    </div>
                </div>
                {isOpen ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
            </div>

            {isOpen && (
                <div className="px-4 pb-4 animate-enter">
                    <div className="pl-9 space-y-3">
                        {/* Tip/Hint */}
                        {tip && (
                            <div className="flex gap-2 items-start p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-xs text-yellow-200">
                                <Lightbulb size={14} className="mt-0.5 shrink-0" />
                                <span><strong className="block mb-1">Method:</strong> {tip}</span>
                            </div>
                        )}

                        {/* Answer Steps */}
                        <div className="text-slate-300 text-sm leading-relaxed space-y-2">
                            {Array.isArray(answer) ? (
                                answer.map((step, idx) => (
                                    <div key={idx} className="flex gap-2">
                                        <div className="w-0.5 bg-slate-700 h-full mt-1"></div>
                                        <div className="pb-2">
                                            <Latex>{step}</Latex>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <Latex>{answer}</Latex>
                            )}
                        </div>

                        <div className="flex items-center gap-2 mt-4 text-green-400 text-xs font-bold uppercase tracking-wider">
                            <CheckCircle size={14} />
                            <span>Result Verified</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SolutionCard;
