import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `Tu es un professeur de mathématiques expert au Maroc, spécialisé dans le programme du 2ème Baccalauréat Sciences.

Ta mission est de transformer le contenu brut d'un cours en un cours structuré et pédagogique au format JSON.

Le format de sortie doit être un JSON valide avec cette structure:
{
  "title": "Titre du chapitre",
  "sections": [
    {
      "type": "heading",
      "level": 2,
      "content": "I. Titre de section"
    },
    {
      "type": "definition",
      "term": "Nom du concept",
      "content": "Définition claire avec LaTeX entre $...$"
    },
    {
      "type": "theorem",
      "title": "Nom du théorème",
      "content": "Énoncé du théorème avec formules LaTeX"
    },
    {
      "type": "formula",
      "name": "Nom de la formule",
      "formula": "Formule LaTeX (sans les $)"
    },
    {
      "type": "retenir",
      "title": "À retenir",
      "content": "Points importants pour le Bac"
    },
    {
      "type": "erreur",
      "title": "Erreur fréquente",
      "content": "Description de l'erreur courante"
    },
    {
      "type": "example",
      "content": "Exemple détaillé avec solution"
    },
    {
      "type": "paragraph",
      "content": "Texte explicatif normal"
    },
    {
      "type": "list",
      "items": ["Item 1", "Item 2", "Item 3"]
    },
    {
      "type": "table",
      "headers": ["Col1", "Col2"],
      "rows": [["val1", "val2"], ["val3", "val4"]]
    }
  ],
  "exercises": [
    {
      "number": 1,
      "difficulty": "simple|moyen|bac",
      "content": "Énoncé de l'exercice",
      "questions": ["Question 1", "Question 2"]
    }
  ],
  "quiz": [
    {
      "question": "Question du quiz",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Explication de la réponse"
    }
  ]
}

RÈGLES IMPORTANTES:
1. Utilise LaTeX pour TOUTES les formules mathématiques (entre $...$ pour inline, entre $$...$$ pour display)
2. Ajoute des boîtes "À retenir" pour les concepts clés du Bac
3. Ajoute des boîtes "Erreur fréquente" pour les pièges courants
4. Structure le contenu en sections logiques (I, II, III...)
5. Ajoute des exemples concrets après chaque concept
6. Génère au moins 3 exercices de difficulté variée
7. Génère au moins 3 questions de quiz QCM
8. Utilise un langage clair et pédagogique
9. IMPORTANT: Retourne UNIQUEMENT le JSON, pas de texte avant ou après`;

/**
 * Enhance raw content with AI
 * @param {object} scrapedContent - Content from scraper
 * @param {string} chapterTitle - Title of the chapter
 * @param {string} subject - Subject (math, physique, svt)
 * @returns {Promise<object>} Enhanced structured content
 */
export async function enhanceWithAI(scrapedContent, chapterTitle, subject = 'math') {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY non configuré. Ajoute ta clé API dans le fichier .env');
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const textToEnhance = typeof scrapedContent === 'string'
        ? scrapedContent
        : scrapedContent.textContent || JSON.stringify(scrapedContent);

    const prompt = `${SYSTEM_PROMPT}

CHAPITRE: ${chapterTitle}
MATIÈRE: ${subject === 'math' ? 'Mathématiques' : subject === 'physique' ? 'Physique-Chimie' : 'SVT'}

CONTENU BRUT À TRANSFORMER:
${textToEnhance}

Transforme ce contenu en un cours complet et structuré. Retourne UNIQUEMENT le JSON.`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up the response - extract JSON
        text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

        // Try to parse JSON
        const enhanced = JSON.parse(text);

        return {
            ...enhanced,
            chapterTitle,
            subject,
            enhancedAt: new Date().toISOString()
        };
    } catch (error) {
        console.error('AI Enhancement error:', error);

        // If JSON parsing fails, return a basic structure
        if (error instanceof SyntaxError) {
            return {
                title: chapterTitle,
                sections: [
                    {
                        type: 'paragraph',
                        content: textToEnhance
                    }
                ],
                exercises: [],
                quiz: [],
                error: 'Failed to parse AI response',
                rawResponse: error.message
            };
        }

        throw error;
    }
}

/**
 * Generate quiz questions from content
 */
export async function generateQuiz(content, numQuestions = 5) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY non configuré');
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Génère ${numQuestions} questions de quiz QCM basées sur ce contenu de cours.
    
Format JSON requis:
[
  {
    "question": "Question avec formules LaTeX",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 0,
    "explanation": "Explication détaillée"
  }
]

Contenu:
${JSON.stringify(content)}

Retourne UNIQUEMENT le JSON.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    return JSON.parse(text);
}
