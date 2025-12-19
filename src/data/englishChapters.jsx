/**
 * English chapters data for 2ème Baccalauréat
 */
export const englishChapters = [
    {
        id: 'writing-skills',
        title: 'Writing Skills',
        subtitle: 'Essay writing, paragraphs, and formal letters',
        courseContent: (
            <>
                <h2>Writing Skills for the Baccalauréat</h2>

                <h3>1. Essay Structure</h3>
                <p>A well-structured essay follows the <strong>introduction-body-conclusion</strong> format:</p>
                <ul>
                    <li><strong>Introduction:</strong> Hook, background, thesis statement</li>
                    <li><strong>Body paragraphs:</strong> Topic sentence, supporting details, examples</li>
                    <li><strong>Conclusion:</strong> Restate thesis, summarize main points, final thought</li>
                </ul>

                <h3>2. Paragraph Writing</h3>
                <p>Each paragraph should follow the <strong>PEEL</strong> structure:</p>
                <ul>
                    <li><strong>P</strong>oint - State your main idea</li>
                    <li><strong>E</strong>vidence - Provide supporting evidence</li>
                    <li><strong>E</strong>xplain - Explain how the evidence supports your point</li>
                    <li><strong>L</strong>ink - Link back to your main argument</li>
                </ul>

                <h3>3. Formal Letter Writing</h3>
                <p>Format for formal letters:</p>
                <ul>
                    <li>Your address (top right)</li>
                    <li>Date</li>
                    <li>Recipient's address (left)</li>
                    <li>Salutation: "Dear Sir/Madam,"</li>
                    <li>Body (clear paragraphs)</li>
                    <li>Closing: "Yours faithfully," or "Yours sincerely,"</li>
                </ul>
            </>
        ),
        exercises: [
            {
                id: 1,
                title: 'Essay Practice',
                difficulty: 'moyen',
                content: 'Write an essay about the importance of education in modern society. (250-300 words)'
            },
            {
                id: 2,
                title: 'Formal Letter',
                difficulty: 'simple',
                content: 'Write a formal letter to your school principal requesting permission for a field trip.'
            }
        ],
        quiz: [
            {
                question: 'What does PEEL stand for in paragraph writing?',
                options: ['Point, Evidence, Explain, Link', 'Plan, Execute, Evaluate, Learn', 'Prepare, Edit, Examine, List', 'Present, Expand, End, Lead'],
                correctIndex: 0
            },
            {
                question: 'How should you end a formal letter to someone you don\'t know personally?',
                options: ['Best wishes', 'Yours faithfully', 'Love', 'Cheers'],
                correctIndex: 1
            }
        ]
    },
    {
        id: 'reading-comprehension',
        title: 'Reading Comprehension',
        subtitle: 'Understanding texts, inference, and analysis',
        courseContent: (
            <>
                <h2>Reading Comprehension Strategies</h2>

                <h3>1. Before Reading</h3>
                <ul>
                    <li>Read the title and predict the content</li>
                    <li>Look at headings, images, and captions</li>
                    <li>Identify the text type (article, story, essay)</li>
                </ul>

                <h3>2. During Reading</h3>
                <ul>
                    <li>Identify the main idea of each paragraph</li>
                    <li>Underline key vocabulary</li>
                    <li>Note transition words and connectors</li>
                    <li>Make inferences from context</li>
                </ul>

                <h3>3. Question Types</h3>
                <ul>
                    <li><strong>Literal:</strong> Find information directly in the text</li>
                    <li><strong>Inferential:</strong> Read between the lines</li>
                    <li><strong>Evaluative:</strong> Give your opinion with justification</li>
                    <li><strong>Vocabulary:</strong> Define words from context</li>
                </ul>
            </>
        ),
        exercises: [],
        quiz: [
            {
                question: 'What is an inferential question?',
                options: ['A question with the answer directly in the text', 'A question that requires reading between the lines', 'A question about vocabulary', 'A question about grammar'],
                correctIndex: 1
            }
        ]
    },
    {
        id: 'grammar-essentials',
        title: 'Grammar Essentials',
        subtitle: 'Tenses, conditionals, passive voice, reported speech',
        courseContent: (
            <>
                <h2>Essential Grammar for the Baccalauréat</h2>

                <h3>1. Tenses Review</h3>
                <ul>
                    <li><strong>Present Simple:</strong> Habits, general truths (I work)</li>
                    <li><strong>Present Continuous:</strong> Actions happening now (I am working)</li>
                    <li><strong>Past Simple:</strong> Completed past actions (I worked)</li>
                    <li><strong>Present Perfect:</strong> Past with present relevance (I have worked)</li>
                    <li><strong>Future:</strong> Will/Going to (I will work / I am going to work)</li>
                </ul>

                <h3>2. Conditionals</h3>
                <ul>
                    <li><strong>Zero:</strong> If + present, present (general truths)</li>
                    <li><strong>First:</strong> If + present, will + base (real possibility)</li>
                    <li><strong>Second:</strong> If + past, would + base (hypothetical)</li>
                    <li><strong>Third:</strong> If + past perfect, would have + past participle (regret)</li>
                </ul>

                <h3>3. Passive Voice</h3>
                <p>Form: <strong>be + past participle</strong></p>
                <ul>
                    <li>Active: They build houses → Passive: Houses are built</li>
                    <li>Active: She wrote the letter → Passive: The letter was written</li>
                </ul>

                <h3>4. Reported Speech</h3>
                <ul>
                    <li>"I am happy" → He said (that) he was happy</li>
                    <li>"I will come" → She said (that) she would come</li>
                </ul>
            </>
        ),
        exercises: [],
        quiz: [
            {
                question: 'Change to passive: "They speak English here."',
                options: ['English is spoken here', 'English was spoken here', 'English has been spoken here', 'English will be spoken here'],
                correctIndex: 0
            },
            {
                question: 'Which conditional expresses a hypothetical/unreal situation?',
                options: ['Zero conditional', 'First conditional', 'Second conditional', 'All of them'],
                correctIndex: 2
            }
        ]
    },
    {
        id: 'vocabulary-themes',
        title: 'Vocabulary & Themes',
        subtitle: 'Key vocabulary for Bac themes',
        courseContent: (
            <>
                <h2>Thematic Vocabulary</h2>

                <h3>1. Education</h3>
                <p>curriculum, literacy, dropout, scholarship, vocational training, higher education</p>

                <h3>2. Technology</h3>
                <p>digital divide, artificial intelligence, social media, cyberbullying, privacy</p>

                <h3>3. Environment</h3>
                <p>climate change, renewable energy, deforestation, pollution, sustainability</p>

                <h3>4. Citizenship</h3>
                <p>human rights, democracy, equality, tolerance, volunteering, NGO</p>

                <h3>5. Globalization</h3>
                <p>cultural exchange, immigration, cultural identity, multiculturalism</p>
            </>
        ),
        exercises: [],
        quiz: []
    }
];
