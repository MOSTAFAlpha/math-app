import express from 'express';
import cors from 'cors';
import { scrapeAlloSchool } from './scraper.js';
import { enhanceWithAI } from './enhancer.js';
import { generateJSX } from './generator.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Content Enhancement API running' });
});

// Scrape AlloSchool URL
app.post('/api/scrape', async (req, res) => {
    try {
        const { url } = req.body;
        if (!url || !url.includes('alloschool.com')) {
            return res.status(400).json({ error: 'URL AlloSchool invalide' });
        }

        console.log(`🔍 Scraping: ${url}`);
        const content = await scrapeAlloSchool(url);
        res.json({ success: true, content });
    } catch (error) {
        console.error('Scrape error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Enhance content with AI
app.post('/api/enhance', async (req, res) => {
    try {
        const { content, chapterTitle, subject } = req.body;
        if (!content) {
            return res.status(400).json({ error: 'Contenu requis' });
        }

        console.log(`🤖 Enhancing: ${chapterTitle}`);
        const enhanced = await enhanceWithAI(content, chapterTitle, subject);
        res.json({ success: true, enhanced });
    } catch (error) {
        console.error('Enhance error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Generate JSX component
app.post('/api/generate', async (req, res) => {
    try {
        const { enhanced, chapterId } = req.body;
        if (!enhanced) {
            return res.status(400).json({ error: 'Contenu amélioré requis' });
        }

        console.log(`⚙️ Generating JSX for: ${chapterId}`);
        const jsx = generateJSX(enhanced, chapterId);
        res.json({ success: true, jsx });
    } catch (error) {
        console.error('Generate error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Full pipeline: scrape -> enhance -> generate
app.post('/api/pipeline', async (req, res) => {
    try {
        const { url, chapterTitle, chapterId, subject } = req.body;

        console.log(`🚀 Full pipeline for: ${chapterTitle}`);

        // Step 1: Scrape
        const scraped = await scrapeAlloSchool(url);
        console.log('✅ Scraped');

        // Step 2: Enhance with AI
        const enhanced = await enhanceWithAI(scraped, chapterTitle, subject);
        console.log('✅ Enhanced');

        // Step 3: Generate JSX
        const jsx = generateJSX(enhanced, chapterId);
        console.log('✅ Generated');

        res.json({
            success: true,
            scraped,
            enhanced,
            jsx
        });
    } catch (error) {
        console.error('Pipeline error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════╗
║  🎓 Content Enhancement API                ║
║  Running on http://localhost:${PORT}          ║
╚════════════════════════════════════════════╝
    `);
});
