
export const solutionsData = {
    ex1: {
        title: "Exercice 1: Suites Numériques",
        questions: [
            {
                id: "1.a",
                question: "1. a. Montrer que $(\\forall n \\in \\mathbb{N}); u_n > 4$.",
                answer: [
                    "Raisonnement par récurrence.",
                    "**Initialisation:** Pour $n=0$, $u_0 = \\frac{9}{2} = 4.5$. Donc $u_0 > 4$. La proposition est vraie pour $n=0$.",
                    "**Hérédité:** Supposons que $u_n > 4$ et montrons que $u_{n+1} > 4$.",
                    "Calculons $u_{n+1} - 4$:",
                    "$u_{n+1} - 4 = \\frac{10u_n - 16}{u_n + 2} - 4 = \\frac{10u_n - 16 - 4(u_n+2)}{u_n+2}$",
                    "$= \\frac{10u_n - 16 - 4u_n - 8}{u_n+2} = \\frac{6u_n - 24}{u_n+2} = \\frac{6(u_n - 4)}{u_n+2}$",
                    "Or, d'après l'hypothèse de récurrence, $u_n > 4$, donc $u_n - 4 > 0$ et $u_n + 2 > 0$.",
                    "Ainsi, $\\frac{6(u_n-4)}{u_n+2} > 0$, soit $u_{n+1} > 4$.",
                    "**Conclusion:** $\\forall n \\in \\mathbb{N}, u_n > 4$."
                ],
                tip: "Utilisez la récurrence: Initialisation -> Hérédité -> Conclusion."
            },
            {
                id: "1.b",
                question: "1. b. Etudier la monotonie de $(u_n)$.",
                answer: [
                    "Calculons $u_{n+1} - u_n$:",
                    "$u_{n+1} - u_n = \\frac{10u_n - 16}{u_n + 2} - u_n = \\frac{10u_n - 16 - u_n(u_n+2)}{u_n+2}$",
                    "$= \\frac{10u_n - 16 - u_n^2 - 2u_n}{u_n+2} = \\frac{-u_n^2 + 8u_n - 16}{u_n+2}$",
                    "Le numérateur est une identité remarquable: $-(u_n^2 - 8u_n + 16) = -(u_n - 4)^2$.",
                    "Donc $u_{n+1} - u_n = \\frac{-(u_n - 4)^2}{u_n+2}$.",
                    "Puisque $u_n > 4$, $(u_n - 4)^2 > 0$ et $u_n+2 > 0$.",
                    "Donc le quotient est strictement négatif.",
                    "La suite $(u_n)$ est donc **décroissante**."
                ],
                tip: "Signe de différence $u_{n+1} - u_n$."
            },
            {
                id: "1.c",
                question: "1. c. En déduire que la suite $(u_n)$ est convergente.",
                answer: [
                    "La suite $(u_n)$ est décroissante (d'après 1.b) et minorée par 4 (d'après 1.a).",
                    "Toute suite décroissante et minorée est convergente.",
                    "Donc $(u_n)$ converge."
                ]
            },
            {
                id: "2.a",
                question: "2. a. Calculer $v_0$.",
                answer: [
                    "On a $v_n = \\frac{u_n}{u_n - 4}$.",
                    "Pour $n=0$: $v_0 = \\frac{u_0}{u_0 - 4} = \\frac{4.5}{4.5 - 4} = \\frac{4.5}{0.5} = 9$."
                ]
            },
            {
                id: "2.b",
                question: "2. b. Montrer que $(\\forall n \\in \\mathbb{N}): v_{n+1} = \\frac{5u_n - 8}{3(u_n - 4)}$",
                answer: [
                    "$v_{n+1} = \\frac{u_{n+1}}{u_{n+1} - 4}$.",
                    "On sait que $u_{n+1} - 4 = \\frac{6(u_n - 4)}{u_n+2}$ (calculé en 1.a).",
                    "Donc $v_{n+1} = \\frac{\\frac{10u_n - 16}{u_n+2}}{\\frac{6(u_n - 4)}{u_n+2}} = \\frac{10u_n - 16}{6(u_n - 4)}$",
                    "Factorisons le numérateur par 2: $10u_n - 16 = 2(5u_n - 8)$.",
                    "$v_{n+1} = \\frac{2(5u_n - 8)}{6(u_n - 4)} = \\frac{5u_n - 8}{3(u_n - 4)}$."
                ]
            },
            {
                id: "2.c",
                question: "2. c. Déduire que $(v_n)$ est arithmétique de raison $r = \\frac{2}{3}$.",
                answer: [
                    "Calculons $v_{n+1} - v_n$:",
                    "$v_{n+1} - v_n = \\frac{5u_n - 8}{3(u_n - 4)} - \\frac{u_n}{u_n - 4}$",
                    "Même dénominateur $3(u_n - 4)$: $v_n = \\frac{3u_n}{3(u_n - 4)}$.",
                    "Différence $= \\frac{(5u_n - 8) - 3u_n}{3(u_n - 4)} = \\frac{2u_n - 8}{3(u_n - 4)}$",
                    "$= \\frac{2(u_n - 4)}{3(u_n - 4)} = \\frac{2}{3}$",
                    "La différence est constante égale à $2/3$.",
                    "Donc $(v_n)$ est une suite arithmétique de raison $r = \\frac{2}{3}$."
                ]
            },
            {
                id: "2.d",
                question: "2. d. Exprimer $v_n$ et $u_n$ en fonction de $n$.",
                answer: [
                    "**Expression de $v_n$:**",
                    "$v_n = v_0 + nr = 9 + \\frac{2}{3}n$.",
                    "**Expression de $u_n$:**",
                    "On a $v_n = \\frac{u_n}{u_n - 4} \\iff v_n(u_n - 4) = u_n \\iff v_n u_n - 4v_n = u_n$",
                    "$\\iff u_n(v_n - 1) = 4v_n \\iff u_n = \\frac{4v_n}{v_n - 1}$.",
                    "Remplaçons $v_n$: $u_n = \\frac{4(9 + \\frac{2}{3}n)}{(9 + \\frac{2}{3}n) - 1} = \\frac{36 + \\frac{8}{3}n}{8 + \\frac{2}{3}n}$",
                    "Multiplions numérateur et dénominateur par 3:",
                    "$u_n = \\frac{108 + 8n}{24 + 2n} = \\frac{54 + 4n}{12 + n}$."
                ]
            },
            {
                id: "2.e",
                question: "2. e. Calculer la limite de la suite $(u_n)$.",
                answer: [
                    "$\\lim_{n \\to +\\infty} v_n = \\lim (9 + \\frac{2}{3}n) = +\\infty$.",
                    "$\\lim_{n \\to +\\infty} u_n = \\lim_{v_n \\to +\\infty} \\frac{4v_n}{v_n - 1} = \\lim \\frac{4v_n}{v_n} = 4$.",
                    "Ou directement avec l'expression en $n$: $\\lim \\frac{4n}{n} = 4$."
                ]
            }
        ]
    },
    ex2: {
        title: "Exercice 2: Primitives",
        questions: [
            {
                id: "1.a",
                question: "1. Déterminer une primitive de $f_1(x) = \\frac{x+3}{(x+2)^5}$",
                answer: [
                    "On écrit $x+3 = (x+2) + 1$.",
                    "$f_1(x) = \\frac{(x+2) + 1}{(x+2)^5} = \\frac{x+2}{(x+2)^5} + \\frac{1}{(x+2)^5}$",
                    "$f_1(x) = (x+2)^{-4} + (x+2)^{-5}$.",
                    "Une primitive est de la forme $\\frac{u^{n+1}}{n+1}$.",
                    "$F_1(x) = \\frac{(x+2)^{-3}}{-3} + \\frac{(x+2)^{-4}}{-4}$",
                    "$F_1(x) = -\\frac{1}{3(x+2)^3} - \\frac{1}{4(x+2)^4}$."
                ],
                tip: "Décomposition en éléments simples."
            },
            {
                id: "1.b",
                question: "1. Déterminer une primitive de $f_2(x) = \\sin 2x - \\sin^3 x$",
                answer: [
                    "Linearisons ou utilisons les dérivées usuelles.",
                    "$\\sin 2x$: Primitive est $-\\frac{1}{2}\\cos 2x$.",
                    "$\\sin^3 x$: On écrit $\\sin^3 x = \\sin x (1 - \\cos^2 x) = \\sin x - \\sin x \\cos^2 x$.",
                    "Primitive de $\\sin x$ est $-\\cos x$.",
                    "Primitive de $-\\sin x \\cos^2 x$ (forme $u' u^2$ avec $u=\\cos x$) est $\\frac{1}{3}\\cos^3 x$.",
                    "Donc primitive de $\\sin^3 x$ est $-\\cos x + \\frac{1}{3}\\cos^3 x$.",
                    "Globalement: $F_2(x) = -\\frac{1}{2}\\cos 2x - (-\\cos x + \\frac{1}{3}\\cos^3 x)$",
                    "$F_2(x) = -\\frac{1}{2}\\cos 2x + \\cos x - \\frac{1}{3}\\cos^3 x$."
                ]
            },
            {
                id: "1.c",
                question: "1. Déterminer primitive de $f_3(x) = \\frac{x+2}{\\sqrt{x^2+4x}}$",
                answer: [
                    "Posons $u(x) = x^2 + 4x$. Alors $u'(x) = 2x + 4 = 2(x+2)$.",
                    "Le numérateur est $\\frac{1}{2} u'(x)$.",
                    "$f_3(x) = \\frac{1}{2} \\frac{u'}{\\sqrt{u}}$.",
                    "Primitive de $\\frac{u'}{\\sqrt{u}}$ est $2\\sqrt{u}$.",
                    "Donc $F_3(x) = \\frac{1}{2} (2\\sqrt{x^2+4x}) = \\sqrt{x^2+4x}$."
                ]
            },
            {
                id: "2.1",
                question: "2. 1. Déterminer $a$ et $b$ tels que $f(x) = \\frac{a}{(x-1)^2} + \\frac{b}{(x+1)^2}$ pour $f(x) = \\frac{4x}{(x^2-1)^2}$.",
                answer: [
                    "Misons au même dénominateur:",
                    "$\\frac{a(x+1)^2 + b(x-1)^2}{(x^2-1)^2} = \\frac{a(x^2+2x+1) + b(x^2-2x+1)}{(x^2-1)^2}$",
                    "$= \\frac{(a+b)x^2 + (2a-2b)x + (a+b)}{(x^2-1)^2}$.",
                    "Par identification avec $4x$:",
                    "1. $a+b = 0 \\implies b = -a$",
                    "2. $2a - 2b = 4 \\implies 2a - 2(-a) = 4 \\implies 4a = 4 \\implies a = 1$.",
                    "Donc $b = -1$.",
                    "On a $f(x) = \\frac{1}{(x-1)^2} - \\frac{1}{(x+1)^2}$."
                ]
            },
            {
                id: "2.2",
                question: "2. 2. Trouver $F$ telle que $F(0)=1$.",
                answer: [
                    "$f(x) = (x-1)^{-2} - (x+1)^{-2}$.",
                    "Primitive: $F(x) = \\frac{(x-1)^{-1}}{-1} - \\frac{(x+1)^{-1}}{-1} + C$",
                    "$F(x) = -\\frac{1}{x-1} + \\frac{1}{x+1} + C$.",
                    "Condition $F(0) = 1$:",
                    "$F(0) = -\\frac{1}{-1} + \\frac{1}{1} + C = 1 + 1 + C = 2 + C$.",
                    "$2 + C = 1 \\implies C = -1$.",
                    "Donc $F(x) = \\frac{1}{x+1} - \\frac{1}{x-1} - 1$."
                ]
            }
        ]
    },
    ex3: {
        title: "Exercice 3: Étude de Fonction",
        questions: [
            {
                id: "3.1",
                question: "1. Vérifier que $D_f = [0, 1[ \\cup ]1, +\\infty[$.",
                answer: [
                    "$f(x) = \\frac{x}{\\sqrt{x}-1}$.",
                    "Conditions: $x \\ge 0$ (racine) et $\\sqrt{x} - 1 \\neq 0$.",
                    "$\\sqrt{x} \\neq 1 \\implies x \\neq 1$.",
                    "Donc $D_f = [0, 1[ \\cup ]1, +\\infty[$."
                ]
            },
            {
                id: "3.2",
                question: "2. Calculer $\\lim_{x \\to 1^+} f(x)$ et $\\lim_{x \\to 1^-} f(x)$. Conclure.",
                answer: [
                    "$\\lim_{x \\to 1} x = 1$.",
                    "Quand $x \\to 1^+$, $\\sqrt{x} > 1$, donc $\\sqrt{x}-1 \\to 0^+$. $\\lim = +\\infty$.",
                    "Quand $x \\to 1^-$, $\\sqrt{x} < 1$, donc $\\sqrt{x}-1 \\to 0^-$. $\\lim = -\\infty$.",
                    "Conclusion: La droite d'équation $x=1$ est asymptote verticale."
                ]
            },
            {
                id: "3.3",
                question: "3. Etudier la branche infinie de $(C_f)$ en $+\\infty$.",
                answer: [
                    "$\\lim_{x \\to +\\infty} f(x) = \\lim \\frac{x}{\\sqrt{x}-1} = +\\infty$.",
                    "Calculons $\\lim_{x \\to +\\infty} \\frac{f(x)}{x}$:",
                    "$\\frac{f(x)}{x} = \\frac{1}{\\sqrt{x}-1}$.",
                    "Lorsque $x \\to +\\infty$, $\\sqrt{x}-1 \\to +\\infty$, donc la limite est $0$.",
                    "Conclusion: $(C_f)$ admet une branche parabolique de direction l'axe des abscisses $(Ox)$."
                ]
            },
            {
                id: "3.4",
                question: "4. a. Montrer que $f'(x) = \\frac{\\sqrt{x}-2}{2(\\sqrt{x}-1)^2}$.",
                answer: [
                    "Dérivée de quotient $\\frac{u}{v}$:",
                    "$f'(x) = \\frac{1(\\sqrt{x}-1) - x(\\frac{1}{2\\sqrt{x}})}{(\\sqrt{x}-1)^2}$",
                    "$= \\frac{\\sqrt{x} - 1 - \\frac{\\sqrt{x}}{2}}{(\\sqrt{x}-1)^2} = \\frac{\\frac{\\sqrt{x}}{2} - 1}{(\\sqrt{x}-1)^2}$",
                    "$= \\frac{\\frac{\\sqrt{x}-2}{2}}{(\\sqrt{x}-1)^2} = \\frac{\\sqrt{x}-2}{2(\\sqrt{x}-1)^2}$."
                ]
            },
            {
                id: "3.4b",
                question: "4. b. Tableau de variations.",
                answer: [
                    "Le signe de $f'(x)$ dépend de $\\sqrt{x}-2$.",
                    "$\\sqrt{x}-2 = 0 \\iff \\sqrt{x}=2 \\iff x=4$.",
                    "$\\sqrt{x}-2 > 0 \\iff x > 4$.",
                    "Sur $[0, 1[$ et $]1, 4]$, $f'(x) < 0$.",
                    "Sur $[4, +\\infty[$, $f'(x) > 0$.",
                    "Minimum local en $x=4$: $f(4) = \\frac{4}{\\sqrt{4}-1} = \\frac{4}{1} = 4$."
                ]
            },
            {
                id: "3.5",
                question: "5. Montrer que pour tout $x \\in [4, +\\infty[, f(x) \\le x$.",
                answer: [
                    "Calculons $f(x) - x = \\frac{x}{\\sqrt{x}-1} - x = x(\\frac{1}{\\sqrt{x}-1} - 1)$.",
                    "$f(x) - x = x \\frac{1 - (\\sqrt{x}-1)}{\\sqrt{x}-1} = x \\frac{2-\\sqrt{x}}{\\sqrt{x}-1}$.",
                    "Sur $[4, +\\infty[$, $x > 0$ et $\\sqrt{x}-1 > 1 > 0$.",
                    "Le signe dépend de $2-\\sqrt{x}$.",
                    "Or $x \\ge 4 \\implies \\sqrt{x} \\ge 2 \\implies 2-\\sqrt{x} \\le 0$.",
                    "Donc $f(x) - x \\le 0$, ce qui signifie $f(x) \\le x$."
                ]
            },
            {
                id: "3.6a",
                question: "6. a. Construire $(C_f)$.",
                answer: [
                    "**Éléments du tracé:**",
                    "- Asymptote verticale: $x=1$.",
                    "- Branche parabolique de direction $(Ox)$ en $+\\infty$.",
                    "- Minimum en $(4, 4)$.",
                    "- Point $(0, 0)$ sur la courbe.",
                    "- Sur $[0, 1[$: fonction décroissante de $0$ vers $-\\infty$.",
                    "- Sur $]1, 4]$: décroissante de $+\\infty$ vers $4$.",
                    "- Sur $[4, +\\infty[$: croissante de $4$ vers $+\\infty$."
                ],
                tip: "Tracer l'asymptote x=1 en pointillés, puis placer le minimum (4,4)."
            },
            {
                id: "3.6b",
                question: "6. b. Discuter selon $m$ le nombre de solutions de $x + m = m\\sqrt{x}$.",
                answer: [
                    "Réécrivons: $x + m = m\\sqrt{x} \\iff \\frac{x}{\\sqrt{x} - 1} = m$ (en supposant $\\sqrt{x} \\neq 1$).",
                    "Wait, reformulons. L'équation est $x + m = m\\sqrt{x}$.",
                    "$x - m\\sqrt{x} + m = 0$.",
                    "Posons $t = \\sqrt{x} \\ge 0$. Alors $t^2 - mt + m = 0$.",
                    "Discriminant: $\\Delta = m^2 - 4m = m(m-4)$.",
                    "- Si $m < 0$ ou $m > 4$: $\\Delta > 0$, deux solutions pour $t$.",
                    "- Si $m = 0$: équation $t^2 = 0 \\implies t = 0$, une solution $x=0$.",
                    "- Si $m = 4$: $\\Delta = 0$, une solution double $t = 2$, donc $x = 4$.",
                    "- Si $0 < m < 4$: $\\Delta < 0$, aucune solution réelle.",
                    "Il faut aussi vérifier que $t \\ge 0$ pour les solutions."
                ]
            },
            {
                id: "3.7a",
                question: "7. a. Montrer que $g$ admet une réciproque $g^{-1}$ sur $J$.",
                answer: [
                    "Soit $g$ la restriction de $f$ à $I = ]1, 4]$.",
                    "D'après le tableau de variations, $f$ est:",
                    "- Continue sur $]1, 4]$.",
                    "- Strictement décroissante sur $]1, 4]$.",
                    "Donc $g$ est une bijection de $I = ]1, 4]$ vers $J = g(I) = [f(4), \\lim_{x \\to 1^+} f(x)[ = [4, +\\infty[$.",
                    "Ainsi $g$ admet une fonction réciproque $g^{-1}$ définie sur $J = [4, +\\infty[$."
                ]
            },
            {
                id: "3.7b",
                question: "7. b. Construire $(C_{g^{-1}})$.",
                answer: [
                    "La courbe $(C_{g^{-1}})$ est symétrique de $(C_g)$ par rapport à la droite $y = x$.",
                    "Points remarquables:",
                    "- $(4, 4)$ est sur $y=x$, donc aussi sur $(C_{g^{-1}})$.",
                    "- $(C_g)$ a asymptote verticale $x=1$, donc $(C_{g^{-1}})$ a asymptote horizontale $y=1$.",
                    "- Pour $x \\to +\\infty$ sur $(C_g)$, on a $y \\to +\\infty$, donc sur $(C_{g^{-1}})$, $x \\to +\\infty$ implique $y \\to 1^+$."
                ]
            },
            {
                id: "3.P2.1",
                question: "Partie 2: 1. Montrer que $(\\forall n \\in \\mathbb{N}); u_n \\ge 4$.",
                answer: [
                    "**Récurrence:**",
                    "**Init:** $u_0 = 5 \\ge 4$. Vrai.",
                    "**Hérédité:** Supposons $u_n \\ge 4$. On a $u_{n+1} = f(u_n)$.",
                    "Sur $[4, +\\infty[$, $f$ est croissante et $f(4) = 4$.",
                    "Donc $u_n \\ge 4 \\implies f(u_n) \\ge f(4) = 4$.",
                    "C'est-à-dire $u_{n+1} \\ge 4$.",
                    "**Conclusion:** $\\forall n \\in \\mathbb{N}, u_n \\ge 4$."
                ]
            },
            {
                id: "3.P2.2",
                question: "2. Montrer que $(u_n)$ est décroissante.",
                answer: [
                    "On a montré (Q5) que $\\forall x \\in [4, +\\infty[, f(x) \\le x$.",
                    "Donc pour tout $n$, $u_{n+1} = f(u_n) \\le u_n$.",
                    "La suite $(u_n)$ est **décroissante**."
                ]
            },
            {
                id: "3.P2.3",
                question: "3. Déduire la convergence et calculer la limite.",
                answer: [
                    "$(u_n)$ est décroissante et minorée par 4.",
                    "Donc elle converge vers une limite $\\ell \\ge 4$.",
                    "Par continuité de $f$: $\\ell = f(\\ell)$.",
                    "Résolvons $f(x) = x$ sur $[4, +\\infty[$:",
                    "$\\frac{x}{\\sqrt{x}-1} = x \\implies 1 = \\sqrt{x} - 1$ (si $x \\neq 0$)",
                    "$\\sqrt{x} = 2 \\implies x = 4$.",
                    "Donc $\\ell = 4$."
                ]
            }
        ]
    }
};
