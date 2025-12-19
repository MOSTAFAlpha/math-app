import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, BookOpen, PenTool, FileCheck, FileText, HelpCircle } from 'lucide-react';
import Latex from 'react-latex-next';
import CourseSection from '../components/CourseSection';
import ExerciseSection from '../components/ExerciseSection';
import PDFViewer from '../components/PDFViewer';
import QuizComponent from '../components/QuizComponent';

/**
 * ChapterView - Displays a chapter with 5 tabbed sections
 * @param {Object} chapter - Chapter data object
 * @param {string} subjectPath - Base path for the subject (e.g., '/math')
 * @param {string} subjectName - Subject name for breadcrumb
 * @param {string} subjectColor - CSS class for subject color (e.g., 'physique', 'svt')
 */
const ChapterView = ({ chapter, subjectPath, subjectName, subjectColor = '' }) => {
    const [activeTab, setActiveTab] = useState('cours');

    const tabs = [
        { id: 'cours', label: 'Cours', icon: BookOpen },
        { id: 'exercices', label: 'Exercices', icon: PenTool },
        { id: 'corriges', label: 'Corrigés', icon: FileCheck },
        { id: 'resume', label: 'Résumé', icon: FileText },
        { id: 'quiz', label: 'Quiz', icon: HelpCircle },
    ];

    if (!chapter) {
        return (
            <div className="container" style={{ padding: 'var(--spacing-2xl)' }}>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h2>Chapitre non trouvé</h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Ce chapitre n'existe pas ou n'est pas encore disponible.
                    </p>
                    <Link to={subjectPath} className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)', textDecoration: 'none' }}>
                        Retour à la liste des chapitres
                    </Link>
                </div>
            </div>
        );
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case 'cours':
                return chapter.courseContent ? (
                    <CourseSection content={chapter.courseContent} />
                ) : (
                    <div style={{ padding: 'var(--spacing-xl)', textAlign: 'center', color: 'var(--text-muted)' }}>
                        <BookOpen size={48} style={{ opacity: 0.3, marginBottom: 'var(--spacing-md)' }} />
                        <p>Le contenu du cours sera ajouté prochainement.</p>
                    </div>
                );

            case 'exercices':
                return <ExerciseSection exercises={chapter.exercises || []} />;

            case 'corriges':
                return (
                    <PDFViewer
                        pdfUrl={chapter.pdfCorrige}
                        title={`Corrigés - ${chapter.title}`}
                    />
                );

            case 'resume':
                return (
                    <PDFViewer
                        pdfUrl={chapter.pdfResume}
                        title={`Résumé - ${chapter.title}`}
                    />
                );

            case 'quiz':
                return (
                    <QuizComponent
                        questions={chapter.quiz || []}
                        title={`Quiz - ${chapter.title}`}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div>
            {/* Header */}
            <div className={`subject-header ${subjectColor}`}>
                <div className="container">
                    <Link
                        to={subjectPath}
                        className="back-button"
                    >
                        <ChevronLeft size={18} />
                        Retour à {subjectName}
                    </Link>
                    <h1 style={{ marginBottom: 'var(--spacing-xs)' }}>{chapter.title}</h1>
                    {chapter.subtitle && (
                        <p style={{ opacity: 0.9, margin: 0 }}>{chapter.subtitle}</p>
                    )}
                </div>
            </div>

            <div className="container">
                {/* Tabs */}
                <div className="tabs">
                    {tabs.map(tab => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <Icon size={18} style={{ marginRight: '6px' }} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div style={{ minHeight: '500px' }}>
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default ChapterView;
