import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, ArrowRight } from 'lucide-react';
import Latex from 'react-latex-next';

/**
 * QuizComponent - Interactive quiz with QCM and calculation questions
 * @param {Array} questions - Array of question objects
 * @param {string} title - Quiz title
 */
const QuizComponent = ({ questions = [], title = 'Quiz' }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState({});
    const [quizComplete, setQuizComplete] = useState(false);

    const handleSelectOption = (questionIndex, optionIndex) => {
        if (showResults[questionIndex]) return; // Already answered

        setSelectedAnswers(prev => ({
            ...prev,
            [questionIndex]: optionIndex
        }));
    };

    const handleCheckAnswer = (questionIndex) => {
        setShowResults(prev => ({
            ...prev,
            [questionIndex]: true
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setQuizComplete(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedAnswers({});
        setShowResults({});
        setQuizComplete(false);
    };

    const calculateScore = () => {
        let correct = 0;
        questions.forEach((q, idx) => {
            if (selectedAnswers[idx] === q.correctAnswer) {
                correct++;
            }
        });
        return correct;
    };

    if (questions.length === 0) {
        return (
            <div style={{
                padding: 'var(--spacing-xl)',
                textAlign: 'center',
                color: 'var(--text-muted)'
            }}>
                <p>Aucune question disponible pour ce quiz.</p>
                <p style={{ fontSize: 'var(--font-size-sm)' }}>
                    Les questions seront ajoutées prochainement.
                </p>
            </div>
        );
    }

    // Quiz Complete Screen
    if (quizComplete) {
        const score = calculateScore();
        const percentage = Math.round((score / questions.length) * 100);

        return (
            <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-2xl)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Quiz Terminé !</h2>

                <div style={{
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: '700',
                    color: percentage >= 70 ? 'var(--color-retenir)' : percentage >= 50 ? 'var(--color-erreur)' : '#ef4444',
                    marginBottom: 'var(--spacing-md)'
                }}>
                    {score} / {questions.length}
                </div>

                <p style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--text-muted)',
                    marginBottom: 'var(--spacing-xl)'
                }}>
                    {percentage >= 70 ? 'Excellent travail ! 🎉' :
                        percentage >= 50 ? 'Bon effort, continuez ! 💪' :
                            'Révisez le cours et réessayez 📚'}
                </p>

                <button className="btn btn-primary btn-lg" onClick={handleRestart}>
                    <RotateCcw size={20} />
                    Recommencer le Quiz
                </button>
            </div>
        );
    }

    const question = questions[currentQuestion];
    const isAnswered = showResults[currentQuestion];
    const selectedOption = selectedAnswers[currentQuestion];
    const isCorrect = selectedOption === question.correctAnswer;

    return (
        <div>
            {/* Progress */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--spacing-xs)',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-muted)'
                }}>
                    <span>Question {currentQuestion + 1} sur {questions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div style={{
                    height: '8px',
                    background: 'var(--bg-section)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        height: '100%',
                        width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                        background: 'var(--color-math)',
                        transition: 'width 0.3s ease'
                    }} />
                </div>
            </div>

            {/* Question Card */}
            <div className="quiz-question">
                <div className="quiz-question-text">
                    {question.useLaTeX ? (
                        <Latex>{question.question}</Latex>
                    ) : (
                        question.question
                    )}
                </div>

                <div className="quiz-options">
                    {question.options.map((option, idx) => {
                        let optionClass = 'quiz-option';
                        if (selectedOption === idx) optionClass += ' selected';
                        if (isAnswered) {
                            if (idx === question.correctAnswer) {
                                optionClass += ' correct';
                            } else if (selectedOption === idx && idx !== question.correctAnswer) {
                                optionClass += ' incorrect';
                            }
                        }

                        return (
                            <div
                                key={idx}
                                className={optionClass}
                                onClick={() => handleSelectOption(currentQuestion, idx)}
                            >
                                <span style={{
                                    width: '28px',
                                    height: '28px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: selectedOption === idx ? 'var(--color-math)' : 'white',
                                    color: selectedOption === idx ? 'white' : 'var(--text-primary)',
                                    borderRadius: '50%',
                                    fontWeight: '600',
                                    fontSize: 'var(--font-size-sm)'
                                }}>
                                    {String.fromCharCode(65 + idx)}
                                </span>
                                <span style={{ flex: 1 }}>
                                    {question.useLaTeX ? (
                                        <Latex>{option}</Latex>
                                    ) : (
                                        option
                                    )}
                                </span>
                                {isAnswered && idx === question.correctAnswer && (
                                    <CheckCircle size={20} color="var(--color-retenir)" />
                                )}
                                {isAnswered && selectedOption === idx && idx !== question.correctAnswer && (
                                    <XCircle size={20} color="#ef4444" />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Explanation (shown after answering) */}
                {isAnswered && question.explanation && (
                    <div style={{
                        marginTop: 'var(--spacing-lg)',
                        padding: 'var(--spacing-md)',
                        background: isCorrect ? 'var(--color-retenir-bg)' : 'var(--color-erreur-bg)',
                        borderRadius: 'var(--radius-sm)'
                    }}>
                        <strong>{isCorrect ? '✓ Correct !' : '✗ Incorrect'}</strong>
                        <p style={{ margin: 'var(--spacing-xs) 0 0 0' }}>
                            {question.useLaTeX ? (
                                <Latex>{question.explanation}</Latex>
                            ) : (
                                question.explanation
                            )}
                        </p>
                    </div>
                )}
            </div>

            {/* Actions */}
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 'var(--spacing-md)',
                marginTop: 'var(--spacing-lg)'
            }}>
                {!isAnswered && selectedOption !== undefined && (
                    <button
                        className="btn btn-primary"
                        onClick={() => handleCheckAnswer(currentQuestion)}
                    >
                        Vérifier
                    </button>
                )}
                {isAnswered && (
                    <button
                        className="btn btn-primary"
                        onClick={handleNextQuestion}
                    >
                        {currentQuestion < questions.length - 1 ? (
                            <>
                                Suivant
                                <ArrowRight size={18} />
                            </>
                        ) : (
                            'Voir les Résultats'
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizComponent;
