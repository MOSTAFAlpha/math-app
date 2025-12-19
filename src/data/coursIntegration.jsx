import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';

// ============================================
// CHAPITRE 6: PRIMITIVES ET INTÉGRALES
// ============================================

export const IntegrationCours = () => (
    <>
        <h2>I. Primitives</h2>

        <h3>1. Définition</h3>
        <Definition term="Primitive">
            <p>Soit <Latex>{'$f$'}</Latex> une fonction définie sur un intervalle <Latex>{'$I$'}</Latex>.</p>
            <p>Une fonction <Latex>{'$F$'}</Latex> est une <strong>primitive</strong> de <Latex>{'$f$'}</Latex> sur <Latex>{'$I$'}</Latex> si :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}><Latex>{"$F'(x) = f(x)$"}</Latex> pour tout <Latex>{'$x \\in I$'}</Latex></p>
        </Definition>

        <Theorem title="Ensemble des primitives">
            <p>Si <Latex>{'$F$'}</Latex> est une primitive de <Latex>{'$f$'}</Latex> sur <Latex>{'$I$'}</Latex>, alors l'ensemble de toutes les primitives de <Latex>{'$f$'}</Latex> est :</p>
            <p style={{ textAlign: 'center' }}><Latex>{'$\\{F + C, \\quad C \\in \\mathbb{R}\\}$'}</Latex></p>
        </Theorem>

        <h3>2. Primitives usuelles</h3>
        <ReteniBox title="Tableau des primitives usuelles">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#dcfce7' }}>
                        <th style={{ padding: '12px', border: '1px solid #16a34a', width: '40%' }}>Fonction <Latex>{'$f(x)$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #16a34a', width: '40%' }}>Primitive <Latex>{'$F(x)$'}</Latex></th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$k$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$kx$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$x^n$'}</Latex> (<Latex>{'$n \\neq -1$'}</Latex>)</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\frac{x^{n+1}}{n+1}$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\frac{1}{x}$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\ln|x|$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\frac{1}{\\sqrt{x}}$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$2\\sqrt{x}$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$e^x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$e^x$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\cos x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\sin x$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\sin x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$-\\cos x$'}</Latex></td></tr>
                </tbody>
            </table>
        </ReteniBox>

        <h3>3. Primitives des fonctions composées</h3>
        <ReteniBox title="Formules composées">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{"$u' \\cdot u^n$"}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{'$\\frac{u^{n+1}}{n+1}$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{"$\\frac{u'}{u}$"}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{'$\\ln|u|$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{"$\\frac{u'}{\\sqrt{u}}$"}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{'$2\\sqrt{u}$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{"$u' e^u$"}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{'$e^u$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{"$u' \\cos u$"}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{'$\\sin u$'}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px' }}><Latex>{"$u' \\sin u$"}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{'$-\\cos u$'}</Latex></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <h2>II. Intégrale définie</h2>

        <h3>1. Définition</h3>
        <Definition term="Intégrale définie">
            <p>Soit <Latex>{'$f$'}</Latex> une fonction continue sur <Latex>{'$[a, b]$'}</Latex> et <Latex>{'$F$'}</Latex> une primitive de <Latex>{'$f$'}</Latex>. On définit :</p>
            <p style={{ textAlign: 'center', margin: '15px 0', fontSize: '1.2em' }}>
                <Latex>{'$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$'}</Latex>
            </p>
        </Definition>

        <ReteniBox title="À retenir : L'intégrale ne dépend pas de la primitive choisie">
            <p>Si <Latex>{'$F$'}</Latex> et <Latex>{'$G$'}</Latex> sont deux primitives de <Latex>{'$f$'}</Latex>, alors <Latex>{'$F - G = C$'}</Latex> (constante), donc :</p>
            <p style={{ textAlign: 'center' }}><Latex>{'$F(b) - F(a) = G(b) - G(a)$'}</Latex></p>
        </ReteniBox>

        <h3>2. Propriétés</h3>
        <ReteniBox title="Propriétés de l'intégrale">
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
                <li><strong>Linéarité :</strong> <Latex>{'$\\int_a^b (\\alpha f + \\beta g) = \\alpha \\int_a^b f + \\beta \\int_a^b g$'}</Latex></li>
                <li><strong>Relation de Chasles :</strong> <Latex>{'$\\int_a^b f + \\int_b^c f = \\int_a^c f$'}</Latex></li>
                <li><strong>Changement de bornes :</strong> <Latex>{'$\\int_a^b f = -\\int_b^a f$'}</Latex></li>
                <li><strong>Intégrale nulle :</strong> <Latex>{'$\\int_a^a f = 0$'}</Latex></li>
            </ul>
        </ReteniBox>

        <h3>3. Positivité</h3>
        <Theorem title="Positivité de l'intégrale">
            <ul style={{ lineHeight: '2' }}>
                <li>Si <Latex>{'$f \\geq 0$'}</Latex> sur <Latex>{'$[a, b]$'}</Latex> et <Latex>{'$a < b$'}</Latex>, alors <Latex>{'$\\int_a^b f \\geq 0$'}</Latex></li>
                <li>Si <Latex>{'$f \\leq g$'}</Latex> sur <Latex>{'$[a, b]$'}</Latex> et <Latex>{'$a < b$'}</Latex>, alors <Latex>{'$\\int_a^b f \\leq \\int_a^b g$'}</Latex></li>
            </ul>
        </Theorem>

        <h2>III. Interprétation géométrique</h2>

        <Theorem title="Aire sous une courbe">
            <p>Si <Latex>{'$f$'}</Latex> est <strong>continue et positive</strong> sur <Latex>{'$[a, b]$'}</Latex>, alors :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <Latex>{'$\\int_a^b f(x)\\,dx = \\text{Aire sous la courbe entre } a \\text{ et } b$'}</Latex>
            </p>
        </Theorem>

        <ErreurBox title="Attention au signe !">
            <p>Si <Latex>{'$f < 0$'}</Latex> sur <Latex>{'$[a, b]$'}</Latex>, l'intégrale est <strong>négative</strong>.</p>
            <p>L'aire (toujours positive) est alors <Latex>{'$\\left|\\int_a^b f\\right| = -\\int_a^b f$'}</Latex></p>
        </ErreurBox>

        <h2>IV. Intégration par parties</h2>

        <Theorem title="Formule d'intégration par parties">
            <p>Si <Latex>{'$u$'}</Latex> et <Latex>{'$v$'}</Latex> sont dérivables sur <Latex>{'$[a, b]$'}</Latex> :</p>
            <p style={{ textAlign: 'center', margin: '15px 0', fontSize: '1.2em' }}>
                <Latex>{"$\\int_a^b u'v = [uv]_a^b - \\int_a^b uv'$"}</Latex>
            </p>
        </Theorem>

        <ReteniBox title="Méthode d'intégration par parties">
            <ol style={{ lineHeight: '2.2' }}>
                <li>Identifier <Latex>{"$u'$"}</Latex> et <Latex>{'$v$'}</Latex> dans le produit</li>
                <li>Calculer <Latex>{'$u$'}</Latex> (primitive de <Latex>{"$u'$"}</Latex>) et <Latex>{"$v'$"}</Latex></li>
                <li>Appliquer la formule : <Latex>{"$\\int u'v = [uv] - \\int uv'$"}</Latex></li>
                <li>Calculer la nouvelle intégrale</li>
            </ol>
        </ReteniBox>

        <h4>Exemple : Calculer <Latex>{'$\\int_0^1 x e^x dx$'}</Latex></h4>
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <p>On pose <Latex>{"$u' = e^x$"}</Latex> et <Latex>{'$v = x$'}</Latex></p>
            <p>Donc <Latex>{'$u = e^x$'}</Latex> et <Latex>{"$v' = 1$"}</Latex></p>
            <p><Latex>{'$\\int_0^1 xe^x dx = [xe^x]_0^1 - \\int_0^1 e^x dx$'}</Latex></p>
            <p><Latex>{'$= e - 0 - [e^x]_0^1 = e - (e - 1) = 1$'}</Latex></p>
        </div>

        <h2>V. Valeur moyenne</h2>

        <Definition term="Valeur moyenne">
            <p>La <strong>valeur moyenne</strong> de <Latex>{'$f$'}</Latex> sur <Latex>{'$[a, b]$'}</Latex> est :</p>
            <p style={{ textAlign: 'center', margin: '15px 0', fontSize: '1.2em' }}>
                <Latex>{'$\\mu = \\frac{1}{b-a} \\int_a^b f(x)\\,dx$'}</Latex>
            </p>
        </Definition>

        <ReteniBox>
            <p><strong>Interprétation :</strong> Si on remplaçait <Latex>{'$f$'}</Latex> par la fonction constante <Latex>{'$\\mu$'}</Latex>, l'aire sous la courbe serait la même.</p>
        </ReteniBox>
    </>
);

export const integrationExercises = [
    {
        number: 1,
        difficulty: 'simple',
        useLaTeX: true,
        content: 'Calculer les intégrales suivantes :',
        questions: [
            '$\\int_0^2 (3x^2 - 2x + 1)\\,dx$',
            '$\\int_1^e \\frac{1}{x}\\,dx$',
            '$\\int_0^{\\pi} \\sin x\\,dx$'
        ]
    },
    {
        number: 2,
        difficulty: 'moyen',
        useLaTeX: true,
        content: 'Calculer les intégrales suivantes (fonctions composées) :',
        questions: [
            '$\\int_0^1 2xe^{x^2}\\,dx$',
            '$\\int_1^2 \\frac{2x}{x^2 + 1}\\,dx$',
            '$\\int_0^{\\frac{\\pi}{2}} \\cos x \\sin x\\,dx$'
        ]
    },
    {
        number: 3,
        difficulty: 'bac',
        useLaTeX: true,
        content: 'Calculer par intégration par parties :',
        questions: [
            '$\\int_0^1 x e^{2x}\\,dx$',
            '$\\int_1^e x \\ln x\\,dx$',
            '$\\int_0^{\\pi} x \\cos x\\,dx$'
        ]
    }
];

export const integrationQuiz = [
    {
        question: 'Une primitive de $\\frac{1}{x}$ est :',
        options: ['$\\frac{-1}{x^2}$', '$\\ln x$', '$\\ln|x|$', '$x \\ln x$'],
        correctAnswer: 2,
        explanation: 'La primitive de $\\frac{1}{x}$ est $\\ln|x|$ (valeur absolue car définie sur $\\mathbb{R}^*$).',
        useLaTeX: true
    },
    {
        question: '$\\int_0^{\\pi} \\sin x\\,dx = $',
        options: ['$0$', '$1$', '$2$', '$\\pi$'],
        correctAnswer: 2,
        explanation: '$[-\\cos x]_0^{\\pi} = -\\cos\\pi - (-\\cos 0) = -(-1) - (-1) = 2$',
        useLaTeX: true
    },
    {
        question: 'Si $f \\geq 0$ sur $[a, b]$, alors $\\int_a^b f$ représente :',
        options: ['Le périmètre', 'L\'aire sous la courbe', 'La pente moyenne', 'Le volume'],
        correctAnswer: 1,
        explanation: 'L\'intégrale d\'une fonction positive représente l\'aire sous sa courbe.',
        useLaTeX: true
    }
];
