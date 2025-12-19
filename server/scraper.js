import puppeteer from 'puppeteer';

/**
 * Scrape AlloSchool course page content
 * @param {string} url - AlloSchool course URL
 * @returns {Promise<object>} Scraped content
 */
export async function scrapeAlloSchool(url) {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        console.log(`📖 Opening: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

        // Wait for content to load
        await page.waitForSelector('body', { timeout: 10000 });

        // Extract page title
        const title = await page.$eval('h1, .page-title, .element-title',
            el => el.textContent.trim()
        ).catch(() => 'Untitled');

        // Try to find PDF download link
        const pdfUrl = await page.$eval('a[href*=".pdf"]',
            el => el.href
        ).catch(() => null);

        // Extract all text content from the page
        const textContent = await page.evaluate(() => {
            // Remove scripts, styles, nav, footer
            const elementsToRemove = document.querySelectorAll('script, style, nav, footer, header, .sidebar, .ads');
            elementsToRemove.forEach(el => el.remove());

            // Get main content
            const main = document.querySelector('main, .content, .element-content, article') || document.body;

            // Get all text
            return main.innerText;
        });

        // Extract course structure from navigation/breadcrumbs
        const breadcrumbs = await page.$$eval('.breadcrumb a, .fil-ariane a',
            els => els.map(el => el.textContent.trim())
        ).catch(() => []);

        // Extract images (course pages as images)
        const images = await page.$$eval('img[src*="document"], img[src*="course"], .gallery img',
            imgs => imgs.map(img => img.src)
        ).catch(() => []);

        // Extract links to sub-courses
        const subLinks = await page.$$eval('a[href*="/element/"]',
            els => els.map(el => ({
                text: el.textContent.trim(),
                href: el.href
            }))
        ).catch(() => []);

        return {
            url,
            title,
            pdfUrl,
            textContent,
            breadcrumbs,
            images,
            subLinks,
            scrapedAt: new Date().toISOString()
        };

    } finally {
        await browser.close();
    }
}

/**
 * Scrape multiple pages and combine content
 * @param {string[]} urls - Array of URLs to scrape
 * @returns {Promise<object>} Combined content
 */
export async function scrapeMultiplePages(urls) {
    const results = [];

    for (const url of urls) {
        try {
            const content = await scrapeAlloSchool(url);
            results.push(content);
        } catch (error) {
            console.error(`Failed to scrape ${url}:`, error.message);
        }
    }

    return {
        pages: results,
        totalPages: results.length,
        combinedText: results.map(r => r.textContent).join('\n\n---\n\n')
    };
}
