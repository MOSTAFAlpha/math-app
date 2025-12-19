import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, ErreurBox, FormulaBlock, Definition, Theorem } from '../components/CourseSection';

// ============================================
// CHAPITRE 2: ONDES LUMINEUSES
// ============================================

export const OndesLumineuses = () => (
    <>
        <h2>I. Diffraction de la lumière</h2>

        <h3>1. Phénomène de diffraction</h3>
        <Definition term="Diffraction">
            <p>La diffraction est l'étalement d'une onde lorsqu'elle rencontre un obstacle ou une ouverture dont les dimensions sont de l'ordre de grandeur de sa longueur d'onde.</p>
        </Definition>

        <h3>2. Conditions de diffraction</h3>
        <ReteniBox>
            <p>La diffraction est observable lorsque la largeur de la fente <Latex>{'$a$'}</Latex> est du même ordre de grandeur que <Latex>{'$\\lambda$'}</Latex> :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}><Latex>{'$a \\approx \\lambda$'}</Latex></p>
        </ReteniBox>

        <h3>3. Figure de diffraction</h3>
        <FormulaBlock formula="\\theta = \\frac{\\lambda}{a}" name="Écart angulaire (rad)" />

        <ReteniBox title="Largeur de la tache centrale">
            <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
                <Latex>{'$L = \\frac{2\\lambda D}{a}$'}</Latex>
            </p>
            <ul style={{ marginTop: '15px', lineHeight: '2' }}>
                <li><Latex>{'$L$'}</Latex> : largeur de la tache centrale (m)</li>
                <li><Latex>{'$\\lambda$'}</Latex> : longueur d'onde (m)</li>
                <li><Latex>{'$D$'}</Latex> : distance fente-écran (m)</li>
                <li><Latex>{'$a$'}</Latex> : largeur de la fente (m)</li>
            </ul>
        </ReteniBox>

        <ErreurBox title="Attention aux unités !">
            <p>Dans la formule <Latex>{'$\\theta = \\frac{\\lambda}{a}$'}</Latex>, l'angle <Latex>{'$\\theta$'}</Latex> est en <strong>radians</strong>, pas en degrés !</p>
            <p><Latex>{'$\\lambda$'}</Latex> et <Latex>{'$a$'}</Latex> doivent être dans la même unité.</p>
        </ErreurBox>

        <h2>II. Interférences lumineuses</h2>

        <h3>1. Définition</h3>
        <Definition term="Interférences">
            <p>Les interférences sont le résultat de la superposition de deux ondes de même fréquence, provenant de sources cohérentes.</p>
        </Definition>

        <h3>2. Conditions d'interférences</h3>
        <ul style={{ marginLeft: '20px', lineHeight: '2.2' }}>
            <li>Sources de <strong>même fréquence</strong></li>
            <li>Sources <strong>cohérentes</strong> (déphasage constant)</li>
            <li>Sources de <strong>même amplitude</strong> (pour un contraste maximal)</li>
        </ul>

        <h3>3. Différence de marche</h3>
        <Definition term="Différence de marche">
            <p>La différence de marche <Latex>{'$\\delta$'}</Latex> est la différence des distances parcourues par les deux ondes :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}><Latex>{'$\\delta = d_2 - d_1 = (S_2M) - (S_1M)$'}</Latex></p>
        </Definition>

        <FormulaBlock formula="\\delta = \\frac{ax}{D}" name="Différence de marche (fentes d'Young)" />

        <h3>4. Conditions d'interférences</h3>
        <ReteniBox title="Franges brillantes et sombres">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#dcfce7' }}>
                        <th style={{ padding: '12px', border: '1px solid #16a34a' }}>Condition</th>
                        <th style={{ padding: '12px', border: '1px solid #16a34a' }}>Type de frange</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '12px', border: '1px solid #16a34a' }}><Latex>{'$\\delta = k\\lambda$'}</Latex> (<Latex>{'$k \\in \\mathbb{Z}$'}</Latex>)</td>
                        <td style={{ padding: '12px', border: '1px solid #16a34a' }}><strong>Frange brillante</strong> (interférences constructives)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '12px', border: '1px solid #16a34a' }}><Latex>{'$\\delta = (k + \\frac{1}{2})\\lambda$'}</Latex></td>
                        <td style={{ padding: '12px', border: '1px solid #16a34a' }}><strong>Frange sombre</strong> (interférences destructives)</td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <h3>5. Interfrange</h3>
        <FormulaBlock formula="i = \\frac{\\lambda D}{a}" name="Interfrange" />

        <ReteniBox>
            <p>L'<strong>interfrange</strong> <Latex>{'$i$'}</Latex> est la distance entre deux franges brillantes (ou sombres) consécutives.</p>
        </ReteniBox>

        <h2>III. Spectroscope à réseau</h2>

        <Definition term="Réseau de diffraction">
            <p>Un réseau est constitué de <Latex>{'$N$'}</Latex> fentes par millimètre, de même largeur et régulièrement espacées.</p>
        </Definition>

        <FormulaBlock formula="\\sin \\theta = k \\frac{\\lambda}{p}" name="Formule du réseau" />

        <ReteniBox>
            <p>Le <strong>pas du réseau</strong> <Latex>{'$p$'}</Latex> est la distance entre deux fentes consécutives :</p>
            <p style={{ textAlign: 'center' }}><Latex>{'$p = \\frac{1}{N}$'}</Latex></p>
        </ReteniBox>
    </>
);

// ============================================
// CHAPITRE 3: TRANSFORMATIONS NUCLÉAIRES
// ============================================

export const TransformationsNucleaires = () => (
    <>
        <h2>I. Le noyau atomique</h2>

        <h3>1. Constitution</h3>
        <Definition term="Notation d'un noyau">
            <p>Un noyau est noté <Latex>{'$^A_Z X$'}</Latex> où :</p>
            <ul style={{ lineHeight: '2' }}>
                <li><Latex>{'$X$'}</Latex> : symbole chimique</li>
                <li><Latex>{'$Z$'}</Latex> : numéro atomique (nombre de protons)</li>
                <li><Latex>{'$A$'}</Latex> : nombre de masse (protons + neutrons)</li>
                <li><Latex>{'$N = A - Z$'}</Latex> : nombre de neutrons</li>
            </ul>
        </Definition>

        <h3>2. Isotopes</h3>
        <Definition term="Isotopes">
            <p>Des noyaux <strong>isotopes</strong> ont le même nombre de protons <Latex>{'$Z$'}</Latex> mais un nombre de neutrons <Latex>{'$N$'}</Latex> différent.</p>
        </Definition>

        <h2>II. Radioactivité</h2>

        <h3>1. Définition</h3>
        <Definition term="Radioactivité">
            <p>La radioactivité est la transformation spontanée d'un noyau instable en un noyau plus stable, accompagnée de l'émission de particules et/ou de rayonnement.</p>
        </Definition>

        <h3>2. Types de radioactivité</h3>
        <ReteniBox title="Les 3 types de radioactivité">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#dcfce7' }}>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Type</th>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Particule émise</th>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Équation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\alpha$'}</Latex></td>
                        <td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$^4_2 He$'}</Latex></td>
                        <td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$^A_Z X \\to ^{A-4}_{Z-2} Y + ^4_2 He$'}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\beta^-$'}</Latex></td>
                        <td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$^0_{-1} e$'}</Latex></td>
                        <td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$^A_Z X \\to ^A_{Z+1} Y + ^0_{-1} e + \\bar{\\nu}$'}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$\\beta^+$'}</Latex></td>
                        <td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$^0_{+1} e$'}</Latex></td>
                        <td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$^A_Z X \\to ^A_{Z-1} Y + ^0_{+1} e + \\nu$'}</Latex></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <h3>3. Lois de conservation</h3>
        <Theorem title="Lois de Soddy">
            <ul style={{ lineHeight: '2' }}>
                <li><strong>Conservation du nombre de masse :</strong> <Latex>{'$\\sum A_{réactifs} = \\sum A_{produits}$'}</Latex></li>
                <li><strong>Conservation du nombre de charge :</strong> <Latex>{'$\\sum Z_{réactifs} = \\sum Z_{produits}$'}</Latex></li>
            </ul>
        </Theorem>

        <h2>III. Décroissance radioactive</h2>

        <h3>1. Loi de décroissance</h3>
        <FormulaBlock formula="N(t) = N_0 \\cdot e^{-\\lambda t}" name="Loi de décroissance" />

        <ReteniBox title="Grandeurs caractéristiques">
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
                <li><strong>Constante radioactive :</strong> <Latex>{'$\\lambda$'}</Latex> (s⁻¹)</li>
                <li><strong>Demi-vie :</strong> <Latex>{'$t_{1/2} = \\frac{\\ln 2}{\\lambda}$'}</Latex></li>
                <li><strong>Activité :</strong> <Latex>{'$A = \\lambda N = A_0 \\cdot e^{-\\lambda t}$'}</Latex></li>
            </ul>
        </ReteniBox>

        <ErreurBox title="Attention à la demi-vie">
            <p>Après une demi-vie, il reste <strong>la moitié</strong> des noyaux, pas zéro !</p>
            <p><Latex>{'$N(t_{1/2}) = \\frac{N_0}{2}$'}</Latex>, <Latex>{'$N(2t_{1/2}) = \\frac{N_0}{4}$'}</Latex>, etc.</p>
        </ErreurBox>

        <h2>IV. Énergie nucléaire</h2>

        <h3>1. Défaut de masse</h3>
        <FormulaBlock formula="\\Delta m = Z \\cdot m_p + N \\cdot m_n - m_{noyau}" name="Défaut de masse" />

        <h3>2. Énergie de liaison</h3>
        <FormulaBlock formula="E_\\ell = \\Delta m \\cdot c^2" name="Énergie de liaison" />

        <ReteniBox title="Relation masse-énergie">
            <p style={{ fontSize: '1.2em', textAlign: 'center' }}>
                <Latex>{'$E = mc^2$'}</Latex>
            </p>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
                <Latex>{'$1 \\text{ u} = 931,5 \\text{ MeV/c}^2$'}</Latex>
            </p>
        </ReteniBox>

        <h3>3. Réactions nucléaires</h3>
        <ul style={{ lineHeight: '2.5', marginLeft: '20px' }}>
            <li><strong>Fission :</strong> Un noyau lourd se scinde en deux noyaux plus légers</li>
            <li><strong>Fusion :</strong> Deux noyaux légers s'assemblent pour former un noyau plus lourd</li>
        </ul>
    </>
);

// ============================================
// CHAPITRE 4: ÉLECTRICITÉ
// ============================================

export const Electricite = () => (
    <>
        <h2>I. Dipôle RC</h2>

        <h3>1. Charge d'un condensateur</h3>
        <Definition term="Condensateur">
            <p>Un condensateur stocke de l'énergie sous forme électrique. Sa capacité <Latex>{'$C$'}</Latex> est mesurée en Farads (F).</p>
        </Definition>

        <FormulaBlock formula="q = Cu_C" name="Charge du condensateur" />

        <h3>2. Équation différentielle</h3>
        <ReteniBox title="Charge (RC)">
            <p>Équation différentielle : <Latex>{'$\\frac{du_C}{dt} + \\frac{u_C}{RC} = \\frac{E}{RC}$'}</Latex></p>
            <p style={{ marginTop: '10px' }}>Solution : <Latex>{'$u_C(t) = E(1 - e^{-t/\\tau})$'}</Latex></p>
            <p style={{ marginTop: '10px' }}>Constante de temps : <Latex>{'$\\tau = RC$'}</Latex></p>
        </ReteniBox>

        <h3>3. Décharge d'un condensateur</h3>
        <FormulaBlock formula="u_C(t) = E \\cdot e^{-t/\\tau}" name="Décharge" />

        <h2>II. Dipôle RL</h2>

        <h3>1. Bobine</h3>
        <Definition term="Bobine">
            <p>Une bobine d'inductance <Latex>{'$L$'}</Latex> (Henry, H) s'oppose aux variations de courant.</p>
            <p>Tension aux bornes : <Latex>{'$u_L = L \\frac{di}{dt}$'}</Latex></p>
        </Definition>

        <h3>2. Établissement du courant</h3>
        <ReteniBox title="Circuit RL">
            <p>Équation différentielle : <Latex>{'$L\\frac{di}{dt} + Ri = E$'}</Latex></p>
            <p style={{ marginTop: '10px' }}>Solution : <Latex>{'$i(t) = \\frac{E}{R}(1 - e^{-t/\\tau})$'}</Latex></p>
            <p style={{ marginTop: '10px' }}>Constante de temps : <Latex>{'$\\tau = \\frac{L}{R}$'}</Latex></p>
        </ReteniBox>

        <ErreurBox>
            <p>Ne pas confondre les constantes de temps :</p>
            <ul>
                <li>Circuit RC : <Latex>{'$\\tau = RC$'}</Latex></li>
                <li>Circuit RL : <Latex>{'$\\tau = \\frac{L}{R}$'}</Latex></li>
            </ul>
        </ErreurBox>

        <h2>III. Oscillations libres (RLC)</h2>

        <h3>1. Régime non amorti (R = 0)</h3>
        <FormulaBlock formula="L\\frac{d^2q}{dt^2} + \\frac{q}{C} = 0" name="Équation différentielle LC" />

        <ReteniBox title="Oscillations libres non amorties">
            <p>Pulsation propre : <Latex>{'$\\omega_0 = \\frac{1}{\\sqrt{LC}}$'}</Latex></p>
            <p style={{ marginTop: '10px' }}>Période propre : <Latex>{'$T_0 = 2\\pi\\sqrt{LC}$'}</Latex></p>
            <p style={{ marginTop: '10px' }}>Solution : <Latex>{'$q(t) = Q_m \\cos(\\omega_0 t + \\phi)$'}</Latex></p>
        </ReteniBox>

        <h3>2. Conservation de l'énergie (R = 0)</h3>
        <Theorem title="Énergie totale">
            <p><Latex>{'$E_{totale} = E_C + E_L = \\frac{1}{2}Cu_C^2 + \\frac{1}{2}Li^2 = constante$'}</Latex></p>
        </Theorem>

        <h3>3. Régime amorti (R ≠ 0)</h3>
        <ul style={{ lineHeight: '2', marginLeft: '20px' }}>
            <li><strong>Pseudo-périodique :</strong> oscillations qui s'amortissent progressivement</li>
            <li><strong>Critique :</strong> retour à l'équilibre le plus rapide sans oscillation</li>
            <li><strong>Apériodique :</strong> retour lent à l'équilibre sans oscillation</li>
        </ul>
    </>
);

// ============================================
// CHAPITRE 5: MÉCANIQUE
// ============================================

export const Mecanique = () => (
    <>
        <h2>I. Lois de Newton</h2>

        <h3>1. Deuxième loi de Newton</h3>
        <FormulaBlock formula="\\sum \\vec{F} = m \\vec{a}" name="Principe fondamental de la dynamique" />

        <h3>2. Référentiels</h3>
        <Definition term="Référentiel galiléen">
            <p>Un référentiel est galiléen s'il est en translation rectiligne uniforme par rapport à un autre référentiel galiléen.</p>
            <p>Exemples : référentiel terrestre (approximation), héliocentriques.</p>
        </Definition>

        <h2>II. Chute libre</h2>

        <Definition term="Chute libre">
            <p>Un objet est en chute libre si la seule force qui s'exerce sur lui est son <strong>poids</strong>.</p>
        </Definition>

        <h3>Équations du mouvement</h3>
        <ReteniBox title="Chute libre verticale (v₀ = 0)">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><strong>Accélération :</strong></td>
                        <td style={{ padding: '10px' }}><Latex>{'$a = g \\approx 10$ m/s²'}</Latex></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><strong>Vitesse :</strong></td>
                        <td style={{ padding: '10px' }}><Latex>{'$v(t) = gt$'}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px' }}><strong>Position :</strong></td>
                        <td style={{ padding: '10px' }}><Latex>{'$z(t) = \\frac{1}{2}gt^2$'}</Latex></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <h2>III. Mouvement de projectile</h2>

        <ReteniBox title="Équations horaires (sans frottements)">
            <p>Avec <Latex>{'$\\vec{v_0} = (v_0\\cos\\alpha, v_0\\sin\\alpha)$'}</Latex> :</p>
            <table style={{ width: '100%', marginTop: '10px' }}>
                <tbody>
                    <tr style={{ borderBottom: '1px solid #16a34a' }}>
                        <td style={{ padding: '10px' }}><Latex>{'$x(t) = v_0 \\cos\\alpha \\cdot t$'}</Latex></td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px' }}><Latex>{'$y(t) = v_0 \\sin\\alpha \\cdot t - \\frac{1}{2}gt^2$'}</Latex></td>
                    </tr>
                </tbody>
            </table>
        </ReteniBox>

        <h3>Équation de la trajectoire</h3>
        <FormulaBlock formula="y = -\\frac{g}{2v_0^2\\cos^2\\alpha}x^2 + x\\tan\\alpha" name="Trajectoire parabolique" />

        <h2>IV. Pendule simple</h2>

        <Definition term="Pendule simple">
            <p>Un pendule simple est constitué d'une masse <Latex>{'$m$'}</Latex> suspendue à un fil inextensible de longueur <Latex>{'$\\ell$'}</Latex>.</p>
        </Definition>

        <h3>Équation du mouvement</h3>
        <p>Pour les petites oscillations (<Latex>{'$\\theta < 15°$'}</Latex>) :</p>
        <FormulaBlock formula="\\frac{d^2\\theta}{dt^2} + \\frac{g}{\\ell}\\theta = 0" name="Équation du pendule" />

        <ReteniBox title="Période du pendule">
            <p style={{ fontSize: '1.2em', textAlign: 'center' }}>
                <Latex>{'$T_0 = 2\\pi\\sqrt{\\frac{\\ell}{g}}$'}</Latex>
            </p>
            <p style={{ marginTop: '10px', textAlign: 'center' }}>La période ne dépend <strong>pas</strong> de la masse !</p>
        </ReteniBox>

        <h2>V. Oscillateur horizontal</h2>

        <FormulaBlock formula="\\frac{d^2x}{dt^2} + \\frac{k}{m}x = 0" name="Oscillateur masse-ressort" />

        <ReteniBox>
            <p>Pulsation propre : <Latex>{'$\\omega_0 = \\sqrt{\\frac{k}{m}}$'}</Latex></p>
            <p style={{ marginTop: '10px' }}>Période : <Latex>{'$T_0 = 2\\pi\\sqrt{\\frac{m}{k}}$'}</Latex></p>
        </ReteniBox>
    </>
);

// ============================================
// CHAPITRE 6: CHIMIE ORGANIQUE
// ============================================

export const ChimieOrganique = () => (
    <>
        <h2>I. Les molécules organiques</h2>

        <h3>1. Groupes caractéristiques</h3>
        <ReteniBox title="Principales fonctions organiques">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#dcfce7' }}>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Fonction</th>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Groupe</th>
                        <th style={{ padding: '10px', border: '1px solid #16a34a' }}>Formule</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Alcool</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Hydroxyle</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$-OH$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Aldéhyde</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Carbonyle</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$-CHO$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Cétone</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Carbonyle</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$-CO-$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Acide carboxylique</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Carboxyle</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$-COOH$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Ester</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Ester</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$-COO-$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Amine</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Amino</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$-NH_2$'}</Latex></td></tr>
                    <tr><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Amide</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}>Amide</td><td style={{ padding: '10px', border: '1px solid #16a34a' }}><Latex>{'$-CONH_2$'}</Latex></td></tr>
                </tbody>
            </table>
        </ReteniBox>

        <h2>II. Réactions en chimie organique</h2>

        <h3>1. Estérification</h3>
        <Definition term="Estérification">
            <p>Réaction entre un acide carboxylique et un alcool pour former un ester et de l'eau :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}><Latex>{'$RCOOH + R\'OH \\rightleftharpoons RCOOR\' + H_2O$'}</Latex></p>
        </Definition>

        <ReteniBox title="Caractéristiques de l'estérification">
            <ul style={{ lineHeight: '2' }}>
                <li>Réaction <strong>lente</strong></li>
                <li>Réaction <strong>limitée</strong> (équilibre)</li>
                <li>Réaction <strong>athermique</strong></li>
            </ul>
        </ReteniBox>

        <h3>2. Hydrolyse d'un ester</h3>
        <p>Réaction inverse de l'estérification :</p>
        <p style={{ textAlign: 'center', margin: '15px 0' }}><Latex>{'$RCOOR\' + H_2O \\rightleftharpoons RCOOH + R\'OH$'}</Latex></p>

        <h3>3. Saponification</h3>
        <Definition term="Saponification">
            <p>Hydrolyse basique d'un ester :</p>
            <p style={{ textAlign: 'center', margin: '15px 0' }}><Latex>{'$RCOOR\' + HO^- \\to RCOO^- + R\'OH$'}</Latex></p>
        </Definition>

        <ReteniBox>
            <ul style={{ lineHeight: '2' }}>
                <li>Réaction <strong>totale</strong></li>
                <li>Réaction <strong>lente</strong></li>
                <li>Produit un <strong>savon</strong> (sel d'acide gras)</li>
            </ul>
        </ReteniBox>

        <h2>III. Les acides aminés et protéines</h2>

        <Definition term="Acide aminé">
            <p>Molécule comportant à la fois un groupe <Latex>{'$-NH_2$'}</Latex> (amine) et un groupe <Latex>{'$-COOH$'}</Latex> (carboxyle).</p>
            <p>Les acides <Latex>{'$\\alpha$'}</Latex>-aminés ont ces deux groupes sur le même carbone.</p>
        </Definition>

        <h3>Liaison peptidique</h3>
        <p>Formation entre deux acides aminés avec élimination d'eau :</p>
        <p style={{ textAlign: 'center', margin: '15px 0' }}><Latex>{'$-COOH + H_2N- \\to -CO-NH- + H_2O$'}</Latex></p>

        <ErreurBox>
            <p><strong>Attention à l'ordre :</strong> Dans un dipeptide, distinguer l'extrémité N-terminale (<Latex>{'$-NH_2$'}</Latex>) de l'extrémité C-terminale (<Latex>{'$-COOH$'}</Latex>).</p>
        </ErreurBox>
    </>
);

// Exports des exercices et quiz
export const ondesLumineusesExercises = [
    { number: 1, difficulty: 'simple', useLaTeX: true, content: 'Un laser rouge ($\\lambda = 650$ nm) éclaire une fente de largeur $a = 0,2$ mm placée à $D = 2$ m d\'un écran.', questions: ['Calculer la largeur de la tache centrale de diffraction.', 'Comment varie cette largeur si on diminue la largeur de la fente ?'] },
    { number: 2, difficulty: 'moyen', useLaTeX: true, content: 'Dans une expérience de fentes d\'Young, on utilise une lumière de longueur d\'onde $\\lambda = 600$ nm. La distance entre les fentes est $a = 0,5$ mm et l\'écran est situé à $D = 1,5$ m.', questions: ['Calculer l\'interfrange.', 'Quelle est la position de la 3ème frange brillante ?'] }
];

export const ondesLumineusesQuiz = [
    { question: 'La diffraction est plus marquée quand :', options: ['La fente est plus large que λ', 'La fente est plus étroite que λ', 'La fente a la même dimension que λ', 'Cela ne dépend pas de la fente'], correctAnswer: 2, useLaTeX: true },
    { question: 'L\'interfrange $i$ augmente si :', options: ['La distance D diminue', 'La distance entre les fentes diminue', 'La longueur d\'onde diminue', 'Les fentes sont plus larges'], correctAnswer: 1, useLaTeX: true }
];

export const nucleaireExercises = [
    { number: 1, difficulty: 'simple', useLaTeX: true, content: 'Écrire l\'équation de la désintégration $\\alpha$ de l\'uranium 238 ($^{238}_{92}U$).', questions: ['Identifier le noyau fils.', 'Vérifier les lois de conservation.'] },
    { number: 2, difficulty: 'moyen', useLaTeX: true, content: 'Le carbone 14 a une demi-vie de 5730 ans. Un échantillon initial contient $N_0 = 10^{12}$ atomes.', questions: ['Combien d\'atomes reste-t-il après 11460 ans ?', 'Calculer la constante radioactive $\\lambda$.'] }
];

export const nucleaireQuiz = [
    { question: 'Dans une désintégration $\\beta^-$, le numéro atomique Z :', options: ['Diminue de 1', 'Augmente de 1', 'Reste constant', 'Diminue de 2'], correctAnswer: 1, useLaTeX: true },
    { question: 'Après 3 demi-vies, il reste quelle fraction des noyaux initiaux ?', options: ['1/2', '1/4', '1/8', '1/16'], correctAnswer: 2, useLaTeX: false }
];

export const electriciteExercises = [
    { number: 1, difficulty: 'simple', useLaTeX: true, content: 'Un condensateur de capacité $C = 100$ µF est chargé à travers une résistance $R = 1$ kΩ.', questions: ['Calculer la constante de temps $\\tau$.', 'Au bout de combien de temps le condensateur est-il chargé à 95% ?'] },
    { number: 2, difficulty: 'moyen', useLaTeX: true, content: 'Un circuit LC a une inductance $L = 0,4$ H et une capacité $C = 10$ µF.', questions: ['Calculer la période propre $T_0$.', 'Calculer la pulsation propre $\\omega_0$.'] }
];

export const electriciteQuiz = [
    { question: 'La constante de temps d\'un circuit RC vaut :', options: ['$R/C$', '$C/R$', '$RC$', '$1/RC$'], correctAnswer: 2, useLaTeX: true },
    { question: 'La période propre d\'un circuit LC est :', options: ['$2\\pi\\sqrt{LC}$', '$2\\pi/\\sqrt{LC}$', '$\\sqrt{LC}$', '$1/\\sqrt{LC}$'], correctAnswer: 0, useLaTeX: true }
];

export const mecaniqueExercises = [
    { number: 1, difficulty: 'simple', useLaTeX: true, content: 'Un objet est lâché sans vitesse initiale d\'une hauteur $h = 20$ m.', questions: ['Calculer le temps de chute.', 'Calculer la vitesse à l\'arrivée au sol.'] },
    { number: 2, difficulty: 'moyen', useLaTeX: true, content: 'Un pendule simple de longueur $\\ell = 1$ m oscille avec de petites amplitudes.', questions: ['Calculer la période des oscillations.', 'Comment varie la période si on double la longueur ?'] }
];

export const mecaniqueQuiz = [
    { question: 'La période d\'un pendule simple dépend de :', options: ['La masse', 'La longueur du fil', 'L\'amplitude (si grande)', 'A et B'], correctAnswer: 1, useLaTeX: false },
    { question: 'Dans une chute libre, l\'accélération est :', options: ['Proportionnelle à la masse', 'Égale à g pour tous les corps', 'Nulle', 'Variable'], correctAnswer: 1, useLaTeX: false }
];

export const chimieExercises = [
    { number: 1, difficulty: 'simple', useLaTeX: true, content: 'Écrire l\'équation de l\'estérification entre l\'acide éthanoïque et l\'éthanol.', questions: ['Nommer l\'ester formé.', 'Cette réaction est-elle totale ?'] }
];

export const chimieQuiz = [
    { question: 'L\'estérification est une réaction :', options: ['Totale et rapide', 'Limitée et lente', 'Totale et lente', 'Limitée et rapide'], correctAnswer: 1, useLaTeX: false },
    { question: 'La saponification est :', options: ['Une hydrolyse acide', 'Une hydrolyse basique', 'Une estérification', 'Une déshydratation'], correctAnswer: 1, useLaTeX: false }
];
