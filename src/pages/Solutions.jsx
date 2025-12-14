import React, { useState } from 'react';
import { solutionsData } from '../data/solutionsData';
import Latex from 'react-latex-next';
import { ChevronDown, ChevronUp, CheckCircle, Lightbulb, BookOpen, PenTool, GraduationCap } from 'lucide-react';
import FunctionGraph from '../components/FunctionGraph';
import { motion, AnimatePresence } from 'framer-motion';

// Lesson explanations mapped to question types
const lessonExplanations = {
    // Exercise 1 - Suites
    "ex1_1.a": {
        title: "Récurrence",
        content: "Pour montrer $P(n)$ vraie $\\forall n$: **Init** (vérifier $n=0$) + **Hérédité** (si $P(n)$ alors $P(n+1)$)."
    },
    "ex1_1.b": {
        title: "Monotonie",
        content: "Étudier le signe de $u_{n+1} - u_n$. Si $< 0$: décroissante. Si $> 0$: croissante."
    },
    "ex1_1.c": {
        title: "Convergence",
        content: "Théorème: Suite décroissante + minorée $\\implies$ convergente. Suite croissante + majorée $\\implies$ convergente."
    },
    "ex1_2.a": {
        title: "Calcul direct",
        content: "Substituer $n=0$ dans la formule de $v_n$."
    },
    "ex1_2.b": {
        title: "Transformation",
        content: "Exprimer $v_{n+1}$ en fonction de $u_n$ uniquement."
    },
    "ex1_2.c": {
        title: "Suite Arithmétique",
        content: "$v_{n+1} - v_n = r$ (constante). Raison $r$, premier terme $v_0$."
    },
    "ex1_2.d": {
        title: "Terme général",
        content: "Arithmétique: $v_n = v_0 + nr$. Puis isoler $u_n$ de $v_n = \\frac{u_n}{u_n-4}$."
    },
    "ex1_2.e": {
        title: "Limite",
        content: "Limite d'un quotient: $\\lim \\frac{an+b}{cn+d} = \\frac{a}{c}$."
    },
    // Exercise 2 - Primitives
    "ex2_1.a": {
        title: "Primitive de $u^n$",
        content: "Primitive de $u'u^n$ est $\\frac{u^{n+1}}{n+1}$ (+constante)."
    },
    "ex2_1.b": {
        title: "Linéarisation",
        content: "Utiliser $\\sin^2 x = 1 - \\cos^2 x$ pour simplifier les puissances."
    },
    "ex2_1.c": {
        title: "Forme $\\frac{u'}{\\sqrt{u}}$",
        content: "Primitive de $\\frac{u'}{\\sqrt{u}}$ est $2\\sqrt{u}$."
    },
    "ex2_2.1": {
        title: "Décomposition",
        content: "Écrire $\\frac{P(x)}{Q(x)}$ comme somme de fractions simples."
    },
    "ex2_2.2": {
        title: "Condition initiale",
        content: "Trouver $C$ tel que $F(x_0) = y_0$."
    },
    // Exercise 3 - Fonctions
    "ex3_3.1": {
        title: "Domaine",
        content: "Conditions: racine $\\ge 0$, dénominateur $\\neq 0$."
    },
    "ex3_3.2": {
        title: "Limites",
        content: "Si $\\lim = \\pm\\infty$ quand $x \\to a$: asymptote verticale $x=a$."
    },
    "ex3_3.3": {
        title: "Branche infinie",
        content: "Si $\\lim f(x)/x = 0$: branche parabolique direction $(Ox)$."
    },
    "ex3_3.4": {
        title: "Dérivée quotient",
        content: "$(\\frac{u}{v})' = \\frac{u'v - uv'}{v^2}$"
    },
    "ex3_3.4b": {
        title: "Variations",
        content: "Signe de $f'(x)$ donne croissance/décroissance."
    },
    "ex3_3.5": {
        title: "Position relative",
        content: "Signe de $f(x) - x$ pour comparer avec $y=x$."
    },
    "ex3_3.6a": {
        title: "Construction courbe",
        content: "Placer: asymptotes, extrema, points remarquables."
    },
    "ex3_3.6b": {
        title: "Équation paramétrique",
        content: "Poser $t = \\sqrt{x}$, résoudre équation du 2nd degré."
    },
    "ex3_3.7a": {
        title: "Bijection",
        content: "Continue + strictement monotone $\\implies$ bijective, donc réciproque existe."
    },
    "ex3_3.7b": {
        title: "Courbe réciproque",
        content: "$(C_{f^{-1}})$ est symétrique de $(C_f)$ par rapport à $y=x$."
    },
    "ex3_3.P2.1": {
        title: "Récurrence",
        content: "Même méthode: Init + Hérédité avec $f(u_n) = u_{n+1}$."
    },
    "ex3_3.P2.2": {
        title: "Monotonie suite",
        content: "Utiliser $f(x) \\le x$ pour montrer $u_{n+1} \\le u_n$."
    },
    "ex3_3.P2.3": {
        title: "Limite point fixe",
        content: "Si $\\ell = f(\\ell)$, résoudre $f(x) = x$."
    }
};

const Solutions = () => {
    const [activeTab, setActiveTab] = useState('ex1');
    const [expandedItems, setExpandedItems] = useState({});

    const toggleItem = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const expandAll = () => {
        const allIds = {};
        solutionsData[activeTab].questions.forEach(q => {
            allIds[q.id] = true;
        });
        setExpandedItems(allIds);
    };

    const collapseAll = () => {
        setExpandedItems({});
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="pb-20"
        >
            <div className="px-4 mb-4">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
                    Exercices & Solutions
                </h1>
                <p className="text-xs text-slate-400">Questions • Solutions • Cours</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 px-4 scrollbar-hide">
                {Object.keys(solutionsData).map(key => (
                    <motion.button
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { setActiveTab(key); setExpandedItems({}); }}
                        className={`px-5 py-2 rounded-xl whitespace-nowrap text-sm font-bold transition-colors duration-300 ${activeTab === key
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
                            : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-700'
                            }`}
                    >
                        {key === 'ex1' ? 'Ex 1: Suites' : key === 'ex2' ? 'Ex 2: Primitives' : 'Ex 3: Fonctions'}
                    </motion.button>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="px-4 mb-4 flex gap-2">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={expandAll}
                    className="text-xs px-3 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
                >
                    Tout afficher
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={collapseAll}
                    className="text-xs px-3 py-1.5 bg-slate-700/50 text-slate-400 rounded-lg border border-slate-600/30 hover:bg-slate-600/50 transition-colors"
                >
                    Tout masquer
                </motion.button>
            </div>

            {/* Content */}
            <div className="px-4 min-h-[500px]">
                <div className="mb-6">
                    <motion.h2
                        key={activeTab} // Animate on tab change
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl font-bold text-white mb-1"
                    >
                        {solutionsData[activeTab].title}
                    </motion.h2>
                    <div className="h-1 w-12 bg-purple-500 rounded-full"></div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    key={activeTab} // Remount list on tab change
                    className="space-y-6"
                >
                    {solutionsData[activeTab].questions.map((item, index) => {
                        const isOpen = expandedItems[item.id];
                        const lesson = lessonExplanations[`${activeTab}_${item.id}`];

                        return (
                            <motion.div
                                variants={itemVariant}
                                layout // Smooth layout adjustments
                                key={item.id}
                                className="glass-panel overflow-hidden"
                            >
                                {/* Question Header */}
                                <motion.div
                                    layout="position"
                                    className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <BookOpen size={14} className="text-purple-400" />
                                                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Question</span>
                                            </div>
                                            <div className="text-white font-medium leading-relaxed">
                                                <Latex>{item.question}</Latex>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronDown size={20} className="text-slate-400" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Solution + Lesson Panel */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="border-t border-white/10 bg-slate-900/50 overflow-hidden"
                                        >
                                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-4">

                                                {/* Solution Column (2/3 width on LG) */}
                                                <div className="lg:col-span-2 p-4 border-b lg:border-b-0 lg:border-r border-white/10">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <PenTool size={14} className="text-green-400" />
                                                        <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Solution</span>
                                                    </div>

                                                    {item.tip && (
                                                        <div className="flex gap-2 items-start p-3 mb-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-xs text-yellow-200">
                                                            <Lightbulb size={14} className="mt-0.5 shrink-0" />
                                                            <span><strong>Méthode:</strong> {item.tip}</span>
                                                        </div>
                                                    )}

                                                    <div className="space-y-3">
                                                        {Array.isArray(item.answer) ? (
                                                            item.answer.map((step, idx) => (
                                                                <div key={idx} className="flex gap-3 items-start">
                                                                    <div className="flex-shrink-0 w-px bg-gradient-to-b from-cyan-500 to-purple-500 min-h-[24px]"></div>
                                                                    <div className="text-slate-300 text-sm leading-relaxed pb-1">
                                                                        <Latex>{step}</Latex>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <div className="text-slate-300 text-sm">
                                                                <Latex>{item.answer}</Latex>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Graph Integration for Q3.6a */}
                                                    {(item.id === '3.6a' || item.id === '3.6b') && (
                                                        <motion.div
                                                            initial={{ scale: 0.9, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            transition={{ delay: 0.2 }}
                                                            className="mt-4"
                                                        >
                                                            <FunctionGraph />
                                                        </motion.div>
                                                    )}

                                                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5 text-green-400 text-xs font-bold uppercase tracking-wider">
                                                        <CheckCircle size={14} />
                                                        <span>Vérifiée</span>
                                                    </div>
                                                </div>

                                                {/* Lesson Column (1/3 width on LG) */}
                                                <div className="p-4 bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <GraduationCap size={14} className="text-blue-400" />
                                                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Cours</span>
                                                    </div>

                                                    {lesson ? (
                                                        <div>
                                                            <h4 className="font-bold text-white text-sm mb-2">{lesson.title}</h4>
                                                            <div className="text-xs text-slate-300 leading-relaxed">
                                                                <Latex>{lesson.content}</Latex>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <p className="text-xs text-slate-500 italic">Rappel de cours non disponible.</p>
                                                    )}

                                                    <div className="mt-4 pt-3 border-t border-white/10">
                                                        <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                                                            Chapitre: {activeTab === 'ex1' ? 'Suites' : activeTab === 'ex2' ? 'Primitives' : 'Fonctions'}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Solutions;
