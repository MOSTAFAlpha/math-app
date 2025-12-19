import React from 'react';
import { BookOpen, AlertTriangle, Lightbulb } from 'lucide-react';
import Latex from 'react-latex-next';

/**
 * CourseSection - Displays course content with special boxes for "À retenir" and "Erreur fréquente"
 * @param {string|React.ReactNode} content - HTML/JSX content or string with LaTeX
 * @param {string} title - Section title
 */
const CourseSection = ({ content, title }) => {
    return (
        <div className="course-content">
            {title && <h2>{title}</h2>}
            {typeof content === 'string' ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
                content
            )}
        </div>
    );
};

/**
 * ReteniBox - "À retenir pour le Bac" highlighted box
 * @param {string} title - Box title (optional, defaults to "À retenir pour le Bac")
 * @param {React.ReactNode} children - Content
 */
export const ReteniBox = ({ title = "À retenir pour le Bac", children }) => {
    return (
        <div className="box-retenir">
            <div className="box-retenir-title">
                <Lightbulb size={20} />
                {title}
            </div>
            <div className="box-retenir-content">
                {children}
            </div>
        </div>
    );
};

/**
 * ErreurBox - "Erreur fréquente des élèves" warning box
 * @param {string} title - Box title (optional)
 * @param {React.ReactNode} children - Content
 */
export const ErreurBox = ({ title = "Erreur fréquente des élèves", children }) => {
    return (
        <div className="box-erreur">
            <div className="box-erreur-title">
                <AlertTriangle size={20} />
                {title}
            </div>
            <div className="box-erreur-content">
                {children}
            </div>
        </div>
    );
};

/**
 * InfoBox - General information box
 * @param {string} title - Box title
 * @param {React.ReactNode} children - Content
 */
export const InfoBox = ({ title, children }) => {
    return (
        <div className="box-info">
            {title && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)',
                    fontWeight: '600',
                    marginBottom: 'var(--spacing-sm)',
                    color: '#1d4ed8'
                }}>
                    <BookOpen size={20} />
                    {title}
                </div>
            )}
            <div style={{ color: '#1e40af' }}>
                {children}
            </div>
        </div>
    );
};

/**
 * FormulaBlock - Display a formula prominently
 * @param {string} formula - LaTeX formula
 * @param {string} name - Formula name (optional)
 */
export const FormulaBlock = ({ formula, name }) => {
    return (
        <div style={{
            background: 'var(--bg-section)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-md)',
            margin: 'var(--spacing-lg) 0',
            textAlign: 'center'
        }}>
            {name && (
                <div style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-muted)',
                    marginBottom: 'var(--spacing-sm)'
                }}>
                    {name}
                </div>
            )}
            <div style={{ fontSize: 'var(--font-size-xl)' }}>
                <Latex>{`$${formula}$`}</Latex>
            </div>
        </div>
    );
};

/**
 * Definition - Display a definition with term and description
 * @param {string} term - Term to define
 * @param {React.ReactNode} children - Definition content
 */
export const Definition = ({ term, children }) => {
    return (
        <div style={{
            borderLeft: '3px solid var(--color-math)',
            paddingLeft: 'var(--spacing-md)',
            margin: 'var(--spacing-md) 0'
        }}>
            <strong style={{ color: 'var(--color-math)' }}>{term} :</strong>
            <div style={{ marginTop: 'var(--spacing-xs)' }}>
                {children}
            </div>
        </div>
    );
};

/**
 * Theorem - Display a theorem or property
 * @param {string} title - Theorem title
 * @param {React.ReactNode} children - Theorem content
 */
export const Theorem = ({ title, children }) => {
    return (
        <div style={{
            background: '#fef3c7',
            border: '1px solid #fbbf24',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-lg)',
            margin: 'var(--spacing-lg) 0'
        }}>
            <div style={{
                fontWeight: '600',
                color: '#92400e',
                marginBottom: 'var(--spacing-sm)'
            }}>
                📐 {title}
            </div>
            <div style={{ color: '#78350f' }}>
                {children}
            </div>
        </div>
    );
};

export default CourseSection;
