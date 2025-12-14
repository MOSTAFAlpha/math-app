import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, GitMerge, ChevronRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = [
    {
        title: 'Exercices Corrigés',
        desc: 'Accédez aux solutions détaillées de tous les exercices du devoir maison.',
        icon: FileText,
        link: '/math/solutions',
        color: '#2563EB',
        bgColor: '#EFF6FF',
        count: '3 exercices'
    },
    {
        title: 'Résumés de Cours',
        desc: 'Consultez les rappels théoriques pour chaque chapitre étudié.',
        icon: BookOpen,
        link: '/math/lessons',
        color: '#059669',
        bgColor: '#ECFDF5',
        count: '3 chapitres'
    },
    {
        title: 'Méthodes de Travail',
        desc: 'Découvrez comment aborder et résoudre chaque type d\'exercice.',
        icon: GitMerge,
        link: '/math/workflow',
        color: '#7C3AED',
        bgColor: '#F5F3FF',
        count: 'Conseils'
    }
];

const topics = [
    'Suites numériques (arithmétiques, géométriques)',
    'Calcul de primitives',
    'Étude complète de fonctions',
    'Limites et continuité',
    'Dérivation et variations'
];

const Home = () => {
    return (
        <div className="space-y-8">

            {/* Welcome Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
            >
                <h1 className="text-xl font-bold text-gray-900 mb-2">
                    Devoir Maison n°2
                </h1>
                <p className="text-gray-600 text-sm mb-4">
                    Retrouvez ici toutes les ressources pour ce devoir : exercices corrigés
                    étape par étape, rappels de cours et conseils méthodologiques.
                </p>

                {/* Topics */}
                <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Chapitres concernés :</h3>
                    <div className="space-y-2">
                        {topics.map((topic, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                                <span>{topic}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Quick Access Cards */}
            <div className="space-y-3">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Accès rapide
                </h2>

                {sections.map((section, index) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={section.link}>
                            <div className="bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-sm transition-all flex items-center gap-4 group">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: section.bgColor }}
                                >
                                    <section.icon size={24} style={{ color: section.color }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-gray-900">{section.title}</h3>
                                        <span
                                            className="text-xs px-2 py-0.5 rounded font-medium"
                                            style={{ backgroundColor: section.bgColor, color: section.color }}
                                        >
                                            {section.count}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 line-clamp-1">{section.desc}</p>
                                </div>
                                <ChevronRight size={20} className="text-gray-300 group-hover:text-gray-500 flex-shrink-0" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Help Notice */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                    <strong>💡 Conseil :</strong> Essayez d'abord de résoudre les exercices vous-même
                    avant de consulter les corrections. C'est le meilleur moyen de progresser !
                </p>
            </div>

        </div>
    );
};

export default Home;
