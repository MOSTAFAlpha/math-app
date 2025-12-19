/**
 * French chapters data for 2ème Baccalauréat
 */
export const frenchChapters = [
    {
        id: 'production-ecrite',
        title: 'La Production Écrite',
        subtitle: 'Texte argumentatif, narratif et descriptif',
        courseContent: (
            <>
                <h2>Les Techniques de Production Écrite</h2>

                <h3>1. Le Texte Argumentatif</h3>
                <p>Structure d'un texte argumentatif :</p>
                <ul>
                    <li><strong>Introduction :</strong> Présentation du sujet et de la thèse</li>
                    <li><strong>Développement :</strong> Arguments + exemples (2-3 paragraphes)</li>
                    <li><strong>Conclusion :</strong> Synthèse et ouverture</li>
                </ul>

                <h4>Connecteurs logiques essentiels :</h4>
                <ul>
                    <li><strong>Addition :</strong> de plus, en outre, également, par ailleurs</li>
                    <li><strong>Opposition :</strong> cependant, toutefois, néanmoins, en revanche</li>
                    <li><strong>Cause :</strong> car, parce que, en effet, puisque</li>
                    <li><strong>Conséquence :</strong> donc, ainsi, par conséquent, c'est pourquoi</li>
                </ul>

                <h3>2. Le Texte Narratif</h3>
                <p>Éléments clés de la narration :</p>
                <ul>
                    <li>Schéma narratif : situation initiale → élément perturbateur → péripéties → dénouement → situation finale</li>
                    <li>Temps du récit : passé simple, imparfait</li>
                    <li>Point de vue : interne, externe, omniscient</li>
                </ul>

                <h3>3. Le Texte Descriptif</h3>
                <ul>
                    <li>Description physique et morale des personnages</li>
                    <li>Description des lieux (cadre spatial)</li>
                    <li>Utilisation d'adjectifs et de comparaisons</li>
                </ul>
            </>
        ),
        exercises: [
            {
                id: 1,
                title: 'Sujet type Bac',
                difficulty: 'bac',
                content: 'Sujet : "Les réseaux sociaux : avantages et inconvénients." Rédigez un texte argumentatif de 25-30 lignes.'
            }
        ],
        quiz: [
            {
                question: 'Quel connecteur exprime la conséquence ?',
                options: ['De plus', 'Cependant', 'Par conséquent', 'Car'],
                correctIndex: 2
            },
            {
                question: 'Quel temps est utilisé pour les actions principales dans un récit au passé ?',
                options: ['L\'imparfait', 'Le passé simple', 'Le passé composé', 'Le plus-que-parfait'],
                correctIndex: 1
            }
        ]
    },
    {
        id: 'oeuvres-litteraires',
        title: 'Les Œuvres Littéraires',
        subtitle: 'Études des œuvres au programme',
        courseContent: (
            <>
                <h2>Œuvres au Programme</h2>

                <h3>1. La Boîte à Merveilles (Ahmed Sefrioui)</h3>
                <p><strong>Genre :</strong> Roman autobiographique</p>
                <p><strong>Thèmes principaux :</strong></p>
                <ul>
                    <li>L'enfance et la solitude</li>
                    <li>La société marocaine traditionnelle</li>
                    <li>Le monde de l'imaginaire vs la réalité</li>
                    <li>Les traditions et les croyances</li>
                </ul>

                <h3>2. Le Dernier Jour d'un Condamné (Victor Hugo)</h3>
                <p><strong>Genre :</strong> Roman à thèse</p>
                <p><strong>Thèmes principaux :</strong></p>
                <ul>
                    <li>La peine de mort</li>
                    <li>La justice et son fonctionnement</li>
                    <li>La condition humaine</li>
                    <li>L'engagement de l'écrivain</li>
                </ul>

                <h3>3. Antigone (Jean Anouilh)</h3>
                <p><strong>Genre :</strong> Tragédie moderne</p>
                <p><strong>Thèmes principaux :</strong></p>
                <ul>
                    <li>Le conflit entre la loi divine et la loi humaine</li>
                    <li>La révolte et la résistance</li>
                    <li>Le bonheur et le devoir</li>
                    <li>La jeunesse face à l'autorité</li>
                </ul>
            </>
        ),
        exercises: [],
        quiz: [
            {
                question: 'Qui est l\'auteur de "La Boîte à Merveilles" ?',
                options: ['Victor Hugo', 'Jean Anouilh', 'Ahmed Sefrioui', 'Albert Camus'],
                correctIndex: 2
            },
            {
                question: 'Quel est le genre de "Le Dernier Jour d\'un Condamné" ?',
                options: ['Roman autobiographique', 'Roman à thèse', 'Tragédie', 'Comédie'],
                correctIndex: 1
            }
        ]
    },
    {
        id: 'figures-de-style',
        title: 'Les Figures de Style',
        subtitle: 'Métaphore, comparaison, personnification...',
        courseContent: (
            <>
                <h2>Les Principales Figures de Style</h2>

                <h3>1. Figures d'analogie</h3>
                <ul>
                    <li><strong>Comparaison :</strong> Rapprochement avec un outil (comme, tel, semblable à)
                        <br /><em>Ex : "Il est rusé comme un renard"</em></li>
                    <li><strong>Métaphore :</strong> Comparaison sans outil
                        <br /><em>Ex : "Cet homme est un renard"</em></li>
                    <li><strong>Personnification :</strong> Attribuer des caractères humains à une chose
                        <br /><em>Ex : "Le vent hurle"</em></li>
                </ul>

                <h3>2. Figures d'insistance</h3>
                <ul>
                    <li><strong>Anaphore :</strong> Répétition en début de phrase
                        <br /><em>Ex : "Moi, je travaille. Moi, je réussis."</em></li>
                    <li><strong>Hyperbole :</strong> Exagération
                        <br /><em>Ex : "Je meurs de faim"</em></li>
                    <li><strong>Gradation :</strong> Progression croissante ou décroissante
                        <br /><em>Ex : "C'est un roc, c'est un pic, c'est un cap !"</em></li>
                </ul>

                <h3>3. Figures d'opposition</h3>
                <ul>
                    <li><strong>Antithèse :</strong> Opposition de deux idées
                        <br /><em>Ex : "Je vis, je meurs"</em></li>
                    <li><strong>Oxymore :</strong> Alliance de mots contradictoires
                        <br /><em>Ex : "Une douce violence"</em></li>
                </ul>
            </>
        ),
        exercises: [],
        quiz: [
            {
                question: 'Quelle figure de style est "Le temps est un voleur" ?',
                options: ['Comparaison', 'Métaphore', 'Personnification', 'Hyperbole'],
                correctIndex: 1
            },
            {
                question: '"Je meurs de soif" est une :',
                options: ['Métaphore', 'Litote', 'Hyperbole', 'Antithèse'],
                correctIndex: 2
            }
        ]
    },
    {
        id: 'comprehension-texte',
        title: 'Compréhension de Texte',
        subtitle: 'Analyse et commentaire de textes',
        courseContent: (
            <>
                <h2>Méthodologie de la Compréhension</h2>

                <h3>1. Étapes de l'analyse</h3>
                <ul>
                    <li>Lecture globale : identifier le genre, le thème, le ton</li>
                    <li>Repérage : personnages, lieu, temps, narrateur</li>
                    <li>Analyse du vocabulaire : champs lexicaux, registres de langue</li>
                    <li>Identification des procédés littéraires</li>
                </ul>

                <h3>2. Types de questions</h3>
                <ul>
                    <li><strong>Questions de repérage :</strong> Trouver l'information dans le texte</li>
                    <li><strong>Questions de reformulation :</strong> Expliquer avec ses propres mots</li>
                    <li><strong>Questions d'interprétation :</strong> Analyser le sens profond</li>
                    <li><strong>Questions lexicales :</strong> Définir ou trouver des synonymes</li>
                </ul>

                <h3>3. Conseils pour réussir</h3>
                <ul>
                    <li>Lire attentivement les questions avant le texte</li>
                    <li>Souligner les mots-clés</li>
                    <li>Justifier toutes les réponses avec des citations</li>
                    <li>Soigner l'expression et l'orthographe</li>
                </ul>
            </>
        ),
        exercises: [],
        quiz: []
    }
];
