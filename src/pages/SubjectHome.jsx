import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * SubjectHome - Generic subject homepage showing list of chapters
 * @param {string} title - Subject title
 * @param {string} description - Subject description
 * @param {Array} chapters - Array of chapter objects
 * @param {string} basePath - Base route path (e.g., '/math')
 * @param {string} colorClass - CSS class for subject color (e.g., 'physique', 'svt')
 */
const SubjectHome = ({ title, description, chapters = [], basePath, colorClass = '' }) => {
    return (
        <div>
            {/* Subject Header */}
            <div className={`subject-header ${colorClass}`}>
                <div className="container">
                    <Link
                        to="/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-xs)',
                            color: 'white',
                            opacity: 0.8,
                            textDecoration: 'none',
                            marginBottom: 'var(--spacing-md)'
                        }}
                    >
                        <Home size={18} />
                        Accueil
                    </Link>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>

            <div className="container">
                {/* Chapter Count */}
                <div style={{
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--text-muted)'
                }}>
                    {chapters.length} chapitre{chapters.length > 1 ? 's' : ''} disponible{chapters.length > 1 ? 's' : ''}
                </div>

                {/* Chapter List */}
                <div className="chapter-list">
                    {chapters.map((chapter, index) => (
                        <Link
                            key={chapter.id}
                            to={`${basePath}/chapitre/${chapter.id}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className="chapter-card">
                                <div className="chapter-number">
                                    {index + 1}
                                </div>
                                <div className="chapter-info" style={{ flex: 1 }}>
                                    <h3>{chapter.title}</h3>
                                    {chapter.subtitle && (
                                        <p>{chapter.subtitle}</p>
                                    )}
                                </div>
                                <ChevronRight size={24} color="var(--text-muted)" />
                            </div>
                        </Link>
                    ))}

                    {chapters.length === 0 && (
                        <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-2xl)' }}>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Les chapitres seront ajoutés prochainement.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubjectHome;
