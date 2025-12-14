import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calculator, Book, Activity } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    const Card = ({ title, desc, icon: Icon, path, color }) => (
        <div
            onClick={() => navigate(path)}
            className="glass-panel p-5 mb-4 card-hover cursor-pointer relative overflow-hidden group"
        >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/10 rounded-fullblur-2xl -mr-10 -mt-10 transition-all group-hover:bg-${color}-500/20`} />

            <div className="relative z-10 flex justify-between items-start">
                <div className={`p-3 rounded-xl bg-${color}-500/20 text-${color}-400 mb-3 inline-block`}>
                    <Icon size={24} />
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-white transition-colors" size={20} />
            </div>

            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-sm text-slate-400">{desc}</p>
        </div>
    );

    return (
        <div className="animate-enter">
            <div className="mb-8 mt-2">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                    Devoir Maison 2
                </h1>
                <p className="text-slate-400 mt-2">
                    Hello! Here are the solutions and lessons for your assignment.
                </p>
            </div>

            <div className="space-y-4">
                <div
                    onClick={() => navigate('/solutions')}
                    className="glass-panel p-6 card-hover cursor-pointer relative overflow-hidden border-l-4 border-l-purple-500"
                >
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-2xl font-bold text-white">Solutions</h2>
                        <Calculator className="text-purple-400" />
                    </div>
                    <p className="text-slate-300 mb-4">Step-by-step answers for Exercises 1, 2, and 3.</p>
                    <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 bg-purple-500/20 rounded text-purple-300 border border-purple-500/30">Suites</span>
                        <span className="text-xs px-2 py-1 bg-purple-500/20 rounded text-purple-300 border border-purple-500/30">Primitives</span>
                        <span className="text-xs px-2 py-1 bg-purple-500/20 rounded text-purple-300 border border-purple-500/30">Fonctions</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div
                        onClick={() => navigate('/lessons')}
                        className="glass-panel p-4 card-hover cursor-pointer border-l-4 border-l-cyan-500"
                    >
                        <Book className="text-cyan-400 mb-2" />
                        <h3 className="font-bold">Lessons</h3>
                        <p className="text-xs text-slate-400">Key concepts review</p>
                    </div>

                    <div
                        onClick={() => navigate('/workflow')}
                        className="glass-panel p-4 card-hover cursor-pointer border-l-4 border-l-pink-500"
                    >
                        <Activity className="text-pink-400 mb-2" />
                        <h3 className="font-bold">Workflow</h3>
                        <p className="text-xs text-slate-400">Logic & Process</p>
                    </div>
                </div>

                <div className="glass-panel p-4 mt-6">
                    <h4 className="font-bold text-sm text-slate-300 mb-2">Progress</h4>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 mb-1">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-full" style={{ width: '0%' }}></div> {/* animate this later */}
                    </div>
                    <p className="text-xs text-slate-500 text-right">0% Completed</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
