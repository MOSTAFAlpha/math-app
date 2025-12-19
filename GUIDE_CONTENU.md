# Guide d'Ajout de Contenu - MaClasse

## 📁 Structure des Fichiers

```
src/data/
├── mathChapters.jsx      # Chapitres de Math
├── physiqueChapters.jsx  # Chapitres de Physique
├── svtChapters.jsx       # Chapitres de SVT
├── englishChapters.jsx   # Chapitres d'Anglais
├── frenchChapters.jsx    # Chapitres de Français
├── TEMPLATE_chapter.jsx  # Template à copier
├── coursDerivation.jsx   # Exemple: cours dérivation
└── coursIntegration.jsx  # Exemple: cours intégration
```

---

## 🚀 Ajouter un Nouveau Chapitre

### Étape 1: Créer le fichier de cours

```bash
# Copier le template
copy src/data/TEMPLATE_chapter.jsx src/data/coursNouveauChapitre.jsx
```

### Étape 2: Modifier le contenu

Ouvrez le fichier et remplacez:
- `ChapterNameCours` → `NouveauChapitreCours`
- Les titres et sections
- Le contenu du cours

### Étape 3: Ajouter au fichier principal

Dans `mathChapters.jsx` (ou autre matière):

```jsx
// En haut, ajouter l'import
import { NouveauChapitreCours, exercices, quiz } from './coursNouveauChapitre';

// Dans le tableau, ajouter
{
    id: 'nouveau-chapitre',
    title: 'Nouveau Chapitre',
    subtitle: 'Description courte',
    courseContent: <NouveauChapitreCours />,
    exercises: exercices,
    quiz: quiz,
    pdfCorrige: null,
    pdfResume: null
}
```

---

## 🎨 Composants Disponibles

| Composant | Usage | Couleur |
|-----------|-------|---------|
| `<Definition>` | Définitions | 🔵 Bleu |
| `<Theorem>` | Théorèmes | 🟣 Violet |
| `<ReteniBox>` | À retenir | 🟢 Vert |
| `<ErreurBox>` | Erreurs à éviter | 🟠 Orange |
| `<InfoBox>` | Informations | 🔵 Bleu clair |
| `<FormulaBlock>` | Formules importantes | ⬜ Encadré |

### Syntaxe LaTeX

```jsx
// Inline
<Latex>{'$x^2 + y^2 = r^2$'}</Latex>

// Block centered
<p style={{ textAlign: 'center' }}>
    <Latex>{'$\\displaystyle \\int_a^b f(x)dx$'}</Latex>
</p>

// Fractions
<Latex>{'$\\frac{a}{b}$'}</Latex>

// Limites
<Latex>{'$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$'}</Latex>
```

---

## ✅ Checklist Nouveau Chapitre

- [ ] Créer fichier `cours[Nom].jsx`
- [ ] Ajouter le composant Cours
- [ ] Ajouter les exercices (3 minimum)
- [ ] Ajouter les quiz (3-5 questions)
- [ ] Importer dans le fichier chapitres
- [ ] Tester localement (`npm run dev`)
- [ ] Déployer (`npm run deploy`)

---

## 📝 Exemple Minimal

```jsx
import React from 'react';
import Latex from 'react-latex-next';
import { ReteniBox, Definition } from '../components/CourseSection';

export const ExempleCours = () => (
    <>
        <h2>I. Introduction</h2>
        <Definition term="Ma Définition">
            <p>Texte de la définition avec <Latex>{'$formule$'}</Latex>.</p>
        </Definition>

        <ReteniBox title="À Retenir">
            <ul>
                <li>Point clé 1</li>
                <li>Point clé 2</li>
            </ul>
        </ReteniBox>
    </>
);

export const exempleExercises = [];
export const exempleQuiz = [];
```

---

## 🔧 Commandes Utiles

```bash
# Lancer en local
npm run dev

# Construire
npm run build

# Déployer sur GitHub Pages
npm run deploy
```
