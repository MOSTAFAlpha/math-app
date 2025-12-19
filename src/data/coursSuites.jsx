import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';

// ============================================
// CHAPITRE 3: SUITES NUMÉRIQUES
// ============================================

export const SuitesCours = () => (
    <>
        <h2>I. Raisonnement par récurrence</h2>

        <Definition term="Principe de récurrence">
            <p>Pour démontrer qu'une propriété <Latex>{'$P(n)$'}</Latex> est vraie pour tout entier <Latex>{'$n \\geq n_0$'}</Latex> :</p>
        </Definition>

        <ReteniBox title="Les 3 étapes de la récurrence">
            <ol style={{ lineHeight: '2.5' }}>
                <li><strong>Initialisation :</strong> Vérifier que <Latex>{'$P(n_0)$'}</Latex> est vraie</li>
                <li><strong>Hérédité :</strong> Supposer <Latex>{'$P(n)$'}</Latex> vraie pour un certain <Latex>{'$n \\geq n_0$'}</Latex> (hypothèse de récurrence) et montrer que <Latex>{'$P(n+1)$'}</Latex> est vraie</li>
                <li><strong>Conclusion :</strong> Par le principe de récurrence, <Latex>{'$P(n)$'}</Latex> est vraie pour tout <Latex>{'$n \\geq n_0$'}</Latex></li>
            </ol>
        </ReteniBox>

        <h4>Exemple type :</h4>
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <p><strong>Montrer que</strong> <Latex>{'$\\displaystyle\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$'}</Latex> <strong>pour tout</strong> <Latex>{'$n \\geq 1$'}</Latex></p>
            <ul style={{ marginTop: '15px', lineHeight: '2' }}>
                <li><strong>Init :</strong> Pour <Latex>{'$n=1$'}</Latex> : <Latex>{'$1 = \\frac{1 \\times 2}{2} = 1$'}</Latex> ✓</li>
                <li><strong>Héréd :</strong> On suppose la propriété vraie au rang <Latex>{'$n$'}</Latex>, montrons-la au rang <Latex>{'$n+1$'}</Latex></li>
            </ul>
        </div>

        <ErreurBox title="Erreur fréquente : Oublier l'initialisation">
            <p>Une récurrence sans initialisation n'est pas valide ! Même si l'hérédité est démontrée, il faut un point de départ.</p>
        </ErreurBox>

        <h2>II. Suites arithmétiques</h2>

        <Definition term="Suite arithmétique">
            <p><Latex>{'$(u_n)$'}</Latex> est arithmétique de raison <Latex>{'$r$'}</Latex> si : <Latex>{'$\\forall n \\in \\mathbb{N}, \\quad u_{n+1} = u_n + r$'}</Latex></p>
        </Definition>

        <ReteniBox title="Formules des suites arithmétiques">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px' }}><strong>Terme général :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{'$u_n = u_0 + nr = u_p + (n-p)r$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px' }}><strong>Somme des termes :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{'$S_n = u_0 + u_1 + \\cdots + u_n = (n+1) \\times \\frac{u_0 + u_n}{2}$'}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '12px' }}><strong>Somme de 1 à n :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{'$1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$'}</Latex></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <h2>III. Suites géométriques</h2>

        <Definition term="Suite géométrique">
            <p><Latex>{'$(u_n)$'}</Latex> est géométrique de raison <Latex>{'$q$'}</Latex> si : <Latex>{'$\\forall n \\in \\mathbb{N}, \\quad u_{n+1} = u_n \\times q$'}</Latex></p>
        </Definition>

        <ReteniBox title="Formules des suites géométriques">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px' }}><strong>Terme général :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{'$u_n = u_0 \\times q^n = u_p \\times q^{n-p}$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px' }}><strong>Somme (si <Latex>{'$q \\neq 1$'}</Latex>) :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{'$S_n = u_0 \\times \\frac{1 - q^{n+1}}{1 - q}$'}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '12px' }}><strong>Somme des puissances :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{'$1 + q + q^2 + \\cdots + q^n = \\frac{1 - q^{n+1}}{1 - q}$'}</Latex></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <h2>IV. Sens de variation</h2>

        <ReteniBox title="Méthodes pour étudier la monotonie">
            <p><strong>Méthode 1 :</strong> Étudier le signe de <Latex>{'$u_{n+1} - u_n$'}</Latex></p>
            <ul>
                <li><Latex>{'$u_{n+1} - u_n > 0$'}</Latex> ⟹ suite croissante</li>
                <li><Latex>{'$u_{n+1} - u_n < 0$'}</Latex> ⟹ suite décroissante</li>
            </ul>
            <p style={{ marginTop: '15px' }}><strong>Méthode 2 :</strong> Si <Latex>{'$u_n > 0$'}</Latex>, étudier <Latex>{'$\\frac{u_{n+1}}{u_n}$'}</Latex></p>
            <ul>
                <li><Latex>{'$\\frac{u_{n+1}}{u_n} > 1$'}</Latex> ⟹ suite croissante</li>
                <li><Latex>{'$\\frac{u_{n+1}}{u_n} < 1$'}</Latex> ⟹ suite décroissante</li>
            </ul>
            <p style={{ marginTop: '15px' }}><strong>Méthode 3 :</strong> Si <Latex>{'$u_n = f(n)$'}</Latex>, étudier les variations de <Latex>{'$f$'}</Latex></p>
        </ReteniBox>

        <h2>V. Limites de suites</h2>

        <h3>1. Suites de référence</h3>
        <ReteniBox title="Limites usuelles à connaître">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <p><Latex>{'$\\displaystyle\\lim_{n \\to +\\infty} n^k = +\\infty$'}</Latex> (<Latex>{'$k > 0$'}</Latex>)</p>
                    <p><Latex>{'$\\displaystyle\\lim_{n \\to +\\infty} \\frac{1}{n^k} = 0$'}</Latex> (<Latex>{'$k > 0$'}</Latex>)</p>
                    <p><Latex>{'$\\displaystyle\\lim_{n \\to +\\infty} \\sqrt{n} = +\\infty$'}</Latex></p>
                </div>
                <div>
                    <p><Latex>{'$\\displaystyle\\lim_{n \\to +\\infty} q^n = 0$'}</Latex> si <Latex>{'$|q| < 1$'}</Latex></p>
                    <p><Latex>{'$\\displaystyle\\lim_{n \\to +\\infty} q^n = +\\infty$'}</Latex> si <Latex>{'$q > 1$'}</Latex></p>
                    <p><Latex>{'$\\displaystyle\\lim_{n \\to +\\infty} \\frac{q^n}{n^k} = +\\infty$'}</Latex> si <Latex>{'$q > 1$'}</Latex></p>
                </div>
            </div>
        </ReteniBox>

        <h3>2. Théorème de convergence monotone</h3>
        <Theorem title="Théorème fondamental">
            <ul style={{ lineHeight: '2' }}>
                <li>Toute suite <strong>croissante et majorée</strong> converge</li>
                <li>Toute suite <strong>décroissante et minorée</strong> converge</li>
            </ul>
        </Theorem>

        <ErreurBox title="Attention : une suite croissante non majorée diverge !">
            <p>Suite croissante et majorée → converge</p>
            <p>Suite croissante et non majorée → diverge vers <Latex>{'$+\\infty$'}</Latex></p>
        </ErreurBox>

        <h3>3. Théorèmes comparatifs</h3>
        <Theorem title="Théorème des gendarmes">
            <p>Si <Latex>{'$v_n \\leq u_n \\leq w_n$'}</Latex> et si <Latex>{'$\\lim v_n = \\lim w_n = \\ell$'}</Latex>, alors <Latex>{'$\\lim u_n = \\ell$'}</Latex></p>
        </Theorem>

        <h2>VI. Suites arithmético-géométriques</h2>

        <Definition term="Suite arithmético-géométrique">
            <p>Une suite définie par <Latex>{'$u_{n+1} = au_n + b$'}</Latex> avec <Latex>{'$a \\neq 1$'}</Latex></p>
        </Definition>

        <ReteniBox title="Méthode de résolution">
            <ol style={{ lineHeight: '2.2' }}>
                <li>Trouver le point fixe <Latex>{'$\\ell$'}</Latex> tel que <Latex>{'$\\ell = a\\ell + b$'}</Latex>, donc <Latex>{'$\\ell = \\frac{b}{1-a}$'}</Latex></li>
                <li>Poser <Latex>{'$v_n = u_n - \\ell$'}</Latex></li>
                <li>Montrer que <Latex>{'$(v_n)$'}</Latex> est géométrique de raison <Latex>{'$a$'}</Latex></li>
                <li>En déduire <Latex>{'$v_n = v_0 \\times a^n$'}</Latex></li>
                <li>Conclure : <Latex>{'$u_n = v_n + \\ell = (u_0 - \\ell) \\times a^n + \\ell$'}</Latex></li>
            </ol>
        </ReteniBox>

        <h4>Exemple :</h4>
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <p>Soit <Latex>{'$u_{n+1} = \\frac{1}{2}u_n + 3$'}</Latex> avec <Latex>{'$u_0 = 1$'}</Latex></p>
            <ul style={{ marginTop: '10px', lineHeight: '2' }}>
                <li>Point fixe : <Latex>{'$\\ell = \\frac{3}{1-\\frac{1}{2}} = 6$'}</Latex></li>
                <li>Posons <Latex>{'$v_n = u_n - 6$'}</Latex></li>
                <li><Latex>{'$v_{n+1} = u_{n+1} - 6 = \\frac{1}{2}u_n + 3 - 6 = \\frac{1}{2}(u_n - 6) = \\frac{1}{2}v_n$'}</Latex></li>
                <li>Donc <Latex>{'$v_n = v_0 \\times \\left(\\frac{1}{2}\\right)^n = (1-6) \\times \\left(\\frac{1}{2}\\right)^n = -5 \\times \\left(\\frac{1}{2}\\right)^n$'}</Latex></li>
                <li><Latex>{'$u_n = -5 \\times \\left(\\frac{1}{2}\\right)^n + 6$'}</Latex></li>
            </ul>
        </div>
    </>
);

export const suitesExercises = [
    {
        number: 1,
        difficulty: 'simple',
        useLaTeX: true,
        content: 'Démontrer par récurrence que pour tout $n \\geq 1$ :',
        questions: [
            '$1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$',
            '$1^2 + 2^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}$'
        ]
    },
    {
        number: 2,
        difficulty: 'moyen',
        useLaTeX: true,
        content: 'Soit $(u_n)$ définie par $u_0 = 2$ et $u_{n+1} = \\frac{1}{3}u_n + 4$.',
        questions: [
            'Calculer $u_1$, $u_2$ et $u_3$.',
            'Montrer que $(u_n)$ est croissante et majorée par $6$.',
            'En déduire que $(u_n)$ converge.',
            'Déterminer l\'expression de $u_n$ en fonction de $n$.',
            'Calculer $\\lim u_n$.'
        ]
    },
    {
        number: 3,
        difficulty: 'bac',
        useLaTeX: true,
        content: 'Soit $(u_n)$ définie par $u_0 = 1$ et $u_{n+1} = \\sqrt{2 + u_n}$.',
        questions: [
            'Montrer par récurrence que $0 \\leq u_n \\leq 2$ pour tout $n$.',
            'Montrer que $(u_n)$ est croissante.',
            'En déduire que $(u_n)$ converge.',
            'Déterminer la limite de $(u_n)$.'
        ]
    }
];

export const suitesQuiz = [
    {
        question: 'La somme $1 + 2 + 3 + \\cdots + 100$ vaut :',
        options: ['$5000$', '$5050$', '$10100$', '$10000$'],
        correctAnswer: 1,
        explanation: 'On utilise $\\frac{n(n+1)}{2} = \\frac{100 \\times 101}{2} = 5050$',
        useLaTeX: true
    },
    {
        question: 'Si $|q| < 1$, alors $\\lim_{n \\to +\\infty} q^n = $',
        options: ['$1$', '$0$', '$+\\infty$', 'N\'existe pas'],
        correctAnswer: 1,
        explanation: 'Quand $|q| < 1$, les puissances de $q$ tendent vers $0$.',
        useLaTeX: true
    },
    {
        question: 'Une suite croissante et majorée est :',
        options: ['Divergente', 'Convergente', 'Périodique', 'Constante'],
        correctAnswer: 1,
        explanation: 'C\'est le théorème de convergence monotone.',
        useLaTeX: false
    }
];
