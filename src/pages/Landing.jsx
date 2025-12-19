import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Atom, Dna, GraduationCap, ChevronRight, Languages, BookText } from 'lucide-react';

/**
 * Landing - Classroom-friendly landing page with large clickable subject cards
 * Dark mode toggle is now handled globally via ThemeContext
 */
const Landing = () => {
    const subjects = [
        {
            id: 'math',
            title: 'Mathématiques',
            description: 'Suites, limites, dérivées, intégrales, nombres complexes...',
            icon: Calculator,
            path: '/math',
            color: '#2563eb',
            bgColor: '#dbeafe'
        },
        {
            id: 'physique',
            title: 'Physique-Chimie',
            description: 'Ondes, électricité, mécanique, chimie organique...',
            icon: Atom,
            path: '/physique-chimie',
            color: '#7c3aed',
            bgColor: '#ede9fe'
        },
        {
            id: 'svt',
            title: 'SVT',
            description: 'Génétique, immunologie, géologie, écologie...',
            icon: Dna,
            path: '/svt',
            color: '#059669',
            bgColor: '#d1fae5'
        },
        {
            id: 'francais',
            title: 'Français',
            description: 'Production écrite, œuvres littéraires, figures de style...',
            icon: BookText,
            path: '/francais',
            color: '#dc2626',
            bgColor: '#fee2e2'
        },
        {
            id: 'english',
            title: 'English',
            description: 'Writing skills, reading comprehension, grammar...',
            icon: Languages,
            path: '/english',
            color: '#ea580c',
            bgColor: '#ffedd5'
        }
    ];

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
            {/* Header */}
            <header style={{
                background: 'var(--bg-card)',
                borderBottom: '1px solid var(--border-color)',
                padding: 'var(--spacing-lg) var(--spacing-xl)',
                transition: 'var(--transition-theme)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-md)'
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
                    }}>
                        <GraduationCap size={28} color="white" />
                    </div>
                    <div>
                        <h1 style={{
                            fontSize: 'var(--font-size-2xl)',
                            margin: 0,
                            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            MaClasse
                        </h1>
                        <p style={{
                            margin: 0,
                            color: 'var(--text-muted)',
                            fontSize: 'var(--font-size-sm)'
                        }}>
                            2ème Baccalauréat - Maroc
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: 'var(--spacing-2xl) var(--spacing-lg)'
            }}>
                {/* Welcome Section */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: 'var(--spacing-2xl)'
                }}>
                    <h2 style={{
                        fontSize: 'var(--font-size-3xl)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        Bienvenue sur votre plateforme de cours
                    </h2>
                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--text-muted)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Cours, exercices, résumés et quiz pour réussir votre Baccalauréat
                    </p>
                </div>

                {/* Subject Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {subjects.map(subject => {
                        const Icon = subject.icon;
                        return (
                            <Link
                                key={subject.id}
                                to={subject.path}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div
                                    className="glass"
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: '2px solid var(--border-color)',
                                        borderRadius: 'var(--radius-lg)',
                                        padding: 'var(--spacing-xl)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        minHeight: '200px',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = subject.color;
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = `0 20px 40px ${subject.color}25`;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        background: `linear-gradient(135deg, ${subject.bgColor} 0%, ${subject.color}20 100%)`,
                                        borderRadius: 'var(--radius-md)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: 'var(--spacing-lg)',
                                        boxShadow: `0 4px 12px ${subject.color}30`
                                    }}>
                                        <Icon size={32} color={subject.color} />
                                    </div>
                                    <h3 style={{
                                        fontSize: 'var(--font-size-xl)',
                                        marginBottom: 'var(--spacing-sm)',
                                        color: subject.color,
                                        fontWeight: '600'
                                    }}>
                                        {subject.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--text-muted)',
                                        flex: 1,
                                        marginBottom: 'var(--spacing-md)',
                                        lineHeight: '1.6'
                                    }}>
                                        {subject.description}
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: subject.color,
                                        fontWeight: '600',
                                        gap: '4px'
                                    }}>
                                        Accéder aux cours
                                        <ChevronRight size={20} />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Info Section */}
                <div style={{
                    marginTop: 'var(--spacing-2xl)',
                    padding: 'var(--spacing-xl)',
                    background: 'linear-gradient(135deg, var(--bg-section) 0%, var(--bg-card) 100%)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                    border: '1px solid var(--border-color)'
                }}>
                    <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>
                        📚 Ressources complètes pour le Bac
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
                        Chaque chapitre contient : <strong>Cours</strong> • <strong>Exercices</strong> • <strong>Corrigés PDF</strong> • <strong>Résumés</strong> • <strong>Quiz</strong>
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer style={{
                borderTop: '1px solid var(--border-color)',
                padding: 'var(--spacing-lg)',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: 'var(--font-size-sm)',
                marginTop: 'auto'
            }}>
                © 2024 MaClasse • Ressources éducatives pour le 2ème Baccalauréat Marocain
            </footer>
        </div>
    );
};

export default Landing;
