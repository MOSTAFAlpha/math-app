import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';
import {
    OndesLumineuses, ondesLumineusesExercises, ondesLumineusesQuiz,
    TransformationsNucleaires, nucleaireExercises, nucleaireQuiz,
    Electricite, electriciteExercises, electriciteQuiz,
    Mecanique, mecaniqueExercises, mecaniqueQuiz,
    ChimieOrganique, chimieExercises, chimieQuiz
} from './coursPhysique';

/**
 * Physique-Chimie chapters for 2ème Baccalauréat
 */
export const physiqueChapters = [
    {
        id: 'ondes-mecaniques',
        title: 'Ondes Mécaniques Progressives',
        subtitle: 'Propagation, célérité et longueur d\'onde',
        courseContent: (
            <>
                <h2>I. Définitions</h2>
                <Definition term="Onde mécanique">
                    <p>
                        Une onde mécanique est la propagation d'une perturbation dans un milieu matériel,
                        sans transport de matière mais avec transport d'énergie.
                    </p>
                </Definition>

                <h3>Types d'ondes</h3>
                <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
                    <li><strong>Onde transversale :</strong> La perturbation est perpendiculaire à la direction de propagation.</li>
                    <li><strong>Onde longitudinale :</strong> La perturbation est parallèle à la direction de propagation.</li>
                </ul>

                <h2>II. Célérité d'une onde</h2>
                <FormulaBlock formula="v = \\frac{d}{\\Delta t}" name="Célérité (m/s)" />

                <p>La célérité dépend du milieu de propagation et non de la source.</p>

                <ReteniBox title="À retenir pour le Bac">
                    <p><strong>Longueur d'onde :</strong> <Latex>{'$\\lambda = v \\times T = \\frac{v}{f}$'}</Latex></p>
                    <ul style={{ marginLeft: '20px' }}>
                        <li><Latex>{'$\\lambda$'}</Latex> : longueur d'onde (m)</li>
                        <li><Latex>{'$v$'}</Latex> : célérité (m/s)</li>
                        <li><Latex>{'$T$'}</Latex> : période (s)</li>
                        <li><Latex>{'$f$'}</Latex> : fréquence (Hz)</li>
                    </ul>
                </ReteniBox>

                <ErreurBox>
                    <p><strong>Ne confondez pas :</strong></p>
                    <ul style={{ marginLeft: '20px' }}>
                        <li>La <em>célérité</em> (vitesse de propagation de l'onde)</li>
                        <li>La <em>vitesse</em> du point matériel (vitesse de déplacement vertical)</li>
                    </ul>
                </ErreurBox>

                <h2>III. Onde progressive périodique</h2>
                <Definition term="Double périodicité">
                    <p>Une onde progressive périodique présente :</p>
                    <ul style={{ marginLeft: '20px' }}>
                        <li>Une <strong>périodicité temporelle</strong> <Latex>{'$T$'}</Latex></li>
                        <li>Une <strong>périodicité spatiale</strong> <Latex>{'$\\lambda$'}</Latex></li>
                    </ul>
                </Definition>
            </>
        ),
        exercises: [
            {
                number: 1,
                difficulty: 'simple',
                useLaTeX: true,
                content: 'Une onde sonore se propage dans l\'air à la vitesse $v = 340$ m/s. La fréquence du son est $f = 440$ Hz.',
                questions: [
                    'Calculer la période $T$ de cette onde.',
                    'Calculer la longueur d\'onde $\\lambda$.'
                ]
            },
            {
                number: 2,
                difficulty: 'moyen',
                useLaTeX: true,
                content: 'Une corde tendue horizontalement est reliée à un vibreur.',
                questions: [
                    'Déterminer la longueur d\'onde.',
                    'Sachant que la célérité est $v = 2$ m/s, calculer la période et la fréquence.'
                ]
            }
        ],
        pdfCorrige: null,
        pdfResume: null,
        quiz: [
            {
                question: 'Une onde mécanique transporte :',
                options: ['De la matière', 'De l\'énergie', 'Matière et énergie', 'Rien'],
                correctAnswer: 1,
                useLaTeX: false
            },
            {
                question: 'La longueur d\'onde $\\lambda$ est :',
                options: ['$\\lambda = v + f$', '$\\lambda = v \\times f$', '$\\lambda = \\frac{v}{f}$', '$\\lambda = \\frac{f}{v}$'],
                correctAnswer: 2,
                useLaTeX: true
            }
        ]
    },
    {
        id: 'ondes-lumineuses',
        title: 'Ondes Lumineuses',
        subtitle: 'Diffraction et interférences',
        courseContent: <OndesLumineuses />,
        exercises: ondesLumineusesExercises,
        pdfCorrige: null,
        pdfResume: null,
        quiz: ondesLumineusesQuiz
    },
    {
        id: 'transformations-nucleaires',
        title: 'Transformations Nucléaires',
        subtitle: 'Radioactivité et énergie nucléaire',
        courseContent: <TransformationsNucleaires />,
        exercises: nucleaireExercises,
        pdfCorrige: null,
        pdfResume: null,
        quiz: nucleaireQuiz
    },
    {
        id: 'electricite',
        title: 'Électricité',
        subtitle: 'Dipôles RC, RL et RLC',
        courseContent: <Electricite />,
        exercises: electriciteExercises,
        pdfCorrige: null,
        pdfResume: null,
        quiz: electriciteQuiz
    },
    {
        id: 'mecanique',
        title: 'Mécanique',
        subtitle: 'Mouvement de projectile et oscillateurs',
        courseContent: <Mecanique />,
        exercises: mecaniqueExercises,
        pdfCorrige: null,
        pdfResume: null,
        quiz: mecaniqueQuiz
    },
    {
        id: 'chimie-organique',
        title: 'Chimie Organique',
        subtitle: 'Réactions en chimie organique',
        courseContent: <ChimieOrganique />,
        exercises: chimieExercises,
        pdfCorrige: null,
        pdfResume: null,
        quiz: chimieQuiz
    }
];

