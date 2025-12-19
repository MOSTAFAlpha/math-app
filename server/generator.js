/**
 * Generate React JSX from enhanced content
 * Converts structured JSON to React components
 */

/**
 * Convert enhanced content to JSX string
 * @param {object} enhanced - Enhanced content from AI
 * @param {string} chapterId - Chapter identifier
 * @returns {string} JSX code for the chapter
 */
export function generateJSX(enhanced, chapterId) {
    const { title, sections, exercises, quiz } = enhanced;

    // Generate section JSX
    const sectionsJSX = sections.map(section => {
        switch (section.type) {
            case 'heading':
                return `<h${section.level}>${section.content}</h${section.level}>`;

            case 'definition':
                return `<Definition term="${escapeJSX(section.term)}">
    <p>${escapeJSX(section.content)}</p>
</Definition>`;

            case 'theorem':
                return `<Theorem title="${escapeJSX(section.title)}">
    <p>${escapeJSX(section.content)}</p>
</Theorem>`;

            case 'formula':
                return `<FormulaBlock 
    formula="${escapeJSX(section.formula)}" 
    name="${escapeJSX(section.name || '')}" 
/>`;

            case 'retenir':
                return `<ReteniBox title="${escapeJSX(section.title || 'À retenir pour le Bac')}">
    ${section.items ? section.items.map(item => `<li>${escapeJSX(item)}</li>`).join('\n    ') : `<p>${escapeJSX(section.content)}</p>`}
</ReteniBox>`;

            case 'erreur':
                return `<ErreurBox title="${escapeJSX(section.title || 'Erreur fréquente')}">
    <p>${escapeJSX(section.content)}</p>
</ErreurBox>`;

            case 'example':
                return `<div className="example-box">
    <h4>📝 Exemple</h4>
    <p>${escapeJSX(section.content)}</p>
</div>`;

            case 'paragraph':
                return `<p>${escapeJSX(section.content)}</p>`;

            case 'list':
                return `<ul style={{marginLeft: '20px', lineHeight: '2'}}>
    ${section.items.map(item => `<li>${escapeJSX(item)}</li>`).join('\n    ')}
</ul>`;

            case 'table':
                return generateTableJSX(section);

            default:
                return `<p>${escapeJSX(JSON.stringify(section))}</p>`;
        }
    }).join('\n\n        ');

    // Generate exercises array
    const exercisesJS = JSON.stringify(exercises || [], null, 4);

    // Generate quiz array
    const quizJS = JSON.stringify(quiz || [], null, 4);

    // Generate component name from chapterId
    const componentName = chapterId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Cours';

    return `import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';

// ============================================
// ${title.toUpperCase()}
// Auto-generated from AlloSchool content
// ============================================

const ${componentName} = () => (
    <>
        ${sectionsJSX}
    </>
);

// Chapter data export
export const ${chapterId.replace(/-/g, '_')}_data = {
    id: '${chapterId}',
    title: '${escapeJSX(title)}',
    subtitle: 'Cours complet',
    courseContent: <${componentName} />,
    exercises: ${exercisesJS},
    quiz: ${quizJS},
    pdfCorrige: null,
    pdfResume: null
};

export default ${componentName};
`;
}

/**
 * Generate table JSX
 */
function generateTableJSX(tableData) {
    const { headers, rows } = tableData;

    return `<div style={{overflowX: 'auto'}}>
    <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'center', margin: '20px 0'}}>
        <thead>
            <tr style={{background: '#e0e7ff'}}>
                ${headers.map(h => `<th style={{padding: '12px', border: '1px solid #c7d2fe'}}>${escapeJSX(h)}</th>`).join('\n                ')}
            </tr>
        </thead>
        <tbody>
            ${rows.map(row => `<tr>
                ${row.map(cell => `<td style={{padding: '12px', border: '1px solid #c7d2fe'}}>${escapeJSX(cell)}</td>`).join('\n                ')}
            </tr>`).join('\n            ')}
        </tbody>
    </table>
</div>`;
}

/**
 * Escape JSX special characters and handle LaTeX
 */
function escapeJSX(str) {
    if (!str) return '';

    // Convert LaTeX delimiters to Latex component
    str = str.replace(/\$\$(.*?)\$\$/g, "<Latex>{'$$$1$$'}</Latex>");
    str = str.replace(/\$([^$]+)\$/g, "<Latex>{'$$$1$$'}</Latex>");

    // Escape remaining special chars
    return str
        .replace(/\{(?!')/g, '&#123;')
        .replace(/\}(?!<)/g, '&#125;');
}

/**
 * Generate full chapter file content
 */
export function generateChapterFile(chapters) {
    const imports = `import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';
`;

    const components = chapters.map(ch => ch.component).join('\n\n');

    const exports = `export const mathChapters = [
${chapters.map(ch => `    ${ch.id.replace(/-/g, '_')}_data`).join(',\n')}
];`;

    return `${imports}\n${components}\n${exports}`;
}
