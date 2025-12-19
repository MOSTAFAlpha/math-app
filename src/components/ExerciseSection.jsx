import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import Latex from 'react-latex-next';

/**
 * ExerciseSection - Display exercises with difficulty indicators
 * @param {Array} exercises - Array of exercise objects
 */
const ExerciseSection = ({ exercises = [] }) => {
    const [expandedHints, setExpandedHints] = useState({});

    const toggleHint = (index) => {
        setExpandedHints(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const getDifficultyStyle = (difficulty) => {
        switch (difficulty?.toLowerCase()) {
            case 'simple':
            case 'facile':
                return 'difficulty-simple';
            case 'moyen':
            case 'intermédiaire':
                return 'difficulty-moyen';
            case 'bac':
            case 'difficile':
                return 'difficulty-bac';
            default:
                return 'difficulty-moyen';
        }
    };

    const getDifficultyLabel = (difficulty) => {
        switch (difficulty?.toLowerCase()) {
            case 'simple':
            case 'facile':
                return '🟢 Simple';
            case 'moyen':
            case 'intermédiaire':
                return '🟡 Moyen';
            case 'bac':
            case 'difficile':
                return '🔴 Niveau Bac';
            default:
                return difficulty || 'Moyen';
        }
    };

    if (exercises.length === 0) {
        return (
            <div style={{
                padding: 'var(--spacing-xl)',
                textAlign: 'center',
                color: 'var(--text-muted)'
            }}>
                <p>Aucun exercice disponible pour le moment.</p>
                <p style={{ fontSize: 'var(--font-size-sm)' }}>
                    Les exercices seront ajoutés prochainement.
                </p>
            </div>
        );
    }

    return (
        <div>
            {exercises.map((exercise, index) => (
                <div key={index} className="exercise">
                    <div className="exercise-header">
                        <span className="exercise-number">
                            Exercice {exercise.number || index + 1}
                        </span>
                        <span className={`exercise-difficulty ${getDifficultyStyle(exercise.difficulty)}`}>
                            {getDifficultyLabel(exercise.difficulty)}
                        </span>
                    </div>

                    <div style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.8' }}>
                        {exercise.useLaTeX ? (
                            <Latex>{exercise.content}</Latex>
                        ) : (
                            typeof exercise.content === 'string' ? (
                                <div dangerouslySetInnerHTML={{ __html: exercise.content }} />
                            ) : (
                                exercise.content
                            )
                        )}
                    </div>

                    {/* Sub-questions */}
                    {exercise.questions && exercise.questions.length > 0 && (
                        <ol style={{
                            marginTop: 'var(--spacing-md)',
                            marginLeft: 'var(--spacing-lg)',
                            lineHeight: '2'
                        }}>
                            {exercise.questions.map((q, qIdx) => (
                                <li key={qIdx} style={{ marginBottom: 'var(--spacing-sm)' }}>
                                    {exercise.useLaTeX ? (
                                        <Latex>{q}</Latex>
                                    ) : (
                                        q
                                    )}
                                </li>
                            ))}
                        </ol>
                    )}

                    {/* Hint (expandable) */}
                    {exercise.hint && (
                        <div style={{ marginTop: 'var(--spacing-md)' }}>
                            <button
                                onClick={() => toggleHint(index)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--spacing-xs)',
                                    background: 'none',
                                    border: '1px solid var(--border-color)',
                                    padding: 'var(--spacing-sm) var(--spacing-md)',
                                    borderRadius: 'var(--radius-sm)',
                                    cursor: 'pointer',
                                    color: 'var(--color-math)',
                                    fontSize: 'var(--font-size-sm)'
                                }}
                            >
                                <Lightbulb size={16} />
                                {expandedHints[index] ? 'Masquer l\'indication' : 'Voir une indication'}
                                {expandedHints[index] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>

                            {expandedHints[index] && (
                                <div style={{
                                    marginTop: 'var(--spacing-sm)',
                                    padding: 'var(--spacing-md)',
                                    background: '#eff6ff',
                                    borderRadius: 'var(--radius-sm)',
                                    color: '#1e40af',
                                    fontSize: 'var(--font-size-base)'
                                }}>
                                    💡 {exercise.useLaTeX ? (
                                        <Latex>{exercise.hint}</Latex>
                                    ) : (
                                        exercise.hint
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ExerciseSection;
