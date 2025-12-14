import React from 'react';

const Workflow = () => {
    return (
        <div className="animate-enter">
            <h1 className="text-2xl font-bold mb-4 px-2">App Workflow</h1>
            <div className="glass-panel p-6">
                <h2 className="font-bold text-xl mb-4 text-pink-400">How it works</h2>
                <ul className="space-y-4 relative border-l-2 border-slate-700 ml-3 pl-6">
                    <li className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-pink-500 border-4 border-slate-900"></div>
                        <h3 className="font-bold">1. Problem Analysis</h3>
                        <p className="text-sm text-slate-400">Identify the type of math problem (Sequence, Function, etc.).</p>
                    </li>
                    <li className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-pink-500 border-4 border-slate-900"></div>
                        <h3 className="font-bold">2. Strategy Selection</h3>
                        <p className="text-sm text-slate-400">Choose the right theorem (e.g., T.V.I, Recurrence).</p>
                    </li>
                    <li className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-pink-500 border-4 border-slate-900"></div>
                        <h3 className="font-bold">3. Step-by-Step Resolution</h3>
                        <p className="text-sm text-slate-400">Execute the steps detailing calculation.</p>
                    </li>
                    <li className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-pink-500 border-4 border-slate-900"></div>
                        <h3 className="font-bold">4. Final Verification</h3>
                        <p className="text-sm text-slate-400">Check consistency (limits, bounds).</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Workflow;
