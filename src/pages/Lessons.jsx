import React, { useState } from 'react';
import Latex from 'react-latex-next';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, ChevronDown, Sparkles, Calculator, TrendingUp, Sigma, Infinity, Function } from 'lucide-react';

const lessonsData = [
    {
        id: 1,
        title: 'Suites Numériques',
        icon: Sigma,
        color: 'from-blue-500 to-cyan-400',
        bgColor: 'bg-blue-500/10',
        textColor: 'text-blue-400',
        borderColor: 'border-blue-500/30',
        glowColor: 'shadow-blue-500/20',
        topics: [
            {
                subtitle: 'Récurrence',
                content: (
                    <>
                        <p className="mb-2">
                            <Latex>{`Pour montrer $P(n)$ est vraie $\\forall n \\in \\mathbb{N}$:`}</Latex>
                        </p>
                        <div className="space-y-2 ml-2">
                            <div className="flex items-start gap-2 p-2 rounded-lg bg-blue-500/5 border border-blue-500/10">
                                <span className="px-2 py-0.5 text-xs font-bold bg-blue-500/20 text-blue-300 rounded">Init</span>
                                <span className="text-slate-300"><Latex>{`Vérifier $P(0)$ est vraie.`}</Latex></span>
                            </div>
                            <div className="flex items-start gap-2 p-2 rounded-lg bg-blue-500/5 border border-blue-500/10">
                                <span className="px-2 py-0.5 text-xs font-bold bg-blue-500/20 text-blue-300 rounded">Héréd</span>
                                <span className="text-slate-300"><Latex>{`Supposer $P(n)$ vraie, montrer $P(n+1)$.`}</Latex></span>
                            </div>
                        </div>
                    </>
                )
            },
            {
                subtitle: 'Convergence',
                content: (
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                        <p className="text-slate-300">
                            <span className="text-green-400 font-semibold">Théorème:</span> Toute suite{' '}
                            <span className="px-1.5 py-0.5 bg-green-500/20 text-green-300 rounded text-xs font-medium">décroissante et minorée</span>{' '}
                            ou <span className="px-1.5 py-0.5 bg-green-500/20 text-green-300 rounded text-xs font-medium">croissante et majorée</span>{' '}
                            est convergente.
                        </p>
                    </div>
                )
            },
            {
                subtitle: 'Suites Arithmétiques & Géométriques',
                content: (
                    <div className="grid gap-3">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-xs text-slate-500 mb-1">Suite Arithmétique</div>
                            <Latex>{`$u_{n+1} - u_n = r$ → $u_n = u_0 + nr$`}</Latex>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-xs text-slate-500 mb-1">Suite Géométrique</div>
                            <Latex>{`$u_{n+1} / u_n = q$ → $u_n = u_0 \\times q^n$`}</Latex>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        id: 2,
        title: 'Primitives',
        icon: Calculator,
        color: 'from-purple-500 to-pink-400',
        bgColor: 'bg-purple-500/10',
        textColor: 'text-purple-400',
        borderColor: 'border-purple-500/30',
        glowColor: 'shadow-purple-500/20',
        topics: [
            {
                subtitle: 'Formules Usuelles',
                content: (
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            { fn: `$u'u^n$`, prim: `$\\frac{u^{n+1}}{n+1}$` },
                            { fn: `$\\frac{u'}{\\sqrt{u}}$`, prim: `$2\\sqrt{u}$` },
                            { fn: `$\\frac{u'}{u^n}$`, prim: `$\\frac{-1}{(n-1)u^{n-1}}$` },
                            { fn: `$u'e^u$`, prim: `$e^u$` },
                            { fn: `$\\frac{u'}{u}$`, prim: `$\\ln|u|$` },
                            { fn: `$u'\\cos(u)$`, prim: `$\\sin(u)$` },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                            >
                                <div className="text-xs text-slate-500 mb-1"><Latex>{item.fn}</Latex></div>
                                <div className="text-purple-300 font-medium"><Latex>{item.prim}</Latex></div>
                            </motion.div>
                        ))}
                    </div>
                )
            },
            {
                subtitle: 'Linéarisation',
                content: (
                    <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20">
                        <p className="text-slate-300 mb-2">
                            Pour <Latex>{`$\\sin^3 x$`}</Latex> ou <Latex>{`$\\cos^3 x$`}</Latex>:
                        </p>
                        <div className="text-sm space-y-1 text-slate-400">
                            <p>• Utiliser <Latex>{`$\\sin^2 x = 1 - \\cos^2 x$`}</Latex></p>
                            <p>• Ou les formules d'Euler</p>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        id: 3,
        title: 'Étude de Fonctions',
        icon: TrendingUp,
        color: 'from-rose-500 to-orange-400',
        bgColor: 'bg-rose-500/10',
        textColor: 'text-rose-400',
        borderColor: 'border-rose-500/30',
        glowColor: 'shadow-rose-500/20',
        topics: [
            {
                subtitle: 'Asymptotes',
                content: (
                    <div className="space-y-2">
                        {[
                            { type: 'Verticale', cond: `$\\lim_{x \\to a} f(x) = \\pm\\infty$`, result: `$x = a$`, color: 'rose' },
                            { type: 'Horizontale', cond: `$\\lim_{x \\to \\pm\\infty} f(x) = b$`, result: `$y = b$`, color: 'orange' },
                            { type: 'Oblique', cond: `$\\lim_{x \\to \\infty} f(x) - (ax+b) = 0$`, result: `$y = ax + b$`, color: 'amber' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-3 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-between gap-3`}
                                style={{ background: `rgba(${i === 0 ? '244,63,94' : i === 1 ? '249,115,22' : '245,158,11'}, 0.1)` }}
                            >
                                <div>
                                    <span className={`text-xs font-bold text-${item.color}-400`} style={{ color: i === 0 ? '#fb7185' : i === 1 ? '#fb923c' : '#fbbf24' }}>{item.type}</span>
                                    <div className="text-slate-400 text-sm mt-1"><Latex>{item.cond}</Latex></div>
                                </div>
                                <div className="text-right">
                                    <div className="text-white font-medium"><Latex>{item.result}</Latex></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )
            },
            {
                subtitle: 'Théorème de la Bijection',
                content: (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
                        <div className="flex items-center gap-2 mb-2">
                            <Infinity size={16} className="text-amber-400" />
                            <span className="text-amber-300 font-semibold">Théorème</span>
                        </div>
                        <p className="text-slate-300">
                            Si <Latex>{`$f$`}</Latex> est{' '}
                            <span className="px-1.5 py-0.5 bg-green-500/20 text-green-300 rounded text-xs">continue</span> et{' '}
                            <span className="px-1.5 py-0.5 bg-green-500/20 text-green-300 rounded text-xs">strictement monotone</span>{' '}
                            sur <Latex>{`$I$`}</Latex>, alors <Latex>{`$f$`}</Latex> réalise une bijection de <Latex>{`$I$`}</Latex> sur <Latex>{`$J = f(I)$`}</Latex>.
                        </p>
                    </div>
                )
            }
        ]
    }
];

const LessonCard = ({ lesson, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0);
    const Icon = lesson.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
        >
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-2xl ${lesson.bgColor} blur-xl opacity-50 -z-10`}></div>

            <div className={`glass-panel overflow-hidden transition-all duration-300 ${isOpen ? `shadow-lg ${lesson.glowColor}` : ''}`}>
                {/* Header */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${lesson.color} flex items-center justify-center shadow-lg`}>
                            <Icon size={20} className="text-white" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-lg font-bold text-white">{lesson.title}</h2>
                            <p className="text-xs text-slate-500">{lesson.topics.length} concepts</p>
                        </div>
                    </div>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown size={20} className={`${lesson.textColor}`} />
                    </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <div className="px-5 pb-5 space-y-4">
                                {lesson.topics.map((topic, topicIndex) => (
                                    <motion.div
                                        key={topicIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: topicIndex * 0.1 }}
                                    >
                                        <div className={`flex items-center gap-2 mb-2 ${lesson.textColor}`}>
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${lesson.color}`}></div>
                                            <h3 className="font-semibold text-sm">{topic.subtitle}</h3>
                                        </div>
                                        <div className="text-sm text-slate-300 pl-3.5">
                                            {topic.content}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const Lessons = () => {
    return (
        <div className="pb-24 space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4"
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                        <Book size={20} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">
                            Résumés de Cours
                        </h1>
                        <p className="text-xs text-slate-500">Concepts clés à maîtriser</p>
                    </div>
                </div>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-4 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 border border-cyan-500/20"
            >
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Progression des chapitres</span>
                    <span className="text-sm font-bold text-cyan-400">3/3</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"
                    />
                </div>
            </motion.div>

            {/* Tip Card */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mx-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 flex items-start gap-3"
            >
                <Sparkles size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300">
                    <span className="font-semibold text-amber-300">Astuce: </span>
                    Cliquez sur chaque chapitre pour afficher les formules et théorèmes essentiels.
                </p>
            </motion.div>

            {/* Lesson Cards */}
            <div className="px-4 space-y-4">
                {lessonsData.map((lesson, index) => (
                    <LessonCard key={lesson.id} lesson={lesson} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Lessons;
