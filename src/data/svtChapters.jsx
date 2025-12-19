import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, Definition, InfoBox } from '../components/CourseSection';
import {
    Immunologie, immunologieExercises, immunologieQuiz,
    Geologie, geologieExercises, geologieQuiz,
    ExpressionGenetique, expressionExercises, expressionQuiz,
    CommunicationNerveuse, nerveuseExercises, nerveuseQuiz
} from './coursSVT';

/**
 * SVT (Sciences de la Vie et de la Terre) chapters for 2ème Baccalauréat
 */
export const svtChapters = [
    {
        id: 'genetique-humaine',
        title: 'Génétique Humaine',
        subtitle: 'Transmission des caractères héréditaires chez l\'Homme',
        courseContent: (
            <>
                <h2>I. Rappels de génétique</h2>

                <Definition term="Gène">
                    <p>
                        Un gène est une portion d'ADN qui code pour une protéine ou un ARN fonctionnel.
                        Chaque gène peut exister sous différentes formes appelées <strong>allèles</strong>.
                    </p>
                </Definition>

                <Definition term="Génotype et phénotype">
                    <ul style={{ marginLeft: '20px' }}>
                        <li><strong>Génotype :</strong> Ensemble des allèles portés par un individu.</li>
                        <li><strong>Phénotype :</strong> Ensemble des caractères observables d'un individu.</li>
                    </ul>
                </Definition>

                <h2>II. Hérédité autosomale</h2>
                <p>Les gènes situés sur les autosomes (chromosomes non sexuels) suivent les lois de Mendel.</p>

                <h3>1. Dominance et récessivité</h3>
                <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
                    <li><strong>Allèle dominant :</strong> S'exprime même à l'état hétérozygote.</li>
                    <li><strong>Allèle récessif :</strong> Ne s'exprime qu'à l'état homozygote.</li>
                </ul>

                <ReteniBox title="À retenir pour le Bac">
                    <p><strong>Comment rédiger un arbre généalogique :</strong></p>
                    <ol style={{ marginLeft: '20px' }}>
                        <li>Déterminer si le caractère est dominant ou récessif.</li>
                        <li>Déterminer si le gène est autosomal ou lié au sexe.</li>
                        <li>Écrire les génotypes certains puis déduire les autres.</li>
                        <li>Calculer les probabilités demandées.</li>
                    </ol>
                </ReteniBox>

                <h2>III. Hérédité liée au sexe</h2>
                <p>Certains gènes sont portés par les chromosomes sexuels X ou Y.</p>

                <InfoBox title="Maladies liées à l'X">
                    <p>Exemples : Daltonisme, hémophilie, myopathie de Duchenne.</p>
                    <p>Ces maladies touchent principalement les hommes (XY) car ils n'ont qu'un seul chromosome X.</p>
                </InfoBox>

                <ErreurBox>
                    <p><strong>Erreur fréquente :</strong> Écrire le génotype d'une femme porteuse saine comme « XX » au lieu de « X<sup>N</sup>X<sup>m</sup> » où m est l'allèle malade.</p>
                </ErreurBox>
            </>
        ),
        exercises: [
            {
                number: 1,
                difficulty: 'simple',
                useLaTeX: false,
                content: 'L\'arbre généalogique ci-dessous montre la transmission d\'une maladie génétique.',
                questions: [
                    'Cette maladie est-elle dominante ou récessive ?',
                    'Le gène est-il autosomal ou lié au sexe ?',
                    'Écrivez les génotypes de tous les individus.'
                ]
            },
            {
                number: 2,
                difficulty: 'bac',
                useLaTeX: false,
                content: 'Un couple phénotypiquement sain a un enfant atteint d\'une maladie génétique rare.',
                questions: [
                    'Que peut-on conclure sur le mode de transmission ?',
                    'Calculez la probabilité que leur prochain enfant soit atteint.'
                ]
            }
        ],
        pdfCorrige: null,
        pdfResume: null,
        quiz: [
            {
                question: 'Un individu homozygote possède :',
                options: ['Deux allèles différents', 'Deux allèles identiques', 'Un seul allèle', 'Aucun allèle'],
                correctAnswer: 1,
                useLaTeX: false
            },
            {
                question: 'Une maladie récessive liée à l\'X touche principalement :',
                options: ['Les femmes', 'Les hommes', 'Les deux sexes', 'Aucun'],
                correctAnswer: 1,
                useLaTeX: false
            }
        ]
    },
    {
        id: 'immunologie',
        title: 'Immunologie',
        subtitle: 'Le système immunitaire et ses réponses',
        courseContent: <Immunologie />,
        exercises: immunologieExercises,
        pdfCorrige: null,
        pdfResume: null,
        quiz: immunologieQuiz
    },
    {
        id: 'geologie',
        title: 'Géologie',
        subtitle: 'Tectonique des plaques et phénomènes géologiques',
        courseContent: <Geologie />,
        exercises: geologieExercises,
        pdfCorrige: null,
        pdfResume: null,
        quiz: geologieQuiz
    },
    {
        id: 'expression-genetique',
        title: 'Expression Génétique',
        subtitle: 'De l\'ADN à la protéine',
        courseContent: <ExpressionGenetique />,
        exercises: expressionExercises,
        pdfCorrige: null,
        pdfResume: null,
        quiz: expressionQuiz
    },
    {
        id: 'communication-nerveuse',
        title: 'Communication Nerveuse',
        subtitle: 'Transmission synaptique et réflexes',
        courseContent: <CommunicationNerveuse />,
        exercises: nerveuseExercises,
        pdfCorrige: null,
        pdfResume: null,
        quiz: nerveuseQuiz
    }
];

