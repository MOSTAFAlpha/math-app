import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft, Plus, Save, Copy, Eye, Download,
    BookOpen, FileText, HelpCircle, Trash2, ChevronDown, ChevronUp, Code, RefreshCw
} from 'lucide-react';

/**
 * Admin Panel - Content Management System
 * Create and preview chapters, exercises, and quizzes
 */
const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('chapter');
    const [showPreview, setShowPreview] = useState(false);

    // Chapter state
    const [chapter, setChapter] = useState({
        id: '',
        title: '',
        subtitle: '',
        subject: 'math'
    });

    // Sections state
    const [sections, setSections] = useState([
        { id: 1, type: 'heading', level: 'h2', content: '' }
    ]);

    // Exercises state
    const [exercises, setExercises] = useState([
        { id: 1, difficulty: 'simple', content: '', questions: [''] }
    ]);

    // Quiz state
    const [quizQuestions, setQuizQuestions] = useState([
        { id: 1, question: '', options: ['', '', '', ''], correctAnswer: 0, explanation: '' }
    ]);

    // Editable code state
    const [editableCode, setEditableCode] = useState('');
    const [isCodeEdited, setIsCodeEdited] = useState(false);

    // Add section
    const addSection = (type) => {
        const newSection = {
            id: Date.now(),
            type,
            level: type === 'heading' ? 'h2' : undefined,
            content: '',
            title: type === 'box' ? '' : undefined,
            boxType: type === 'box' ? 'definition' : undefined
        };
        setSections([...sections, newSection]);
    };

    // Update section
    const updateSection = (id, field, value) => {
        setSections(sections.map(s => s.id === id ? { ...s, [field]: value } : s));
    };

    // Delete section
    const deleteSection = (id) => {
        setSections(sections.filter(s => s.id !== id));
    };

    // Add exercise
    const addExercise = () => {
        setExercises([...exercises, {
            id: Date.now(),
            difficulty: 'simple',
            content: '',
            questions: ['']
        }]);
    };

    // Add question to exercise
    const addQuestion = (exerciseId) => {
        setExercises(exercises.map(ex =>
            ex.id === exerciseId
                ? { ...ex, questions: [...ex.questions, ''] }
                : ex
        ));
    };

    // Add quiz question
    const addQuizQuestion = () => {
        setQuizQuestions([...quizQuestions, {
            id: Date.now(),
            question: '',
            options: ['', '', '', ''],
            correctAnswer: 0,
            explanation: ''
        }]);
    };

    // Generate code
    const generateCode = () => {
        const componentName = chapter.title.replace(/[^a-zA-Z]/g, '') + 'Cours';

        let code = `import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, InfoBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';

export const ${componentName} = () => (
    <>
`;

        sections.forEach(section => {
            if (section.type === 'heading') {
                code += `        <${section.level}>${section.content}</${section.level}>\n\n`;
            } else if (section.type === 'paragraph') {
                code += `        <p>${section.content}</p>\n\n`;
            } else if (section.type === 'box') {
                const BoxComponent = {
                    definition: 'Definition',
                    theorem: 'Theorem',
                    retenir: 'ReteniBox',
                    erreur: 'ErreurBox',
                    info: 'InfoBox'
                }[section.boxType];
                code += `        <${BoxComponent} ${section.boxType === 'definition' ? `term="${section.title}"` : `title="${section.title}"`}>
            <p>${section.content}</p>
        </${BoxComponent}>\n\n`;
            }
        });

        code += `    </>
);

export const ${chapter.id.replace(/-/g, '')}Exercises = ${JSON.stringify(exercises.map((ex, i) => ({
            number: i + 1,
            difficulty: ex.difficulty,
            useLaTeX: true,
            content: ex.content,
            questions: ex.questions.filter(q => q.trim())
        })), null, 4)};

export const ${chapter.id.replace(/-/g, '')}Quiz = ${JSON.stringify(quizQuestions.map(q => ({
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            useLaTeX: true
        })), null, 4)};
`;
        return code;
    };

    // Sync editable code with generated code
    const syncCode = () => {
        setEditableCode(generateCode());
        setIsCodeEdited(false);
    };

    // Get current code (edited or generated)
    const getCurrentCode = () => {
        return isCodeEdited ? editableCode : generateCode();
    };

    // Copy to clipboard
    const copyCode = () => {
        navigator.clipboard.writeText(getCurrentCode());
        alert('Code copié dans le presse-papiers!');
    };

    // Download as file
    const downloadCode = () => {
        const blob = new Blob([getCurrentCode()], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cours${chapter.title.replace(/[^a-zA-Z]/g, '')}.jsx`;
        a.click();
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
            {/* Header */}
            <header style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                color: 'white',
                padding: 'var(--spacing-lg) var(--spacing-xl)'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                    <Link to="/" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                        <ArrowLeft size={24} />
                    </Link>
                    <div>
                        <h1 style={{ margin: 0, fontSize: 'var(--font-size-2xl)' }}>
                            📝 Admin - Gestion de Contenu
                        </h1>
                        <p style={{ margin: 0, opacity: 0.8, fontSize: 'var(--font-size-sm)' }}>
                            Créer et gérer les chapitres, exercices et quiz
                        </p>
                    </div>
                </div>
            </header>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'var(--spacing-xl)', display: 'grid', gridTemplateColumns: showPreview ? '1fr 1fr' : '1fr', gap: 'var(--spacing-xl)' }}>
                {/* Main Editor */}
                <div>
                    {/* Tabs */}
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
                        {[
                            { id: 'chapter', icon: BookOpen, label: 'Chapitre' },
                            { id: 'exercises', icon: FileText, label: 'Exercices' },
                            { id: 'quiz', icon: HelpCircle, label: 'Quiz' },
                            { id: 'code', icon: Code, label: '📝 Code Direct' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 24px',
                                    border: 'none',
                                    borderRadius: 'var(--radius-md)',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    background: activeTab === tab.id ? '#2563eb' : 'var(--bg-card)',
                                    color: activeTab === tab.id ? 'white' : 'var(--text-primary)',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <tab.icon size={18} />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Chapter Info */}
                    {activeTab === 'chapter' && (
                        <div style={{ background: 'var(--bg-card)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                            <h3 style={{ marginTop: 0 }}>Informations du Chapitre</h3>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>ID (URL)</label>
                                    <input
                                        type="text"
                                        placeholder="limites-continuite"
                                        value={chapter.id}
                                        onChange={e => setChapter({ ...chapter, id: e.target.value })}
                                        style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontSize: '16px' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Matière</label>
                                    <select
                                        value={chapter.subject}
                                        onChange={e => setChapter({ ...chapter, subject: e.target.value })}
                                        style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontSize: '16px' }}
                                    >
                                        <option value="math">Mathématiques</option>
                                        <option value="physique">Physique-Chimie</option>
                                        <option value="svt">SVT</option>
                                        <option value="francais">Français</option>
                                        <option value="english">English</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Titre</label>
                                <input
                                    type="text"
                                    placeholder="Limites et Continuité"
                                    value={chapter.title}
                                    onChange={e => setChapter({ ...chapter, title: e.target.value })}
                                    style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontSize: '16px' }}
                                />
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Sous-titre</label>
                                <input
                                    type="text"
                                    placeholder="Cours complet - Limites, opérations, TVI..."
                                    value={chapter.subtitle}
                                    onChange={e => setChapter({ ...chapter, subtitle: e.target.value })}
                                    style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontSize: '16px' }}
                                />
                            </div>

                            <h3>Contenu du Cours</h3>

                            {/* Sections */}
                            {sections.map((section, index) => (
                                <div key={section.id} style={{
                                    background: 'var(--bg-section)',
                                    padding: 'var(--spacing-md)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--spacing-md)',
                                    border: '1px solid var(--border-color)'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>
                                            {section.type === 'heading' ? '📌 Titre' : section.type === 'paragraph' ? '📝 Paragraphe' : '📦 Box'}
                                        </span>
                                        <button onClick={() => deleteSection(section.id)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer' }}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    {section.type === 'heading' && (
                                        <select
                                            value={section.level}
                                            onChange={e => updateSection(section.id, 'level', e.target.value)}
                                            style={{ marginBottom: '8px', padding: '8px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}
                                        >
                                            <option value="h2">H2 - Section</option>
                                            <option value="h3">H3 - Sous-section</option>
                                            <option value="h4">H4 - Sous-sous-section</option>
                                        </select>
                                    )}

                                    {section.type === 'box' && (
                                        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                            <select
                                                value={section.boxType}
                                                onChange={e => updateSection(section.id, 'boxType', e.target.value)}
                                                style={{ padding: '8px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}
                                            >
                                                <option value="definition">🔵 Definition</option>
                                                <option value="theorem">🟣 Theorem</option>
                                                <option value="retenir">🟢 À Retenir</option>
                                                <option value="erreur">🟠 Erreur</option>
                                                <option value="info">ℹ️ Info</option>
                                            </select>
                                            <input
                                                type="text"
                                                placeholder="Titre du box"
                                                value={section.title || ''}
                                                onChange={e => updateSection(section.id, 'title', e.target.value)}
                                                style={{ flex: 1, padding: '8px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}
                                            />
                                        </div>
                                    )}

                                    <textarea
                                        placeholder={section.type === 'heading' ? 'I. Titre de section' : 'Contenu (supporte $LaTeX$)'}
                                        value={section.content}
                                        onChange={e => updateSection(section.id, 'content', e.target.value)}
                                        rows={section.type === 'heading' ? 1 : 4}
                                        style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontSize: '14px', fontFamily: 'monospace', resize: 'vertical' }}
                                    />
                                </div>
                            ))}

                            {/* Add Section Buttons */}
                            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                                <button onClick={() => addSection('heading')} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-md)', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)' }}>
                                    <Plus size={16} /> Titre
                                </button>
                                <button onClick={() => addSection('paragraph')} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-md)', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)' }}>
                                    <Plus size={16} /> Paragraphe
                                </button>
                                <button onClick={() => addSection('box')} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-md)', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)' }}>
                                    <Plus size={16} /> Box (Définition, Théorème...)
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Exercises Tab */}
                    {activeTab === 'exercises' && (
                        <div style={{ background: 'var(--bg-card)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                            <h3 style={{ marginTop: 0 }}>Exercices</h3>

                            {exercises.map((ex, exIndex) => (
                                <div key={ex.id} style={{ background: 'var(--bg-section)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-md)', border: '1px solid var(--border-color)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <span style={{ fontWeight: '600' }}>Exercice {exIndex + 1}</span>
                                        <select
                                            value={ex.difficulty}
                                            onChange={e => setExercises(exercises.map(x => x.id === ex.id ? { ...x, difficulty: e.target.value } : x))}
                                            style={{ padding: '6px 12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}
                                        >
                                            <option value="simple">🟢 Simple</option>
                                            <option value="moyen">🟡 Moyen</option>
                                            <option value="bac">🔴 Niveau Bac</option>
                                        </select>
                                    </div>

                                    <textarea
                                        placeholder="Énoncé de l'exercice (supporte $LaTeX$)"
                                        value={ex.content}
                                        onChange={e => setExercises(exercises.map(x => x.id === ex.id ? { ...x, content: e.target.value } : x))}
                                        rows={2}
                                        style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', marginBottom: '12px', fontSize: '14px', fontFamily: 'monospace' }}
                                    />

                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-muted)' }}>Questions:</label>
                                    {ex.questions.map((q, qIndex) => (
                                        <input
                                            key={qIndex}
                                            type="text"
                                            placeholder={`Question ${qIndex + 1}`}
                                            value={q}
                                            onChange={e => {
                                                const newQuestions = [...ex.questions];
                                                newQuestions[qIndex] = e.target.value;
                                                setExercises(exercises.map(x => x.id === ex.id ? { ...x, questions: newQuestions } : x));
                                            }}
                                            style={{ width: '100%', padding: '10px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', marginBottom: '8px', fontSize: '14px' }}
                                        />
                                    ))}
                                    <button onClick={() => addQuestion(ex.id)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-sm)', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '14px' }}>
                                        <Plus size={14} /> Ajouter question
                                    </button>
                                </div>
                            ))}

                            <button onClick={addExercise} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', border: '2px dashed #2563eb', borderRadius: 'var(--radius-md)', background: 'transparent', cursor: 'pointer', color: '#2563eb', fontWeight: '600' }}>
                                <Plus size={18} /> Ajouter un exercice
                            </button>
                        </div>
                    )}

                    {/* Quiz Tab */}
                    {activeTab === 'quiz' && (
                        <div style={{ background: 'var(--bg-card)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                            <h3 style={{ marginTop: 0 }}>Questions de Quiz</h3>

                            {quizQuestions.map((q, qIndex) => (
                                <div key={q.id} style={{ background: 'var(--bg-section)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-md)', border: '1px solid var(--border-color)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <span style={{ fontWeight: '600' }}>Question {qIndex + 1}</span>
                                        <button onClick={() => setQuizQuestions(quizQuestions.filter(x => x.id !== q.id))} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer' }}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Question (supporte $LaTeX$)"
                                        value={q.question}
                                        onChange={e => setQuizQuestions(quizQuestions.map(x => x.id === q.id ? { ...x, question: e.target.value } : x))}
                                        style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', marginBottom: '12px', fontSize: '14px' }}
                                    />

                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-muted)' }}>Options (cliquer pour marquer la bonne réponse):</label>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
                                        {q.options.map((opt, optIndex) => (
                                            <div key={optIndex} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <button
                                                    onClick={() => setQuizQuestions(quizQuestions.map(x => x.id === q.id ? { ...x, correctAnswer: optIndex } : x))}
                                                    style={{
                                                        width: '24px',
                                                        height: '24px',
                                                        borderRadius: '50%',
                                                        border: '2px solid',
                                                        borderColor: q.correctAnswer === optIndex ? '#22c55e' : 'var(--border-color)',
                                                        background: q.correctAnswer === optIndex ? '#22c55e' : 'transparent',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        fontSize: '12px',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    {q.correctAnswer === optIndex ? '✓' : ''}
                                                </button>
                                                <input
                                                    type="text"
                                                    placeholder={`Option ${optIndex + 1}`}
                                                    value={opt}
                                                    onChange={e => {
                                                        const newOptions = [...q.options];
                                                        newOptions[optIndex] = e.target.value;
                                                        setQuizQuestions(quizQuestions.map(x => x.id === q.id ? { ...x, options: newOptions } : x));
                                                    }}
                                                    style={{ flex: 1, padding: '10px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontSize: '14px' }}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Explication de la réponse"
                                        value={q.explanation}
                                        onChange={e => setQuizQuestions(quizQuestions.map(x => x.id === q.id ? { ...x, explanation: e.target.value } : x))}
                                        style={{ width: '100%', padding: '10px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontSize: '14px' }}
                                    />
                                </div>
                            ))}

                            <button onClick={addQuizQuestion} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', border: '2px dashed #2563eb', borderRadius: 'var(--radius-md)', background: 'transparent', cursor: 'pointer', color: '#2563eb', fontWeight: '600' }}>
                                <Plus size={18} /> Ajouter une question
                            </button>
                        </div>
                    )}

                    {/* Code Direct Tab */}
                    {activeTab === 'code' && (
                        <div style={{ background: 'var(--bg-card)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
                                <h3 style={{ margin: 0 }}>✏️ Éditer le Code Directement</h3>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button
                                        onClick={syncCode}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '8px 16px',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: 'var(--radius-sm)',
                                            background: 'var(--bg-section)',
                                            cursor: 'pointer',
                                            color: 'var(--text-primary)'
                                        }}
                                    >
                                        <RefreshCw size={16} /> Régénérer depuis formulaire
                                    </button>
                                </div>
                            </div>

                            {isCodeEdited && (
                                <div style={{
                                    background: '#fef3c7',
                                    color: '#92400e',
                                    padding: '12px',
                                    borderRadius: 'var(--radius-sm)',
                                    marginBottom: 'var(--spacing-md)',
                                    fontSize: '14px'
                                }}>
                                    ⚠️ Le code a été modifié manuellement. Cliquez sur "Régénérer" pour synchroniser avec le formulaire.
                                </div>
                            )}

                            <textarea
                                value={isCodeEdited ? editableCode : generateCode()}
                                onChange={(e) => {
                                    setEditableCode(e.target.value);
                                    setIsCodeEdited(true);
                                }}
                                style={{
                                    width: '100%',
                                    height: '600px',
                                    padding: '16px',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: 'var(--radius-md)',
                                    fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                                    fontSize: '13px',
                                    lineHeight: '1.6',
                                    resize: 'vertical',
                                    background: '#1e293b',
                                    color: '#e2e8f0',
                                    outline: 'none'
                                }}
                                placeholder="Le code généré apparaîtra ici..."
                            />

                            <div style={{ marginTop: 'var(--spacing-md)', display: 'flex', gap: 'var(--spacing-sm)' }}>
                                <button
                                    onClick={copyCode}
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: '600', background: '#22c55e', color: 'white' }}
                                >
                                    <Copy size={18} /> Copier le Code
                                </button>
                                <button
                                    onClick={downloadCode}
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: '600', background: '#2563eb', color: 'white' }}
                                >
                                    <Download size={18} /> Télécharger .jsx
                                </button>
                            </div>
                        </div>
                    )}


                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
                        <button
                            onClick={() => setShowPreview(!showPreview)}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: '600', background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                        >
                            <Eye size={18} /> {showPreview ? 'Masquer' : 'Voir'} le Code
                        </button>
                        <button
                            onClick={copyCode}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: '600', background: '#22c55e', color: 'white' }}
                        >
                            <Copy size={18} /> Copier le Code
                        </button>
                        <button
                            onClick={downloadCode}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: '600', background: '#2563eb', color: 'white' }}
                        >
                            <Download size={18} /> Télécharger .jsx
                        </button>
                    </div>
                </div>

                {/* Code Preview */}
                {showPreview && (
                    <div style={{ background: '#1e293b', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflow: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
                            <span style={{ color: '#94a3b8', fontWeight: '600' }}>📄 Code Généré</span>
                            <button onClick={copyCode} style={{ background: '#334155', border: 'none', color: 'white', padding: '8px 16px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: '14px' }}>
                                Copier
                            </button>
                        </div>
                        <pre style={{ color: '#e2e8f0', fontSize: '13px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', wordBreak: 'break-all', margin: 0, lineHeight: '1.6' }}>
                            {generateCode()}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
