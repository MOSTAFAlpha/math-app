import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';
import { DerivationCours, derivationExercises, derivationQuiz } from './coursDerivation';
import { SuitesCours, suitesExercises, suitesQuiz } from './coursSuites';
import { LogarithmeCours, logarithmeExercises, logarithmeQuiz } from './coursLogarithme';
import { ExponentielleCours, exponentielleExercises, exponentielleQuiz } from './coursExponentielle';
import { IntegrationCours, integrationExercises, integrationQuiz } from './coursIntegration';

// ============================================
// CHAPITRE 1: LIMITES ET CONTINUITÉ
// Cours complet basé sur le programme 2Bac Sciences
// ============================================

const LimitesContinuiteCours = () => (
    <>
        <h2>I. Limite d'une fonction en un point</h2>

        <h3>1. Limite finie en un point</h3>
        <Definition term="Définition">
            <p>Soit <Latex>{'$f$'}</Latex> une fonction définie sur un intervalle <Latex>{'$I$'}</Latex> contenant <Latex>{'$a$'}</Latex> (ou privé de <Latex>{'$a$'}</Latex>).</p>
            <p>On dit que <Latex>{'$f$'}</Latex> admet pour limite <Latex>{'$\\ell$'}</Latex> quand <Latex>{'$x$'}</Latex> tend vers <Latex>{'$a$'}</Latex>, et on écrit <Latex>{'$\\displaystyle\\lim_{x \\to a} f(x) = \\ell$'}</Latex>, si :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}><Latex>{'$\\forall \\varepsilon > 0, \\exists \\delta > 0, \\forall x \\in I : |x - a| < \\delta \\Rightarrow |f(x) - \\ell| < \\varepsilon$'}</Latex></p>
        </Definition>

        <h3>2. Limite à droite et limite à gauche</h3>
        <Definition term="Limites latérales">
            <ul style={{ lineHeight: '2.2' }}>
                <li><strong>Limite à droite :</strong> <Latex>{'$\\displaystyle\\lim_{x \\to a^+} f(x) = \\ell$'}</Latex> signifie que <Latex>{'$f(x)$'}</Latex> tend vers <Latex>{'$\\ell$'}</Latex> quand <Latex>{'$x$'}</Latex> tend vers <Latex>{'$a$'}</Latex> par valeurs supérieures.</li>
                <li><strong>Limite à gauche :</strong> <Latex>{'$\\displaystyle\\lim_{x \\to a^-} f(x) = \\ell$'}</Latex> signifie que <Latex>{'$f(x)$'}</Latex> tend vers <Latex>{'$\\ell$'}</Latex> quand <Latex>{'$x$'}</Latex> tend vers <Latex>{'$a$'}</Latex> par valeurs inférieures.</li>
            </ul>
        </Definition>

        <Theorem title="Propriété">
            <Latex>{'$\\displaystyle\\lim_{x \\to a} f(x) = \\ell \\Leftrightarrow \\lim_{x \\to a^+} f(x) = \\lim_{x \\to a^-} f(x) = \\ell$'}</Latex>
        </Theorem>

        <h3>3. Limite infinie en un point</h3>
        <Definition term="Définition">
            <p>On dit que <Latex>{'$f$'}</Latex> tend vers <Latex>{'$+\\infty$'}</Latex> quand <Latex>{'$x$'}</Latex> tend vers <Latex>{'$a$'}</Latex>, et on écrit <Latex>{'$\\displaystyle\\lim_{x \\to a} f(x) = +\\infty$'}</Latex>, si :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}><Latex>{'$\\forall A > 0, \\exists \\delta > 0, \\forall x \\in I : |x - a| < \\delta \\Rightarrow f(x) > A$'}</Latex></p>
        </Definition>

        <h4>Exemples fondamentaux :</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', margin: '20px 0' }}>
            <div style={{ padding: '15px', background: '#f8fafc', borderRadius: '8px' }}>
                <Latex>{'$\\displaystyle\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$'}</Latex>
            </div>
            <div style={{ padding: '15px', background: '#f8fafc', borderRadius: '8px' }}>
                <Latex>{'$\\displaystyle\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$'}</Latex>
            </div>
            <div style={{ padding: '15px', background: '#f8fafc', borderRadius: '8px' }}>
                <Latex>{'$\\displaystyle\\lim_{x \\to 0} \\frac{1}{x^2} = +\\infty$'}</Latex>
            </div>
            <div style={{ padding: '15px', background: '#f8fafc', borderRadius: '8px' }}>
                <Latex>{'$\\displaystyle\\lim_{x \\to 0^+} \\ln x = -\\infty$'}</Latex>
            </div>
        </div>

        <h2>II. Limite d'une fonction à l'infini</h2>

        <h3>1. Limite finie à l'infini</h3>
        <Definition term="Définition">
            <p>On dit que <Latex>{'$f$'}</Latex> admet pour limite <Latex>{'$\\ell$'}</Latex> quand <Latex>{'$x$'}</Latex> tend vers <Latex>{'$+\\infty$'}</Latex>, et on écrit <Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} f(x) = \\ell$'}</Latex>, si :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}><Latex>{'$\\forall \\varepsilon > 0, \\exists A > 0, \\forall x > A : |f(x) - \\ell| < \\varepsilon$'}</Latex></p>
        </Definition>

        <h4>Interprétation graphique :</h4>
        <p>La droite d'équation <Latex>{'$y = \\ell$'}</Latex> est une <strong>asymptote horizontale</strong> à la courbe de <Latex>{'$f$'}</Latex>.</p>

        <h3>2. Limite infinie à l'infini</h3>
        <ReteniBox title="Limites de référence à connaître">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} x^n = +\\infty$'}</Latex></td>
                        <td style={{ padding: '10px' }}>pour tout <Latex>{'$n \\in \\mathbb{N}^*$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} \\sqrt{x} = +\\infty$'}</Latex></td>
                        <td style={{ padding: '10px' }}></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} \\frac{1}{x^n} = 0$'}</Latex></td>
                        <td style={{ padding: '10px' }}>pour tout <Latex>{'$n \\in \\mathbb{N}^*$'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{'$\\displaystyle\\lim_{x \\to -\\infty} x^n = \\begin{cases} +\\infty & \\text{si } n \\text{ pair} \\\\ -\\infty & \\text{si } n \\text{ impair} \\end{cases}$'}</Latex></td>
                        <td style={{ padding: '10px' }}></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <h2>III. Opérations sur les limites</h2>

        <h3>1. Limite d'une somme</h3>
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', margin: '20px 0' }}>
                <thead>
                    <tr style={{ background: '#e0e7ff' }}>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\lim f$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\ell$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\ell$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\ell$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$-\\infty$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\lim g$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{"$\\ell'$"}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$-\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$-\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe', color: '#dc2626', fontWeight: 'bold' }}><Latex>{'$-\\infty$'}</Latex></td>
                    </tr>
                    <tr style={{ background: '#f0fdf4' }}>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\lim (f+g)$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{"$\\ell + \\ell'$"}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$-\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$-\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe', background: '#fef2f2', color: '#dc2626', fontWeight: 'bold' }}>F.I.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <ErreurBox title="Formes indéterminées (F.I.)">
            <p>Les formes suivantes nécessitent une étude particulière :</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '10px', textAlign: 'center' }}>
                <div style={{ padding: '10px', background: '#fff7ed', borderRadius: '5px' }}><Latex>{'$+\\infty - \\infty$'}</Latex></div>
                <div style={{ padding: '10px', background: '#fff7ed', borderRadius: '5px' }}><Latex>{'$\\frac{0}{0}$'}</Latex></div>
                <div style={{ padding: '10px', background: '#fff7ed', borderRadius: '5px' }}><Latex>{'$\\frac{\\infty}{\\infty}$'}</Latex></div>
                <div style={{ padding: '10px', background: '#fff7ed', borderRadius: '5px' }}><Latex>{'$0 \\times \\infty$'}</Latex></div>
            </div>
        </ErreurBox>

        <h3>2. Limite d'un produit</h3>
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', margin: '20px 0' }}>
                <thead>
                    <tr style={{ background: '#e0e7ff' }}>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\lim f$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\ell$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\ell > 0$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\ell < 0$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></th>
                        <th style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$0$'}</Latex></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\lim g$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{"$\\ell'$"}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\pm\\infty$'}</Latex></td>
                    </tr>
                    <tr style={{ background: '#f0fdf4' }}>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$\\lim (f \\times g)$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{"$\\ell \\times \\ell'$"}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$-\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe' }}><Latex>{'$+\\infty$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #c7d2fe', background: '#fef2f2', color: '#dc2626', fontWeight: 'bold' }}>F.I.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>3. Limite d'un quotient</h3>
        <ReteniBox>
            <p>Si <Latex>{'$\\displaystyle\\lim_{x \\to a} g(x) = \\ell \\neq 0$'}</Latex>, alors :</p>
            <p style={{ textAlign: 'center' }}><Latex>{'$\\displaystyle\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\displaystyle\\lim_{x \\to a} f(x)}{\\ell}$'}</Latex></p>
        </ReteniBox>

        <h2>IV. Limites des fonctions polynômes et rationnelles</h2>

        <Theorem title="Théorème fondamental">
            <p><strong>Pour une fonction polynôme</strong> <Latex>{'$P(x) = a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_0$'}</Latex> :</p>
            <p style={{ textAlign: 'center', margin: '10px 0' }}><Latex>{'$\\displaystyle\\lim_{x \\to \\pm\\infty} P(x) = \\lim_{x \\to \\pm\\infty} a_n x^n$'}</Latex></p>
            <p><strong>Pour une fonction rationnelle</strong> <Latex>{'$\\frac{P(x)}{Q(x)}$'}</Latex> :</p>
            <p style={{ textAlign: 'center', margin: '10px 0' }}><Latex>{'$\\displaystyle\\lim_{x \\to \\pm\\infty} \\frac{P(x)}{Q(x)} = \\lim_{x \\to \\pm\\infty} \\frac{a_n x^n}{b_m x^m}$'}</Latex></p>
        </Theorem>

        <h4>Exemple :</h4>
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', margin: '15px 0' }}>
            <p><Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} \\frac{3x^3 - 2x^2 + 1}{2x^3 + x - 5} = \\lim_{x \\to +\\infty} \\frac{3x^3}{2x^3} = \\frac{3}{2}$'}</Latex></p>
        </div>

        <h2>V. Limites et fonctions trigonométriques</h2>

        <ReteniBox title="Limites trigonométriques fondamentales">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                    <p><Latex>{'$\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$'}</Latex></p>
                </div>
                <div>
                    <p><Latex>{'$\\displaystyle\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$'}</Latex></p>
                </div>
                <div>
                    <p><Latex>{'$\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$'}</Latex></p>
                </div>
                <div>
                    <p><Latex>{'$\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$'}</Latex></p>
                </div>
            </div>
        </ReteniBox>

        <h2>VI. Continuité</h2>

        <h3>1. Définition</h3>
        <Definition term="Fonction continue en un point">
            <p>On dit que <Latex>{'$f$'}</Latex> est <strong>continue en</strong> <Latex>{'$a$'}</Latex> si :</p>
            <ol>
                <li><Latex>{'$f$'}</Latex> est définie en <Latex>{'$a$'}</Latex></li>
                <li><Latex>{'$\\displaystyle\\lim_{x \\to a} f(x)$'}</Latex> existe</li>
                <li><Latex>{'$\\displaystyle\\lim_{x \\to a} f(x) = f(a)$'}</Latex></li>
            </ol>
        </Definition>

        <h3>2. Prolongement par continuité</h3>
        <Definition term="Prolongement par continuité">
            <p>Si <Latex>{'$\\displaystyle\\lim_{x \\to a} f(x) = \\ell$'}</Latex> existe mais <Latex>{'$f(a)$'}</Latex> n'est pas définie, on peut prolonger <Latex>{'$f$'}</Latex> par continuité en posant <Latex>{'$f(a) = \\ell$'}</Latex>.</p>
        </Definition>

        <h3>3. Théorème des valeurs intermédiaires</h3>
        <Theorem title="Théorème des valeurs intermédiaires (TVI)">
            <p>Si <Latex>{'$f$'}</Latex> est <strong>continue</strong> sur <Latex>{'$[a, b]$'}</Latex>, alors pour tout réel <Latex>{'$k$'}</Latex> compris entre <Latex>{'$f(a)$'}</Latex> et <Latex>{'$f(b)$'}</Latex>, il existe au moins un <Latex>{'$c \\in [a, b]$'}</Latex> tel que <Latex>{'$f(c) = k$'}</Latex>.</p>
        </Theorem>

        <Theorem title="Corollaire (Théorème de bijection)">
            <p>Si <Latex>{'$f$'}</Latex> est <strong>continue et strictement monotone</strong> sur <Latex>{'$[a, b]$'}</Latex>, alors pour tout <Latex>{'$k$'}</Latex> compris entre <Latex>{'$f(a)$'}</Latex> et <Latex>{'$f(b)$'}</Latex>, l'équation <Latex>{'$f(x) = k$'}</Latex> admet <strong>une unique solution</strong> dans <Latex>{'$[a, b]$'}</Latex>.</p>
        </Theorem>

        <ReteniBox title="Application : Démontrer l'existence d'une solution">
            <ol style={{ lineHeight: '2' }}>
                <li>Vérifier que <Latex>{'$f$'}</Latex> est continue sur <Latex>{'$[a, b]$'}</Latex></li>
                <li>Calculer <Latex>{'$f(a)$'}</Latex> et <Latex>{'$f(b)$'}</Latex></li>
                <li>Vérifier que <Latex>{'$k$'}</Latex> est compris entre <Latex>{'$f(a)$'}</Latex> et <Latex>{'$f(b)$'}</Latex></li>
                <li>Conclure par le TVI qu'il existe <Latex>{'$c \\in [a, b]$'}</Latex> tel que <Latex>{'$f(c) = k$'}</Latex></li>
            </ol>
        </ReteniBox>

        <h2>VII. Asymptotes</h2>

        <h3>1. Asymptote horizontale</h3>
        <p>Si <Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} f(x) = b$'}</Latex> ou <Latex>{'$\\displaystyle\\lim_{x \\to -\\infty} f(x) = b$'}</Latex>, alors la droite <Latex>{'$y = b$'}</Latex> est <strong>asymptote horizontale</strong>.</p>

        <h3>2. Asymptote verticale</h3>
        <p>Si <Latex>{'$\\displaystyle\\lim_{x \\to a^+} f(x) = \\pm\\infty$'}</Latex> ou <Latex>{'$\\displaystyle\\lim_{x \\to a^-} f(x) = \\pm\\infty$'}</Latex>, alors la droite <Latex>{'$x = a$'}</Latex> est <strong>asymptote verticale</strong>.</p>

        <h3>3. Asymptote oblique</h3>
        <Definition term="Asymptote oblique">
            <p>La droite <Latex>{'$y = ax + b$'}</Latex> est asymptote oblique à la courbe de <Latex>{'$f$'}</Latex> en <Latex>{'$+\\infty$'}</Latex> si :</p>
            <p style={{ textAlign: 'center' }}><Latex>{'$\\displaystyle\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$'}</Latex></p>
        </Definition>

        <ReteniBox title="Méthode pour trouver l'asymptote oblique">
            <ol style={{ lineHeight: '2' }}>
                <li>Calculer <Latex>{'$a = \\displaystyle\\lim_{x \\to +\\infty} \\frac{f(x)}{x}$'}</Latex></li>
                <li>Si <Latex>{'$a$'}</Latex> est fini et non nul, calculer <Latex>{'$b = \\displaystyle\\lim_{x \\to +\\infty} [f(x) - ax]$'}</Latex></li>
                <li>Si <Latex>{'$b$'}</Latex> est fini, alors <Latex>{'$y = ax + b$'}</Latex> est asymptote oblique</li>
            </ol>
        </ReteniBox>
    </>
);

// Export pour utilisation

export const mathChapters = [
    {
        id: 'limites-continuite',
        title: 'Limites et Continuité',
        subtitle: 'Cours complet - Limites, opérations, TVI et asymptotes',
        courseContent: <LimitesContinuiteCours />,
        exercises: [
            {
                number: 1,
                difficulty: 'simple',
                useLaTeX: true,
                content: 'Calculer les limites suivantes :',
                questions: [
                    '$\\displaystyle\\lim_{x \\to +\\infty} \\frac{3x^2 - x + 1}{2x^2 + 5}$',
                    '$\\displaystyle\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$',
                    '$\\displaystyle\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$',
                    '$\\displaystyle\\lim_{x \\to +\\infty} (\\sqrt{x^2 + x} - x)$'
                ]
            },
            {
                number: 2,
                difficulty: 'moyen',
                useLaTeX: true,
                content: 'Soit $f(x) = \\frac{x^2 - 1}{x - 1}$ définie sur $\\mathbb{R} \\setminus \\{1\\}$.',
                questions: [
                    'Calculer $\\displaystyle\\lim_{x \\to 1} f(x)$.',
                    'Peut-on prolonger $f$ par continuité en $1$ ?',
                    'Déterminer les asymptotes à la courbe de $f$.'
                ]
            },
            {
                number: 3,
                difficulty: 'bac',
                useLaTeX: true,
                content: 'Soit $f(x) = x^3 - 3x + 1$ définie sur $\\mathbb{R}$.',
                questions: [
                    'Calculer $f(-2)$, $f(0)$, $f(1)$ et $f(2)$.',
                    'Montrer que l\'équation $f(x) = 0$ admet exactement trois solutions.',
                    'Donner un encadrement d\'amplitude $0.5$ de chaque solution.'
                ]
            }
        ],
        quiz: [
            {
                question: 'La forme $\\frac{0}{0}$ est :',
                options: ['Toujours égale à 0', 'Toujours égale à 1', 'Une forme indéterminée', 'N\'existe pas'],
                correctAnswer: 2,
                explanation: 'La forme $\\frac{0}{0}$ est une forme indéterminée qui nécessite une étude particulière.',
                useLaTeX: true
            },
            {
                question: '$\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x} = $',
                options: ['$0$', '$1$', '$+\\infty$', 'N\'existe pas'],
                correctAnswer: 1,
                explanation: 'C\'est une limite fondamentale à connaître.',
                useLaTeX: true
            },
            {
                question: 'Le TVI s\'applique aux fonctions :',
                options: ['Dérivables', 'Continues', 'Monotones', 'Bornées'],
                correctAnswer: 1,
                explanation: 'Le Théorème des Valeurs Intermédiaires s\'applique aux fonctions continues.',
                useLaTeX: false
            }
        ],
        pdfCorrige: null,
        pdfResume: null
    },
    {
        id: 'derivation',
        title: 'Dérivation',
        subtitle: 'Nombre dérivé, tangente et fonctions dérivées',
        courseContent: <DerivationCours />,
        exercises: derivationExercises,
        quiz: derivationQuiz,
        pdfCorrige: null,
        pdfResume: null
    },
    {
        id: 'suites-numeriques',
        title: 'Suites Numériques',
        subtitle: 'Récurrence, monotonie et convergence',
        courseContent: <SuitesCours />,
        exercises: suitesExercises,
        quiz: suitesQuiz,
        pdfCorrige: null,
        pdfResume: null
    },
    {
        id: 'logarithme',
        title: 'Fonction Logarithme',
        subtitle: 'Logarithme népérien et propriétés',
        courseContent: <LogarithmeCours />,
        exercises: logarithmeExercises,
        quiz: logarithmeQuiz,
        pdfCorrige: null,
        pdfResume: null
    },
    {
        id: 'exponentielle',
        title: 'Fonction Exponentielle',
        subtitle: 'Exponentielle et croissances comparées',
        courseContent: <ExponentielleCours />,
        exercises: exponentielleExercises,
        quiz: exponentielleQuiz,
        pdfCorrige: null,
        pdfResume: null
    },
    {
        id: 'integration',
        title: 'Primitives et Intégrales',
        subtitle: 'Calcul intégral et applications',
        courseContent: <IntegrationCours />,
        exercises: integrationExercises,
        quiz: integrationQuiz,
        pdfCorrige: null,
        pdfResume: null
    }
];
