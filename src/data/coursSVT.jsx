import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, Definition, InfoBox, Theorem } from '../components/CourseSection';

// ============================================
// CHAPITRE 2: IMMUNOLOGIE
// ============================================

export const Immunologie = () => (
    <>
        <h2>I. Le système immunitaire</h2>

        <h3>1. Les organes lymphoïdes</h3>
        <Definition term="Organes lymphoïdes">
            <ul style={{ lineHeight: '2' }}>
                <li><strong>Organes centraux (primaires) :</strong> Moelle osseuse, thymus → Production et maturation des lymphocytes</li>
                <li><strong>Organes périphériques (secondaires) :</strong> Rate, ganglions lymphatiques → Rencontre avec les antigènes</li>
            </ul>
        </Definition>

        <h3>2. Les cellules immunitaires</h3>
        <ReteniBox title="Les acteurs de l'immunité">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#dcfce7' }}>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Cellule</th>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Rôle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><strong>Lymphocytes B</strong></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Production d'anticorps (immunité humorale)</td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><strong>Lymphocytes T4</strong></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Coordination de la réponse immunitaire (helpers)</td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><strong>Lymphocytes T8</strong></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Destruction des cellules infectées (cytotoxiques)</td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}><strong>Macrophages</strong></td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Phagocytose et présentation d'antigènes</td></tr>
                </tbody>
            </table>
        </ReteniBox>

        <h2>II. Immunité innée</h2>

        <Definition term="Réponse innée">
            <p>Première ligne de défense, rapide et non spécifique :</p>
            <ul style={{ lineHeight: '2' }}>
                <li>Barrières physiques (peau, muqueuses)</li>
                <li>Réaction inflammatoire</li>
                <li>Phagocytose</li>
            </ul>
        </Definition>

        <h3>La phagocytose</h3>
        <ReteniBox>
            <p><strong>Étapes de la phagocytose :</strong></p>
            <ol style={{ lineHeight: '2' }}>
                <li><strong>Adhésion :</strong> Le phagocyte reconnaît l'agent pathogène</li>
                <li><strong>Ingestion :</strong> Formation d'un phagosome</li>
                <li><strong>Digestion :</strong> Fusion avec un lysosome</li>
                <li><strong>Rejet :</strong> Élimination des déchets</li>
            </ol>
        </ReteniBox>

        <h2>III. Immunité adaptative</h2>

        <h3>1. Immunité humorale (anticorps)</h3>
        <Definition term="Anticorps">
            <p>Protéine (immunoglobuline) produite par les plasmocytes (LB différenciés) en réponse à un antigène spécifique.</p>
            <p>Structure : 2 chaînes lourdes + 2 chaînes légères reliées par des ponts disulfure.</p>
        </Definition>

        <ReteniBox title="Complexe immun">
            <p>Anticorps + Antigène = <strong>Complexe immun</strong></p>
            <p>Ce complexe est ensuite éliminé par phagocytose.</p>
        </ReteniBox>

        <h3>2. Immunité cellulaire</h3>
        <p>Les Lymphocytes T cytotoxiques (LTc) détruisent les cellules infectées par contact direct :</p>
        <ul style={{ lineHeight: '2', marginLeft: '20px' }}>
            <li>Reconnaissance de l'antigène présenté par le CMH</li>
            <li>Libération de <strong>perforine</strong> (perfore la membrane)</li>
            <li>Apoptose de la cellule cible</li>
        </ul>

        <h2>IV. Mémoire immunitaire</h2>

        <Definition term="Cellules mémoire">
            <p>Après une infection, des lymphocytes B et T mémoire persistent dans l'organisme.</p>
            <p>Lors d'une seconde exposition : réponse plus rapide et plus intense.</p>
        </Definition>

        <ReteniBox title="Principe de la vaccination">
            <p>Introduction d'un antigène atténué ou inactivé pour stimuler la production de cellules mémoire sans provoquer la maladie.</p>
        </ReteniBox>

        <ErreurBox>
            <p><strong>Attention :</strong> Les antibiotiques n'agissent que sur les bactéries, pas sur les virus !</p>
        </ErreurBox>
    </>
);

// ============================================
// CHAPITRE 3: GÉOLOGIE
// ============================================

export const Geologie = () => (
    <>
        <h2>I. Structure du globe terrestre</h2>

        <h3>1. Enveloppes terrestres</h3>
        <ReteniBox title="Les couches de la Terre">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#dcfce7' }}>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Couche</th>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Épaisseur</th>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Composition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Croûte continentale</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>30-70 km</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Granite</td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Croûte océanique</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>5-10 km</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Basalte</td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Manteau supérieur</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>~700 km</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Péridotite</td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Manteau inférieur</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>~2200 km</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Péridotite rigide</td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Noyau externe</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>~2300 km</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Fer liquide</td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Noyau interne</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>~1200 km</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Fer solide</td></tr>
                </tbody>
            </table>
        </ReteniBox>

        <h2>II. Tectonique des plaques</h2>

        <Definition term="Plaque lithosphérique">
            <p>Portion rigide de la lithosphère (croûte + partie supérieure du manteau) qui se déplace sur l'asthénosphère.</p>
        </Definition>

        <h3>Types de limites de plaques</h3>
        <ReteniBox>
            <ul style={{ lineHeight: '2.5' }}>
                <li><strong>Divergente :</strong> Les plaques s'écartent → dorsale océanique, création de croûte</li>
                <li><strong>Convergente :</strong> Les plaques se rapprochent → subduction ou collision</li>
                <li><strong>Transformante :</strong> Les plaques glissent → failles transformantes</li>
            </ul>
        </ReteniBox>

        <h2>III. Magmatisme et métamorphisme</h2>

        <h3>1. Le magmatisme</h3>
        <ul style={{ lineHeight: '2', marginLeft: '20px' }}>
            <li><strong>Dorsale :</strong> Basalte (refroidissement rapide du magma)</li>
            <li><strong>Subduction :</strong> Andésite, granodiorite</li>
            <li><strong>Point chaud :</strong> Volcans intra-plaque (ex: Hawaï)</li>
        </ul>

        <h3>2. Le métamorphisme</h3>
        <Definition term="Métamorphisme">
            <p>Transformation d'une roche sous l'effet de la pression et/ou de la température, sans fusion.</p>
        </Definition>

        <ReteniBox>
            <p>Exemples de roches métamorphiques :</p>
            <ul>
                <li>Argile → Schiste → Gneiss</li>
                <li>Calcaire → Marbre</li>
                <li>Granite → Gneiss</li>
            </ul>
        </ReteniBox>

        <h2>IV. Séismes et volcans</h2>

        <Definition term="Séisme">
            <p>Libération brutale d'énergie accumulée par les contraintes tectoniques :</p>
            <ul>
                <li><strong>Épicentre :</strong> Point en surface à la verticale du foyer</li>
                <li><strong>Foyer (hypocentre) :</strong> Point de rupture en profondeur</li>
            </ul>
        </Definition>
    </>
);

// ============================================
// CHAPITRE 4: EXPRESSION GÉNÉTIQUE
// ============================================

export const ExpressionGenetique = () => (
    <>
        <h2>I. Structure de l'ADN</h2>

        <Definition term="ADN">
            <p>L'ADN (Acide DésoxyriboNucléique) est une double hélice formée de deux brins complémentaires reliés par des liaisons hydrogène entre les bases azotées.</p>
        </Definition>

        <ReteniBox title="Complémentarité des bases">
            <p style={{ fontSize: '1.2em', textAlign: 'center' }}>
                <strong>A = T</strong> (2 liaisons H) &nbsp;&nbsp;&nbsp; <strong>G ≡ C</strong> (3 liaisons H)
            </p>
        </ReteniBox>

        <h2>II. La réplication de l'ADN</h2>

        <Definition term="Réplication">
            <p>Processus de duplication de l'ADN avant la division cellulaire. Elle est <strong>semi-conservative</strong> : chaque nouvelle molécule contient un brin ancien et un brin nouveau.</p>
        </Definition>

        <h3>Étapes de la réplication</h3>
        <ol style={{ lineHeight: '2.2', marginLeft: '20px' }}>
            <li><strong>Ouverture :</strong> Hélicase sépare les deux brins</li>
            <li><strong>Synthèse :</strong> ADN polymérase ajoute les nucléotides complémentaires</li>
            <li><strong>Fermeture :</strong> Formation de deux molécules d'ADN identiques</li>
        </ol>

        <h2>III. La transcription</h2>

        <Definition term="Transcription">
            <p>Synthèse d'un ARN messager (ARNm) à partir d'un brin d'ADN (brin transcrit ou matrice).</p>
            <p>Localisation : noyau</p>
        </Definition>

        <ReteniBox title="Différences ADN/ARN">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#dcfce7' }}>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}></th>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>ADN</th>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>ARN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Sucre</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Désoxyribose</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Ribose</td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Bases</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>A, T, G, C</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>A, U, G, C</td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Structure</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Double brin</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Simple brin</td></tr>
                </tbody>
            </table>
        </ReteniBox>

        <h2>IV. La traduction</h2>

        <Definition term="Traduction">
            <p>Synthèse d'une protéine à partir de l'ARNm par les ribosomes.</p>
            <p>Localisation : cytoplasme (ribosomes)</p>
        </Definition>

        <h3>Le code génétique</h3>
        <ReteniBox>
            <ul style={{ lineHeight: '2' }}>
                <li><strong>Codon :</strong> Triplet de nucléotides sur l'ARNm (ex: AUG, UUU)</li>
                <li><strong>Anticodon :</strong> Triplet complémentaire sur l'ARNt</li>
                <li><strong>Codon initiateur :</strong> AUG (Méthionine)</li>
                <li><strong>Codons STOP :</strong> UAA, UAG, UGA</li>
            </ul>
        </ReteniBox>

        <ErreurBox>
            <p><strong>Attention :</strong> Le code génétique est <strong>universel</strong> (même chez tous les êtres vivants) et <strong>dégénéré</strong> (plusieurs codons pour un même acide aminé).</p>
        </ErreurBox>
    </>
);

// ============================================
// CHAPITRE 5: COMMUNICATION NERVEUSE
// ============================================

export const CommunicationNerveuse = () => (
    <>
        <h2>I. Le neurone</h2>

        <Definition term="Neurone">
            <p>Cellule spécialisée dans la transmission de l'influx nerveux :</p>
            <ul style={{ lineHeight: '2' }}>
                <li><strong>Corps cellulaire :</strong> Contient le noyau</li>
                <li><strong>Dendrites :</strong> Reçoivent l'information</li>
                <li><strong>Axone :</strong> Transmet l'information</li>
                <li><strong>Terminaisons synaptiques :</strong> Transmettent aux cellules suivantes</li>
            </ul>
        </Definition>

        <h2>II. Le potentiel d'action</h2>

        <Definition term="Potentiel de repos">
            <p>Différence de potentiel entre l'intérieur et l'extérieur du neurone au repos : environ <strong>-70 mV</strong>.</p>
        </Definition>

        <ReteniBox title="Phases du potentiel d'action">
            <ol style={{ lineHeight: '2.5' }}>
                <li><strong>Dépolarisation :</strong> Ouverture des canaux Na⁺ → entrée de Na⁺ → le potentiel devient positif</li>
                <li><strong>Repolarisation :</strong> Fermeture des Na⁺, ouverture des K⁺ → sortie de K⁺ → retour vers -70 mV</li>
                <li><strong>Hyperpolarisation :</strong> Excès de sortie de K⁺ → potentiel inférieur à -70 mV</li>
                <li><strong>Retour au repos :</strong> Pompe Na⁺/K⁺ rétablit les concentrations</li>
            </ol>
        </ReteniBox>

        <h2>III. La synapse</h2>

        <Definition term="Synapse">
            <p>Zone de communication entre deux neurones ou entre un neurone et une cellule effectrice.</p>
        </Definition>

        <h3>Transmission synaptique</h3>
        <ReteniBox title="Étapes de la transmission">
            <ol style={{ lineHeight: '2.2' }}>
                <li>Arrivée du potentiel d'action à la terminaison synaptique</li>
                <li>Entrée de Ca²⁺ dans la terminaison</li>
                <li>Fusion des vésicules avec la membrane présynaptique</li>
                <li>Libération du <strong>neurotransmetteur</strong> dans la fente synaptique</li>
                <li>Fixation sur les récepteurs postsynaptiques</li>
                <li>Genèse d'un nouveau potentiel (PPSE ou PPSI)</li>
            </ol>
        </ReteniBox>

        <h3>Types de synapses</h3>
        <ul style={{ lineHeight: '2', marginLeft: '20px' }}>
            <li><strong>Excitatrice :</strong> Génère un PPSE (dépolarisation)</li>
            <li><strong>Inhibitrice :</strong> Génère un PPSI (hyperpolarisation)</li>
        </ul>

        <h2>IV. L'arc réflexe</h2>

        <Definition term="Réflexe">
            <p>Réponse automatique, involontaire et stéréotypée à un stimulus.</p>
        </Definition>

        <ReteniBox title="Les 5 éléments de l'arc réflexe">
            <ol style={{ lineHeight: '2' }}>
                <li><strong>Récepteur sensoriel</strong></li>
                <li><strong>Neurone sensitif</strong> (afférent)</li>
                <li><strong>Centre nerveux</strong> (moelle épinière)</li>
                <li><strong>Neurone moteur</strong> (efférent)</li>
                <li><strong>Effecteur</strong> (muscle)</li>
            </ol>
        </ReteniBox>

        <ErreurBox>
            <p><strong>Réflexe myotatique :</strong> Réflexe monosynaptique (une seule synapse dans la moelle).</p>
            <p>Exemple : réflexe rotulien</p>
        </ErreurBox>
    </>
);

// Exports des exercices et quiz
export const immunologieExercises = [
    { number: 1, difficulty: 'simple', useLaTeX: false, content: 'Compléter le tableau comparatif entre immunité innée et adaptative.', questions: ['Quelles sont les caractéristiques de l\'immunité innée ?', 'Quelles sont les caractéristiques de l\'immunité adaptative ?'] },
    { number: 2, difficulty: 'moyen', useLaTeX: false, content: 'Expliquer le mécanisme de la réponse humorale lors d\'une infection bactérienne.', questions: ['Quel est le rôle des lymphocytes B ?', 'Comment se forme un complexe immun ?'] }
];

export const immunologieQuiz = [
    { question: 'Les anticorps sont produits par :', options: ['Les lymphocytes T', 'Les plasmocytes', 'Les macrophages', 'Les cellules NK'], correctAnswer: 1, useLaTeX: false },
    { question: 'La mémoire immunitaire implique :', options: ['Une réponse plus lente', 'Une réponse plus forte et plus rapide', 'L\'absence de lymphocytes', 'La destruction des anticorps'], correctAnswer: 1, useLaTeX: false }
];

export const geologieExercises = [
    { number: 1, difficulty: 'simple', useLaTeX: false, content: 'Identifier le type de limite de plaques dans chaque situation.', questions: ['Dorsale médio-atlantique ?', 'Fosse des Mariannes ?', 'Faille de San Andreas ?'] },
    { number: 2, difficulty: 'moyen', useLaTeX: false, content: 'Expliquer la formation d\'une chaîne de montagnes par collision.', questions: ['Quelles plaques sont impliquées dans la formation de l\'Himalaya ?', 'Pourquoi n\'y a-t-il pas de subduction ?'] }
];

export const geologieQuiz = [
    { question: 'La croûte océanique est composée principalement de :', options: ['Granite', 'Basalte', 'Péridotite', 'Calcaire'], correctAnswer: 1, useLaTeX: false },
    { question: 'Une dorsale est une zone de :', options: ['Convergence', 'Divergence', 'Collision', 'Subduction'], correctAnswer: 1, useLaTeX: false }
];

export const expressionExercises = [
    { number: 1, difficulty: 'simple', useLaTeX: false, content: 'Donner la séquence d\'ARNm correspondant au brin d\'ADN suivant : 3\'-TACGCATGA-5\'', questions: ['Quelle est la séquence de l\'ARNm ?', 'Combien d\'acides aminés ce segment peut-il coder ?'] },
    { number: 2, difficulty: 'moyen', useLaTeX: false, content: 'Une mutation ponctuelle remplace un T par un C dans l\'ADN.', questions: ['Quel type de mutation est-ce ?', 'Quelles peuvent être les conséquences sur la protéine ?'] }
];

export const expressionQuiz = [
    { question: 'Le codon initiateur est :', options: ['UAA', 'UGA', 'AUG', 'UAG'], correctAnswer: 2, useLaTeX: false },
    { question: 'La transcription a lieu dans :', options: ['Le cytoplasme', 'Le noyau', 'Les ribosomes', 'Les mitochondries'], correctAnswer: 1, useLaTeX: false }
];

export const nerveuseExercises = [
    { number: 1, difficulty: 'simple', useLaTeX: false, content: 'Décrire les phases du potentiel d\'action.', questions: ['Quel ion entre dans le neurone lors de la dépolarisation ?', 'Quel ion sort lors de la repolarisation ?'] },
    { number: 2, difficulty: 'moyen', useLaTeX: false, content: 'Expliquer la transmission synaptique chimique.', questions: ['Quel est le rôle du calcium ?', 'Comment le neurotransmetteur est-il éliminé de la fente synaptique ?'] }
];

export const nerveuseQuiz = [
    { question: 'Le potentiel de repos est environ :', options: ['+70 mV', '-70 mV', '0 mV', '+30 mV'], correctAnswer: 1, useLaTeX: false },
    { question: 'Un PPSE est :', options: ['Une hyperpolarisation', 'Une dépolarisation', 'Un potentiel de repos', 'Un neurotransmetteur'], correctAnswer: 1, useLaTeX: false }
];
