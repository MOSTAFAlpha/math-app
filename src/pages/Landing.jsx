import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Atom, FlaskConical, Languages, BookText, GraduationCap, Dna } from 'lucide-react';
import { motion } from 'framer-motion';

const subjects = [
    {
        id: 'math',
        name: 'Mathématiques',
        icon: Calculator,
        color: 'from-blue-500 to-cyan-400',
        desc: 'Suites, Primitives, Fonctions',
        link: '/math'
    },
    {
        id: 'physics',
        name: 'Physique',
        icon: Atom,
        color: 'from-purple-500 to-pink-500',
        desc: 'Coming Soon',
        link: '/physics'
    },
    {
        id: 'chemistry',
        name: 'Chimie',
        icon: FlaskConical,
        color: 'from-green-400 to-emerald-600',
        desc: 'Coming Soon',
        link: '/chemistry'
    },
    {
        id: 'svt',
        name: 'SVT',
        icon: Dna,
        color: 'from-green-500 to-teal-600',
        desc: 'Coming Soon',
        link: '/svt'
    },
    {
        id: 'english',
        name: 'English',
        icon: Languages,
        color: 'from-orange-400 to-red-500',
        desc: 'Coming Soon',
        link: '/english'
    },
    {
        id: 'french',
        name: 'Français',
        icon: BookText,
        color: 'from-indigo-400 to-blue-600',
        desc: 'Coming Soon',
        link: '/french'
    }
];

const Landing = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white p-6 pb-20">
            <div className="max-w-md mx-auto space-y-8">

                {/* Header */}
                <div className="text-center space-y-2 pt-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-4"
                    >
                        <GraduationCap size={32} className="text-indigo-400" />
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
                    >
                        My Study App
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-sm"
                    >
                        2ème Bac PC • Tous les devoirs en une app
                    </motion.p>
                </div>

                {/* Subjects Grid */}
                <div className="grid grid-cols-1 gap-4">
                    {subjects.map((sub, index) => (
                        <Link key={sub.id} to={sub.link}>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="glass-panel p-4 flex items-center gap-4 relative overflow-hidden group"
                            >
                                {/* Background Glow */}
                                <div className={`absolute right-0 top-0 w-32 h-32 bg-gradient-to-br ${sub.color} opacity-10 blur-2xl rounded-full -mr-10 -mt-10 group-hover:opacity-20 transition-opacity`}></div>

                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sub.color} flex items-center justify-center text-white shadow-lg`}>
                                    <sub.icon size={24} />
                                </div>

                                {/* Text */}
                                <div className="flex-1 z-10">
                                    <h3 className="font-bold text-lg">{sub.name}</h3>
                                    <p className="text-xs text-slate-400">{sub.desc}</p>
                                </div>

                                {/* Arrow */}
                                <div className="text-slate-500 group-hover:text-white transition-colors">
                                    ➔
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Landing;
