/**
 * CONTENT TEMPLATE - Copy this file to create new chapters
 * =========================================================
 * 
 * INSTRUCTIONS:
 * 1. Copy this entire file to src/data/cours[YourChapterName].jsx
 * 2. Replace all placeholder text with your content
 * 3. Import and add to the appropriate chapters file (mathChapters.jsx, etc.)
 * 
 * COMPONENTS AVAILABLE:
 * - <Definition term="..."> - For definitions (blue box)
 * - <Theorem title="..."> - For theorems (purple box)
 * - <ReteniBox title="..."> - For "À retenir" sections (green box)
 * - <ErreurBox title="..."> - For common errors (orange box)
 * - <InfoBox title="..."> - For additional info (blue box)
 * - <FormulaBlock> - For highlighted formulas
 * - <Latex>{'$...$'}</Latex> - For math notation
 */

import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, InfoBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';

// ============================================
// COURSE CONTENT COMPONENT
// Replace ChapterNameCours with your chapter name
// ============================================

export const ChapterNameCours = () => (
    <>
        {/* SECTION 1 */}
        <h2>I. Section Title</h2>

        <h3>1. Subsection Title</h3>

        <Definition term="Term Name">
            <p>Your definition text here.</p>
            <p>Use <Latex>{'$formula$'}</Latex> for inline math.</p>
        </Definition>

        <Theorem title="Theorem Name">
            <p>Your theorem statement here.</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <Latex>{'$\\displaystyle formula$'}</Latex>
            </p>
        </Theorem>

        <ReteniBox title="Key Points to Remember">
            <ul style={{ lineHeight: '2' }}>
                <li>Important point 1</li>
                <li>Important point 2</li>
                <li>Important point 3</li>
            </ul>
        </ReteniBox>

        <ErreurBox title="Common Mistakes">
            <ul>
                <li>Error 1: What to avoid</li>
                <li>Error 2: What to avoid</li>
            </ul>
        </ErreurBox>

        <h4>Example:</h4>
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <p><strong>Exercise:</strong> Problem statement here.</p>
            <p><strong>Solution:</strong></p>
            <p>Step-by-step solution here.</p>
        </div>

        {/* SECTION 2 */}
        <h2>II. Another Section</h2>
        {/* Add more content here... */}
    </>
);

// ============================================
// EXERCISES ARRAY
// ============================================

export const chapterNameExercises = [
    {
        number: 1,
        difficulty: 'simple',  // Options: 'simple', 'moyen', 'bac'
        useLaTeX: true,
        content: 'Exercise description or introduction.',
        questions: [
            'Question 1 with $LaTeX$ if needed',
            'Question 2',
            'Question 3'
        ]
    },
    {
        number: 2,
        difficulty: 'moyen',
        useLaTeX: true,
        content: 'Soit $f(x) = ...$',
        questions: [
            'Calculer $f(0)$.',
            'Déterminer les limites.',
            'Étudier la dérivabilité.'
        ]
    },
    {
        number: 3,
        difficulty: 'bac',
        useLaTeX: true,
        content: 'Full Bac-style exercise statement.',
        questions: [
            'Part a)',
            'Part b)',
            'Part c)'
        ]
    }
];

// ============================================
// QUIZ ARRAY
// ============================================

export const chapterNameQuiz = [
    {
        question: 'Quiz question 1?',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: 0,  // Index of correct answer (0 = first option)
        explanation: 'Explanation of why this is correct.',
        useLaTeX: false
    },
    {
        question: 'Quiz question with $LaTeX$ formula?',
        options: ['$Option A$', '$Option B$', '$Option C$', '$Option D$'],
        correctAnswer: 1,
        explanation: 'Explanation here.',
        useLaTeX: true
    },
    {
        question: 'Another question?',
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 2,
        explanation: 'Because...',
        useLaTeX: false
    }
];

// ============================================
// HOW TO ADD TO CHAPTER FILE
// ============================================
/*
1. Open the appropriate chapters file:
   - Math: src/data/mathChapters.jsx
   - Physics: src/data/physiqueChapters.jsx
   - SVT: src/data/svtChapters.jsx
   - English: src/data/englishChapters.jsx
   - French: src/data/frenchChapters.jsx

2. Add import at top of file:
   import { ChapterNameCours, chapterNameExercises, chapterNameQuiz } from './coursChapterName';

3. Add new chapter object to the array:
   {
       id: 'chapter-id',  // URL-safe lowercase with hyphens
       title: 'Chapter Title',
       subtitle: 'Short description',
       courseContent: <ChapterNameCours />,
       exercises: chapterNameExercises,
       quiz: chapterNameQuiz,
       pdfCorrige: null,  // Optional: '/pdfs/corrige.pdf'
       pdfResume: null    // Optional: '/pdfs/resume.pdf'
   }
*/
