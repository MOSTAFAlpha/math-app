import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';

// ============================================
// CHAPITRE 4: FONCTION LOGARITHME
// ============================================

export const LogarithmeCours = () => (
    <>
        <h2>I. La fonction logarithme népérien</h2>

        <h3>1. Définition</h3>
        <Definition term="Fonction logarithme népérien">
            <p>La fonction <strong>logarithme népérien</strong>, notée <Latex>{'$\\ln$'}</Latex>, est définie sur <Latex>{'$]0, +\\infty[$'}</Latex> comme la <strong>réciproque</strong> de la fonction exponentielle.</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <Latex>{'$\\forall x > 0, \\forall y \\in \\mathbb{R} : \\quad y = \\ln x \\Leftrightarrow x = e^y$'}</Latex>
            </p>
        </Definition>

        <h3>2. Relations fondamentales</h3>
        <ReteniBox title="Relations ln et exp">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <p><Latex>{'$\\ln(e^x) = x$'}</Latex> pour tout <Latex>{'$x \\in \\mathbb{R}$'}</Latex></p>
                    <p><Latex>{'$e^{\\ln x} = x$'}</Latex> pour tout <Latex>{'$x > 0$'}</Latex></p>
                </div>
                <div>
                    <p><Latex>{'$\\ln 1 = 0$'}</Latex></p>
                    <p><Latex>{'$\\ln e = 1$'}</Latex></p>
                </div>
            </div>
        </ReteniBox>

        <h2>II. Propriétés algébriques</h2>

        <ReteniBox title="Propriétés fondamentales du logarithme">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Produit :</td>
                        <td style={{ padding: '12px' }}><Latex>{'$\\ln(ab) = \\ln a + \\ln b$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Quotient :</td>
                        <td style={{ padding: '12px' }}><Latex>{'$\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Puissance :</td>
                        <td style={{ padding: '12px' }}><Latex>{'$\\ln(a^n) = n \\ln a$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Racine :</td>
                        <td style={{ padding: '12px' }}><Latex>{'$\\ln\\sqrt{a} = \\frac{1}{2}\\ln a$'}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Inverse :</td>
                        <td style={{ padding: '12px' }}><Latex>{'$\\ln\\left(\\frac{1}{a}\\right) = -\\ln a$'}</Latex></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <ErreurBox title="Erreur fréquente : Somme ≠ Produit">
            <p><strong>FAUX :</strong> <Latex>{'$\\ln(a + b) = \\ln a + \\ln b$'}</Latex> ❌</p>
            <p><strong>VRAI :</strong> <Latex>{'$\\ln(a \\times b) = \\ln a + \\ln b$'}</Latex> ✓</p>
            <p style={{ marginTop: '10px' }}>Le logarithme transforme les <strong>produits</strong> en sommes, pas les sommes !</p>
        </ErreurBox>

        <h2>III. Étude de la fonction ln</h2>

        <h3>1. Dérivée</h3>
        <ReteniBox>
            <p style={{ fontSize: '1.2em', textAlign: 'center' }}>
                <Latex>{"$(\\ln x)' = \\frac{1}{x}$"}</Latex> pour <Latex>{'$x > 0$'}</Latex>
            </p>
            <p style={{ marginTop: '15px', textAlign: 'center' }}>
                <Latex>{"$(\\ln u)' = \\frac{u'}{u}$"}</Latex> (formule composée)
            </p>
        </ReteniBox>

        <h3>2. Variations et limites</h3>
        <ul style={{ lineHeight: '2.2', marginLeft: '20px' }}>
            <li><strong>Domaine :</strong> <Latex>{'$]0, +\\infty[$'}</Latex></li>
            <li><strong>Dérivée :</strong> <Latex>{"$\\frac{1}{x} > 0$"}</Latex> sur <Latex>{'$]0, +\\infty[$'}</Latex></li>
            <li>⟹ <Latex>{'$\\ln$'}</Latex> est <strong>strictement croissante</strong> sur <Latex>{'$]0, +\\infty[$'}</Latex></li>
        </ul>

        <ReteniBox title="Limites à connaître">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', textAlign: 'center' }}>
                <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '8px' }}>
                    <Latex>{'$\\displaystyle\\lim_{x \\to 0^+} \\ln x = -\\infty$'}</Latex>
                </div>
                <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '8px' }}>
                    <Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} \\ln x = +\\infty$'}</Latex>
                </div>
            </div>
        </ReteniBox>

        <h3>3. Signe du logarithme</h3>
        <ReteniBox>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                <li><Latex>{'$\\ln x > 0 \\Leftrightarrow x > 1$'}</Latex></li>
                <li><Latex>{'$\\ln x = 0 \\Leftrightarrow x = 1$'}</Latex></li>
                <li><Latex>{'$\\ln x < 0 \\Leftrightarrow 0 < x < 1$'}</Latex></li>
            </ul>
        </ReteniBox>

        <h2>IV. Croissances comparées</h2>

        <Theorem title="Croissances comparées (ln vs puissances)">
            <p>Pour tout entier <Latex>{'$n \\geq 1$'}</Latex> :</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '15px' }}>
                <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '8px', textAlign: 'center' }}>
                    <Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} \\frac{\\ln x}{x^n} = 0$'}</Latex>
                    <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>La puissance l'emporte</p>
                </div>
                <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '8px', textAlign: 'center' }}>
                    <Latex>{'$\\displaystyle\\lim_{x \\to 0^+} x^n \\ln x = 0$'}</Latex>
                    <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>La puissance l'emporte</p>
                </div>
            </div>
        </Theorem>

        <ReteniBox title="À retenir pour le Bac">
            <p style={{ fontSize: '1.1em' }}>En <Latex>{'$+\\infty$'}</Latex>, la puissance <strong>domine</strong> le logarithme :</p>
            <p style={{ textAlign: 'center', margin: '10px 0' }}><Latex>{'$\\ln x \\ll x^n$'}</Latex></p>
        </ReteniBox>

        <h2>V. Équations et inéquations</h2>

        <ReteniBox title="Méthodes de résolution">
            <p><strong>Équation <Latex>{'$\\ln A = \\ln B$'}</Latex> :</strong></p>
            <ol style={{ lineHeight: '2' }}>
                <li>Conditions : <Latex>{'$A > 0$'}</Latex> et <Latex>{'$B > 0$'}</Latex></li>
                <li>Équivalent à : <Latex>{'$A = B$'}</Latex></li>
                <li>Vérifier que les solutions respectent les conditions</li>
            </ol>
            <p style={{ marginTop: '15px' }}><strong>Inéquation <Latex>{'$\\ln A < \\ln B$'}</Latex> :</strong></p>
            <ol style={{ lineHeight: '2' }}>
                <li>Conditions : <Latex>{'$A > 0$'}</Latex> et <Latex>{'$B > 0$'}</Latex></li>
                <li>Comme <Latex>{'$\\ln$'}</Latex> est croissante : <Latex>{'$A < B$'}</Latex></li>
            </ol>
        </ReteniBox>

        <h2>VI. Logarithme décimal</h2>

        <Definition term="Logarithme décimal">
            <p><Latex>{'$\\log x = \\frac{\\ln x}{\\ln 10}$'}</Latex></p>
            <p>Ainsi <Latex>{'$\\log 10 = 1$'}</Latex>, <Latex>{'$\\log 100 = 2$'}</Latex>, <Latex>{'$\\log 1000 = 3$'}</Latex>, etc.</p>
        </Definition>
    </>
);

export const logarithmeExercises = [
    {
        number: 1,
        difficulty: 'simple',
        useLaTeX: true,
        content: 'Simplifier les expressions suivantes :',
        questions: [
            '$\\ln e^5$',
            '$e^{2\\ln 3}$',
            '$\\ln\\sqrt{e}$',
            '$\\ln\\left(\\frac{e^3}{e^2}\\right)$'
        ]
    },
    {
        number: 2,
        difficulty: 'moyen',
        useLaTeX: true,
        content: 'Résoudre les équations suivantes :',
        questions: [
            '$\\ln(2x - 1) = 0$',
            '$\\ln x + \\ln(x - 2) = \\ln 3$',
            '$e^{2x} - 3e^x + 2 = 0$'
        ]
    },
    {
        number: 3,
        difficulty: 'bac',
        useLaTeX: true,
        content: 'Soit $f(x) = x - 1 - \\ln x$ définie sur $]0, +\\infty[$.',
        questions: [
            'Calculer les limites de $f$ en $0^+$ et en $+\\infty$.',
            'Étudier les variations de $f$.',
            'Montrer que $f(x) \\geq 0$ pour tout $x > 0$.',
            'En déduire que $\\ln x \\leq x - 1$ pour tout $x > 0$.'
        ]
    }
];

export const logarithmeQuiz = [
    {
        question: '$\\ln(ab) = $',
        options: ['$\\ln a \\times \\ln b$', '$\\ln a + \\ln b$', '$\\ln a - \\ln b$', '$\\frac{\\ln a}{\\ln b}$'],
        correctAnswer: 1,
        explanation: 'Le logarithme transforme les produits en sommes.',
        useLaTeX: true
    },
    {
        question: '$\\displaystyle\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = $',
        options: ['$1$', '$+\\infty$', '$0$', '$-\\infty$'],
        correctAnswer: 2,
        explanation: 'Par croissances comparées, la puissance domine le logarithme.',
        useLaTeX: true
    },
    {
        question: 'Si $\\ln x < 0$, alors :',
        options: ['$x < 0$', '$x > 1$', '$0 < x < 1$', '$x = 1$'],
        correctAnswer: 2,
        explanation: '$\\ln x < 0$ signifie que $x$ est entre $0$ et $1$.',
        useLaTeX: true
    }
];
