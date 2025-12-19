import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';

// ============================================
// CHAPITRE 2: DÉRIVATION
// ============================================

export const DerivationCours = () => (
    <>
        <h2>I. Dérivabilité</h2>

        <h3>1. Nombre dérivé</h3>
        <Definition term="Nombre dérivé">
            <p>Soit <Latex>{'$f$'}</Latex> une fonction définie sur un intervalle <Latex>{'$I$'}</Latex> contenant <Latex>{'$a$'}</Latex>.</p>
            <p>On dit que <Latex>{'$f$'}</Latex> est <strong>dérivable en</strong> <Latex>{'$a$'}</Latex> si la limite suivante existe et est finie :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}>
                <Latex>{'$\\displaystyle f\'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h} = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$'}</Latex>
            </p>
            <p>Ce nombre est appelé <strong>nombre dérivé</strong> de <Latex>{'$f$'}</Latex> en <Latex>{'$a$'}</Latex>.</p>
        </Definition>

        <h3>2. Interprétation géométrique</h3>
        <Theorem title="Équation de la tangente">
            <p>Le nombre dérivé <Latex>{"$f'(a)$"}</Latex> représente le <strong>coefficient directeur</strong> de la tangente à la courbe <Latex>{'$\\mathcal{C}_f$'}</Latex> au point <Latex>{'$A(a, f(a))$'}</Latex>.</p>
            <p>L'équation de la tangente en <Latex>{'$a$'}</Latex> est :</p>
            <p style={{ textAlign: 'center', margin: '15px 0', fontSize: '1.2em' }}>
                <Latex>{"$y = f'(a)(x - a) + f(a)$"}</Latex>
            </p>
        </Theorem>

        <ReteniBox title="À retenir pour le Bac">
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                <li>✓ Si <Latex>{"$f'(a) > 0$"}</Latex> : tangente croissante</li>
                <li>✓ Si <Latex>{"$f'(a) < 0$"}</Latex> : tangente décroissante</li>
                <li>✓ Si <Latex>{"$f'(a) = 0$"}</Latex> : tangente horizontale (extremum possible)</li>
            </ul>
        </ReteniBox>

        <h3>3. Dérivées à droite et à gauche</h3>
        <Definition term="Demi-tangentes">
            <ul style={{ lineHeight: '2.2' }}>
                <li><strong>Dérivée à droite :</strong> <Latex>{"$f'_d(a) = \\displaystyle\\lim_{h \\to 0^+} \\frac{f(a+h) - f(a)}{h}$"}</Latex></li>
                <li><strong>Dérivée à gauche :</strong> <Latex>{"$f'_g(a) = \\displaystyle\\lim_{h \\to 0^-} \\frac{f(a+h) - f(a)}{h}$"}</Latex></li>
            </ul>
        </Definition>

        <Theorem title="Condition de dérivabilité">
            <Latex>{"$f$"}</Latex> est dérivable en <Latex>{'$a$'}</Latex> si et seulement si <Latex>{"$f'_d(a) = f'_g(a)$"}</Latex>
        </Theorem>

        <h2>II. Fonction dérivée</h2>

        <h3>1. Définition</h3>
        <Definition term="Fonction dérivée">
            <p>Si <Latex>{'$f$'}</Latex> est dérivable en tout point de <Latex>{'$I$'}</Latex>, on définit la fonction dérivée <Latex>{"$f'$"}</Latex> par :</p>
            <p style={{ textAlign: 'center' }}><Latex>{"$f' : I \\to \\mathbb{R}, \\quad x \\mapsto f'(x)$"}</Latex></p>
        </Definition>

        <h3>2. Dérivées des fonctions usuelles</h3>
        <ReteniBox title="Tableau des dérivées usuelles">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#dcfce7' }}>
                        <th style={{ padding: '12px', border: '1px solid #16a34a', width: '35%' }}>Fonction <Latex>{'$f(x)$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #16a34a', width: '35%' }}>Dérivée <Latex>{"$f'(x)$"}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #16a34a' }}>Domaine</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$k$'}</Latex> (constante)</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$0$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\mathbb{R}$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$1$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\mathbb{R}$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$x^n$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$nx^{n-1}$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\mathbb{R}$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\frac{1}{x}$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$-\\frac{1}{x^2}$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\mathbb{R}^*$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\sqrt{x}$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\frac{1}{2\\sqrt{x}}$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\mathbb{R}^{+*}$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$e^x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$e^x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\mathbb{R}$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\ln x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\frac{1}{x}$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\mathbb{R}^{+*}$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\sin x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\cos x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\mathbb{R}$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\cos x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$-\\sin x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\mathbb{R}$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\tan x$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$'}</Latex></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$x \\neq \\frac{\\pi}{2} + k\\pi$'}</Latex></td></tr>
                </tbody>
            </table>
        </ReteniBox>

        <h2>III. Opérations sur les dérivées</h2>

        <ReteniBox title="Règles de dérivation">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px' }}><strong>Somme :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{"$(u + v)' = u' + v'$"}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px' }}><strong>Produit par scalaire :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{"$(ku)' = ku'$"}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px' }}><strong>Produit :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{"$(uv)' = u'v + uv'$"}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '12px' }}><strong>Quotient :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{"$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$"}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '12px' }}><strong>Composée :</strong></td>
                        <td style={{ padding: '12px' }}><Latex>{"$(f \\circ g)'(x) = g'(x) \\cdot f'(g(x))$"}</Latex></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <h3>Dérivées des fonctions composées</h3>
        <ReteniBox title="Formules composées à connaître">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{'$u^n$'}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{"$nu' \\cdot u^{n-1}$"}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{'$\\sqrt{u}$'}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{"$\\frac{u'}{2\\sqrt{u}}$"}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{'$\\frac{1}{u}$'}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{"$-\\frac{u'}{u^2}$"}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{'$e^u$'}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{"$u' \\cdot e^u$"}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px' }}><Latex>{'$\\ln u$'}</Latex></td>
                        <td style={{ padding: '10px' }}>→</td>
                        <td style={{ padding: '10px' }}><Latex>{"$\\frac{u'}{u}$"}</Latex></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <ErreurBox title="Erreur fréquente : Oublier la dérivée intérieure">
            <p><strong>Mauvais :</strong> <Latex>{"$(e^{2x})' = e^{2x}$"}</Latex> ❌</p>
            <p><strong>Correct :</strong> <Latex>{"$(e^{2x})' = 2e^{2x}$"}</Latex> ✓</p>
            <p style={{ marginTop: '10px' }}>Il faut toujours multiplier par la dérivée de l'argument !</p>
        </ErreurBox>

        <h2>IV. Étude des variations</h2>

        <Theorem title="Lien dérivée-variations">
            <p>Soit <Latex>{'$f$'}</Latex> une fonction dérivable sur un intervalle <Latex>{'$I$'}</Latex> :</p>
            <ul style={{ lineHeight: '2.2' }}>
                <li><Latex>{"$f'(x) > 0$"}</Latex> sur <Latex>{'$I$'}</Latex> ⟹ <Latex>{'$f$'}</Latex> est <strong>strictement croissante</strong> sur <Latex>{'$I$'}</Latex></li>
                <li><Latex>{"$f'(x) < 0$"}</Latex> sur <Latex>{'$I$'}</Latex> ⟹ <Latex>{'$f$'}</Latex> est <strong>strictement décroissante</strong> sur <Latex>{'$I$'}</Latex></li>
                <li><Latex>{"$f'(x) = 0$"}</Latex> sur <Latex>{'$I$'}</Latex> ⟹ <Latex>{'$f$'}</Latex> est <strong>constante</strong> sur <Latex>{'$I$'}</Latex></li>
            </ul>
        </Theorem>

        <ReteniBox title="Méthode d'étude des variations">
            <ol style={{ lineHeight: '2' }}>
                <li>Déterminer le domaine de définition <Latex>{'$D_f$'}</Latex></li>
                <li>Calculer <Latex>{"$f'(x)$"}</Latex></li>
                <li>Étudier le signe de <Latex>{"$f'(x)$"}</Latex></li>
                <li>Dresser le tableau de variations</li>
                <li>Calculer les limites aux bornes</li>
            </ol>
        </ReteniBox>

        <h2>V. Extremums locaux</h2>

        <Theorem title="Condition nécessaire d'extremum">
            <p>Si <Latex>{'$f$'}</Latex> admet un extremum local en <Latex>{'$a$'}</Latex> et si <Latex>{'$f$'}</Latex> est dérivable en <Latex>{'$a$'}</Latex>, alors <Latex>{"$f'(a) = 0$"}</Latex>.</p>
        </Theorem>

        <ErreurBox title="Attention : condition nécessaire mais pas suffisante !">
            <p><Latex>{"$f'(a) = 0$"}</Latex> n'implique pas forcément un extremum.</p>
            <p><strong>Exemple :</strong> <Latex>{'$f(x) = x^3$'}</Latex>, on a <Latex>{"$f'(0) = 0$"}</Latex> mais <Latex>{'$0$'}</Latex> n'est pas un extremum.</p>
        </ErreurBox>

        <Theorem title="Condition suffisante">
            <p>Si <Latex>{"$f'(a) = 0$"}</Latex> et si <Latex>{"$f'$"}</Latex> <strong>change de signe</strong> en <Latex>{'$a$'}</Latex> :</p>
            <ul>
                <li><Latex>{"$f'$"}</Latex> passe de + à − ⟹ <strong>maximum local</strong> en <Latex>{'$a$'}</Latex></li>
                <li><Latex>{"$f'$"}</Latex> passe de − à + ⟹ <strong>minimum local</strong> en <Latex>{'$a$'}</Latex></li>
            </ul>
        </Theorem>

        <h2>VI. Convexité</h2>

        <Definition term="Fonction convexe/concave">
            <ul style={{ lineHeight: '2' }}>
                <li><Latex>{'$f$'}</Latex> est <strong>convexe</strong> sur <Latex>{'$I$'}</Latex> si la courbe est "au-dessous" de ses tangentes</li>
                <li><Latex>{'$f$'}</Latex> est <strong>concave</strong> sur <Latex>{'$I$'}</Latex> si la courbe est "au-dessus" de ses tangentes</li>
            </ul>
        </Definition>

        <Theorem title="Caractérisation par la dérivée seconde">
            <ul style={{ lineHeight: '2' }}>
                <li><Latex>{"$f''(x) > 0$"}</Latex> sur <Latex>{'$I$'}</Latex> ⟹ <Latex>{'$f$'}</Latex> est <strong>convexe</strong> sur <Latex>{'$I$'}</Latex></li>
                <li><Latex>{"$f''(x) < 0$"}</Latex> sur <Latex>{'$I$'}</Latex> ⟹ <Latex>{'$f$'}</Latex> est <strong>concave</strong> sur <Latex>{'$I$'}</Latex></li>
            </ul>
        </Theorem>

        <Definition term="Point d'inflexion">
            <p>Un <strong>point d'inflexion</strong> est un point où la courbe change de convexité.</p>
            <p>Si <Latex>{"$f''$"}</Latex> change de signe en <Latex>{'$a$'}</Latex>, alors <Latex>{'$A(a, f(a))$'}</Latex> est un point d'inflexion.</p>
        </Definition>
    </>
);

export const derivationExercises = [
    {
        number: 1,
        difficulty: 'simple',
        useLaTeX: true,
        content: 'Calculer les dérivées des fonctions suivantes :',
        questions: [
            '$f(x) = 3x^4 - 2x^3 + 5x - 7$',
            '$g(x) = \\frac{2x + 1}{x - 3}$',
            '$h(x) = (2x + 1)^5$',
            '$k(x) = e^{3x^2 - 1}$'
        ]
    },
    {
        number: 2,
        difficulty: 'moyen',
        useLaTeX: true,
        content: 'Soit $f(x) = x e^{-x}$ définie sur $\\mathbb{R}$.',
        questions: [
            'Calculer $f\'(x)$.',
            'Étudier le signe de $f\'(x)$.',
            'Dresser le tableau de variations de $f$.',
            'Déterminer l\'équation de la tangente en $x = 0$.'
        ]
    },
    {
        number: 3,
        difficulty: 'bac',
        useLaTeX: true,
        content: 'Soit $f(x) = \\frac{x^2 + 1}{x - 1}$ définie sur $\\mathbb{R} \\setminus \\{1\\}$.',
        questions: [
            'Déterminer les limites de $f$ aux bornes de son domaine.',
            'Montrer que la droite $y = x + 1$ est asymptote oblique.',
            'Étudier les variations de $f$.',
            'Tracer la courbe de $f$.'
        ]
    }
];

export const derivationQuiz = [
    {
        question: 'La dérivée de $e^{2x+1}$ est :',
        options: ['$e^{2x+1}$', '$2e^{2x+1}$', '$(2x+1)e^{2x+1}$', '$e^{2x}$'],
        correctAnswer: 1,
        explanation: 'On applique la formule $(e^u)\' = u\' \\cdot e^u$ avec $u = 2x+1$, donc $u\' = 2$.',
        useLaTeX: true
    },
    {
        question: 'Si $f\'(a) = 0$ et $f\'$ passe de positif à négatif en $a$, alors :',
        options: ['$f$ a un minimum en $a$', '$f$ a un maximum en $a$', '$a$ est un point d\'inflexion', 'On ne peut pas conclure'],
        correctAnswer: 1,
        explanation: 'Quand $f\'$ passe de + à −, $f$ passe de croissante à décroissante : c\'est un maximum.',
        useLaTeX: true
    },
    {
        question: 'L\'équation de la tangente à $f$ en $a$ est :',
        options: ['$y = f\'(a)x + f(a)$', '$y = f\'(a)(x - a) + f(a)$', '$y = f(a)(x - a) + f\'(a)$', '$y = f\'(a)x$'],
        correctAnswer: 1,
        explanation: 'La formule de la tangente est $y = f\'(a)(x - a) + f(a)$.',
        useLaTeX: true
    }
];
