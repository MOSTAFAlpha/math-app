import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Atom, FlaskConical, Languages, BookOpen, GraduationCap, Dna, ChevronRight, BookMarked } from 'lucide-react';
import { motion } from 'framer-motion';

const subjects = [
    {
        id: 'math',
        name: 'Mathématiques',
        icon: Calculator,
        color: '#2563EB',
        bgColor: '#EFF6FF',
        desc: 'Suites numériques • Fonctions primitives • Étude de fonctions',
        exercises: 3,
        ready: true,
        link: '/math'
    },
    {
        id: 'physics',
        name: 'Physique',
        icon: Atom,
        color: '#7C3AED',
        bgColor: '#F5F3FF',
        desc: 'Mécanique • Électricité • Ondes',
        exercises: 0,
        ready: false,
        link: '/physics'
    },
    {
        id: 'chemistry',
        name: 'Chimie',
        icon: FlaskConical,
        color: '#059669',
        bgColor: '#ECFDF5',
        desc: 'Réactions chimiques • Équilibres • Acides et bases',
        exercises: 0,
        ready: false,
        link: '/chemistry'
    },
    {
        id: 'svt',
        name: 'Sciences de la Vie et de la Terre',
        icon: Dna,
        color: '#16A34A',
        bgColor: '#F0FDF4',
        desc: 'Biologie • Géologie • Écologie',
        exercises: 0,
        ready: false,
        link: '/svt'
    },
    {
        id: 'english',
        name: 'Anglais',
        icon: Languages,
        color: '#DC2626',
        bgColor: '#FEF2F2',
        desc: 'Grammar • Writing • Reading comprehension',
        exercises: 0,
        ready: false,
        link: '/english'
    },
    {
        id: 'french',
        name: 'Français',
        icon: BookOpen,
        color: '#0891B2',
        bgColor: '#ECFEFF',
        desc: 'Grammaire • Rédaction • Littérature',
        exercises: 0,
        ready: false,
        link: '/french'
    }
];

const Landing = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                            <GraduationCap size={24} className="text-white" />
                        </div>
                        <div>
                            <h1 className="font-bold text-gray-900 text-lg">Cours 2BAC PC</h1>
                            <p className="text-xs text-gray-500">Ressources pédagogiques</p>
                        </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                        2024-2025
                    </span>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-8">

                {/* Welcome Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-8 text-white"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <BookMarked size={28} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Bienvenue sur votre espace de cours</h2>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                Retrouvez ici tous les exercices, corrections détaillées et résumés de cours
                                pour préparer votre baccalauréat. Sélectionnez une matière pour commencer.
                            </p>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                        <div>
                            <div className="text-2xl font-bold">6</div>
                            <div className="text-blue-200 text-sm">Matières</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">3</div>
                            <div className="text-blue-200 text-sm">Exercices corrigés</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">∞</div>
                            <div className="text-blue-200 text-sm">Révisions</div>
                        </div>
                    </div>
                </motion.section>

                {/* Subjects Section */}
                <section>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Matières disponibles</h3>

                    <div className="grid gap-4">
                        {subjects.map((sub, index) => (
                            <motion.div
                                key={sub.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link to={sub.link}>
                                    <div
                                        className={`
                      bg-white rounded-xl border border-gray-200 p-5 
                      hover:border-gray-300 hover:shadow-md transition-all duration-200
                      flex items-center gap-4 group
                      ${!sub.ready ? 'opacity-60' : ''}
                    `}
                                    >
                                        {/* Icon */}
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: sub.bgColor }}
                                        >
                                            <sub.icon size={28} style={{ color: sub.color }} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-semibold text-gray-900">{sub.name}</h4>
                                                {sub.ready ? (
                                                    <span
                                                        className="px-2 py-0.5 rounded text-xs font-medium"
                                                        style={{ backgroundColor: sub.bgColor, color: sub.color }}
                                                    >
                                                        {sub.exercises} exercices
                                                    </span>
                                                ) : (
                                                    <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 text-xs font-medium">
                                                        Bientôt disponible
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 truncate">{sub.desc}</p>
                                        </div>

                                        {/* Arrow */}
                                        <ChevronRight
                                            size={20}
                                            className="text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0"
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Info Notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl"
                >
                    <p className="text-sm text-amber-800">
                        <strong>📢 Note :</strong> Les matières marquées "Bientôt disponible" seront ajoutées progressivement.
                        Consultez régulièrement cette page pour les nouveaux contenus.
                    </p>
                </motion.div>

            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-12">
                <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
                    © 2024 Cours 2BAC PC • Ressources pédagogiques pour la classe
                </div>
            </footer>

        </div>
    );
};

export default Landing;
