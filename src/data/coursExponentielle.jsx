import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';

// ============================================
// CHAPITRE 5: FONCTION EXPONENTIELLE
// ============================================

export const ExponentielleCours = () => (
    <>
        <h2>I. Définition de la fonction exponentielle</h2>

        <Definition term="Fonction exponentielle">
            <p>La fonction exponentielle, notée <Latex>{'$\\exp$'}</Latex> ou <Latex>{'$x \\mapsto e^x$'}</Latex>, est l'unique fonction dérivable sur <Latex>{'$\\mathbb{R}$'}</Latex> telle que :</p>
            <ul style={{ lineHeight: '2' }}>
                <li><Latex>{"$f' = f$"}</Latex> (elle est égale à sa dérivée)</li>
                <li><Latex>{'$f(0) = 1$'}</Latex></li>
            </ul>
        </Definition>

        <h3>Le nombre e</h3>
        <ReteniBox>
            <p style={{ fontSize: '1.2em', textAlign: 'center' }}>
                <Latex>{'$e = \\exp(1) \\approx 2,718$'}</Latex>
            </p>
        </ReteniBox>

        <h2>II. Propriétés algébriques</h2>

        <ReteniBox title="Propriétés fondamentales de l'exponentielle">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Produit :</td>
                        <td style={{ padding: '12px' }}><Latex>{'$e^{a+b} = e^a \\times e^b$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Quotient :</td>
                        <td style={{ padding: '12px' }}><Latex>{'$e^{a-b} = \\frac{e^a}{e^b}$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Puissance :</td>
                        <td style={{ padding: '12px' }}><Latex>{'$(e^a)^n = e^{na}$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Inverse :</td>
                        <td style={{ padding: '12px' }}><Latex>{'$e^{-a} = \\frac{1}{e^a}$'}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Valeurs particulières :</td>
                        <td style={{ padding: '12px' }}><Latex>{'$e^0 = 1$'}</Latex>, <Latex>{'$e^1 = e$'}</Latex></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <h3>Relation avec le logarithme</h3>
        <ReteniBox>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', textAlign: 'center' }}>
                <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '8px' }}>
                    <Latex>{'$\\ln(e^x) = x$'}</Latex>
                </div>
                <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '8px' }}>
                    <Latex>{'$e^{\\ln x} = x$'}</Latex> (pour <Latex>{'$x > 0$'}</Latex>)
                </div>
            </div>
        </ReteniBox>

        <h2>III. Étude de la fonction exponentielle</h2>

        <h3>1. Dérivée</h3>
        <ReteniBox>
            <p style={{ fontSize: '1.2em', textAlign: 'center' }}>
                <Latex>{"$(e^x)' = e^x$"}</Latex>
            </p>
            <p style={{ marginTop: '15px', textAlign: 'center' }}>
                <Latex>{"$(e^u)' = u' \\cdot e^u$"}</Latex> (formule composée)
            </p>
        </ReteniBox>

        <ErreurBox title="Erreur fréquente : Oublier u'">
            <p><strong>FAUX :</strong> <Latex>{"$(e^{3x})' = e^{3x}$"}</Latex> ❌</p>
            <p><strong>VRAI :</strong> <Latex>{"$(e^{3x})' = 3e^{3x}$"}</Latex> ✓</p>
        </ErreurBox>

        <h3>2. Variations</h3>
        <ul style={{ lineHeight: '2.2', marginLeft: '20px' }}>
            <li><strong>Domaine :</strong> <Latex>{'$\\mathbb{R}$'}</Latex></li>
            <li><strong>Dérivée :</strong> <Latex>{"$(e^x)' = e^x > 0$"}</Latex> pour tout <Latex>{'$x$'}</Latex></li>
            <li>⟹ <Latex>{'$\\exp$'}</Latex> est <strong>strictement croissante</strong> sur <Latex>{'$\\mathbb{R}$'}</Latex></li>
            <li><Latex>{'$e^x > 0$'}</Latex> pour tout <Latex>{'$x \\in \\mathbb{R}$'}</Latex></li>
        </ul>

        <h3>3. Limites</h3>
        <ReteniBox title="Limites de l'exponentielle">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', textAlign: 'center' }}>
                <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '8px' }}>
                    <Latex>{'$\\displaystyle\\lim_{x \\to -\\infty} e^x = 0$'}</Latex>
                </div>
                <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '8px' }}>
                    <Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} e^x = +\\infty$'}</Latex>
                </div>
            </div>
        </ReteniBox>

        <h2>IV. Croissances comparées</h2>

        <Theorem title="L'exponentielle domine toute puissance">
            <p>Pour tout entier <Latex>{'$n \\geq 1$'}</Latex> :</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '15px' }}>
                <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '8px', textAlign: 'center' }}>
                    <Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty$'}</Latex>
                    <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>exp domine les puissances</p>
                </div>
                <div style={{ padding: '15px', background: '#f0fdf4', borderRadius: '8px', textAlign: 'center' }}>
                    <Latex>{'$\\displaystyle\\lim_{x \\to -\\infty} x^n e^x = 0$'}</Latex>
                    <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>exp tend plus vite vers 0</p>
                </div>
            </div>
        </Theorem>

        <ReteniBox title="Hiérarchie des croissances">
            <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
                <Latex>{'$\\ln x \\ll x^n \\ll e^x$'}</Latex> en <Latex>{'$+\\infty$'}</Latex>
            </p>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>L'exponentielle croît plus vite que tout polynôme</p>
        </ReteniBox>

        <h2>V. Équations et inéquations</h2>

        <ReteniBox title="Méthodes de résolution">
            <p><strong>Équation <Latex>{'$e^A = e^B$'}</Latex> :</strong></p>
            <p style={{ marginLeft: '20px' }}>Équivalent à <Latex>{'$A = B$'}</Latex> (car exp est injective)</p>

            <p style={{ marginTop: '15px' }}><strong>Équation <Latex>{'$e^A = k$'}</Latex> :</strong></p>
            <ul style={{ marginLeft: '20px' }}>
                <li>Si <Latex>{'$k > 0$'}</Latex> : <Latex>{'$A = \\ln k$'}</Latex></li>
                <li>Si <Latex>{'$k \\leq 0$'}</Latex> : pas de solution</li>
            </ul>

            <p style={{ marginTop: '15px' }}><strong>Inéquation <Latex>{'$e^A < e^B$'}</Latex> :</strong></p>
            <p style={{ marginLeft: '20px' }}>Comme exp est croissante : <Latex>{'$A < B$'}</Latex></p>
        </ReteniBox>

        <h2>VI. La fonction a^x</h2>

        <Definition term="Fonction puissance">
            <p>Pour <Latex>{'$a > 0$'}</Latex>, on définit :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <Latex>{'$a^x = e^{x \\ln a}$'}</Latex>
            </p>
        </Definition>

        <ReteniBox>
            <p><strong>Dérivée :</strong> <Latex>{"$(a^x)' = (\\ln a) \\cdot a^x$"}</Latex></p>
        </ReteniBox>
    </>
);

export const exponentielleExercises = [
    {
        number: 1,
        difficulty: 'simple',
        useLaTeX: true,
        content: 'Simplifier les expressions suivantes :',
        questions: [
            '$e^{\\ln 5}$',
            '$\\ln(e^{-3})$',
            '$e^{2\\ln 3 + \\ln 2}$',
            '$\\frac{e^{4x}}{e^{2x}}$'
        ]
    },
    {
        number: 2,
        difficulty: 'moyen',
        useLaTeX: true,
        content: 'Résoudre les équations suivantes :',
        questions: [
            '$e^{2x} = 5$',
            '$e^{2x} - 3e^x + 2 = 0$',
            '$e^x + e^{-x} = 3$'
        ]
    },
    {
        number: 3,
        difficulty: 'bac',
        useLaTeX: true,
        content: 'Soit $f(x) = (x - 1)e^{-x}$ définie sur $\\mathbb{R}$.',
        questions: [
            'Calculer les limites de $f$ en $-\\infty$ et $+\\infty$.',
            'Étudier les variations de $f$.',
            'Dresser le tableau de variations complet.',
            'Montrer que l\'équation $f(x) = 0$ admet une unique solution.'
        ]
    }
];

export const exponentielleQuiz = [
    {
        question: '$e^{a+b} = $',
        options: ['$e^a + e^b$', '$e^a \\times e^b$', '$(e^a)^b$', '$e^{ab}$'],
        correctAnswer: 1,
        explanation: 'L\'exponentielle transforme les sommes en produits.',
        useLaTeX: true
    },
    {
        question: '$\\displaystyle\\lim_{x \\to +\\infty} \\frac{x^{100}}{e^x} = $',
        options: ['$+\\infty$', '$1$', '$0$', '$100$'],
        correctAnswer: 2,
        explanation: 'L\'exponentielle domine toute puissance en $+\\infty$.',
        useLaTeX: true
    },
    {
        question: 'La dérivée de $e^{x^2}$ est :',
        options: ['$e^{x^2}$', '$2xe^{x^2}$', '$x^2e^{x^2}$', '$2e^{2x}$'],
        correctAnswer: 1,
        explanation: 'On applique $(e^u)\' = u\' e^u$ avec $u = x^2$, donc $u\' = 2x$.',
        useLaTeX: true
    }
];
