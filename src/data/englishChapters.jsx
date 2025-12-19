/**
 * English chapters data for 2ème Baccalauréat
 * Based on the Moroccan Bac English curriculum (AlloSchool structure)
 */
export const englishChapters = [
    {
        id: 'unit1-gifts-giving',
        title: 'Unit 1: Gifts of Giving',
        subtitle: 'Humanitarian actions, charity, and volunteering',
        courseContent: (
            <>
                <h2>Unit 1: Gifts of Giving</h2>

                <h3>1. Vocabulary</h3>
                <ul>
                    <li><strong>Charity:</strong> organization, donation, fundraising, sponsor</li>
                    <li><strong>Volunteering:</strong> volunteer, community service, NGO, non-profit</li>
                    <li><strong>Humanitarian:</strong> aid, relief, crisis, refugees, shelter</li>
                    <li><strong>Actions:</strong> donate, contribute, support, assist, help</li>
                </ul>

                <h3>2. Grammar Focus: Gerund vs. Infinitive</h3>
                <p><strong>Gerund (verb + -ing):</strong></p>
                <ul>
                    <li>After certain verbs: enjoy, avoid, finish, suggest, consider, mind</li>
                    <li>After prepositions: interested in, good at, tired of</li>
                    <li>As subject: "Helping others is rewarding"</li>
                </ul>

                <p><strong>Infinitive (to + verb):</strong></p>
                <ul>
                    <li>After certain verbs: want, need, decide, hope, plan, agree</li>
                    <li>After adjectives: happy to, ready to, able to</li>
                    <li>Purpose: "I volunteer to help the community"</li>
                </ul>

                <h3>3. Writing: Formal Letter</h3>
                <p><strong>Structure:</strong></p>
                <ul>
                    <li>Your address (top right)</li>
                    <li>Date</li>
                    <li>Recipient's name and address</li>
                    <li>Greeting: "Dear Sir/Madam,"</li>
                    <li>Introduction: State your purpose</li>
                    <li>Body: Main content (1-2 paragraphs)</li>
                    <li>Conclusion: Summarize or request action</li>
                    <li>Closing: "Yours faithfully," (if unknown) / "Yours sincerely," (if known)</li>
                </ul>

                <h3>4. Functions</h3>
                <ul>
                    <li>Expressing opinion: I think, In my opinion, I believe</li>
                    <li>Making suggestions: Why don't we, How about, I suggest</li>
                    <li>Expressing certainty: I'm sure, definitely, certainly</li>
                </ul>
            </>
        ),
        exercises: [
            {
                id: 1,
                title: 'Gerund or Infinitive',
                difficulty: 'moyen',
                content: 'Complete with gerund or infinitive: 1. I enjoy ___ (help) others. 2. They decided ___ (donate) money. 3. She is good at ___ (organize) events.'
            },
            {
                id: 2,
                title: 'Formal Letter',
                difficulty: 'bac',
                content: 'Write a formal letter to an NGO asking to volunteer during summer vacation. (150-200 words)'
            }
        ],
        quiz: [
            {
                question: 'Which verb is followed by a gerund?',
                options: ['want', 'enjoy', 'decide', 'hope'],
                correctIndex: 1
            },
            {
                question: 'Complete: "I am interested ___ helping the poor."',
                options: ['to', 'in', 'for', 'at'],
                correctIndex: 1
            }
        ]
    },
    {
        id: 'unit2-cultural-values',
        title: 'Unit 2: Cultural Values',
        subtitle: 'Moroccan culture, traditions, and customs',
        courseContent: (
            <>
                <h2>Unit 2: Cultural Values</h2>

                <h3>1. Vocabulary</h3>
                <ul>
                    <li><strong>Culture:</strong> heritage, tradition, custom, ritual, folklore</li>
                    <li><strong>Values:</strong> respect, hospitality, solidarity, tolerance</li>
                    <li><strong>Celebrations:</strong> festival, ceremony, gathering, celebration</li>
                    <li><strong>Adjectives:</strong> cultural, traditional, authentic, diverse</li>
                </ul>

                <h3>2. Grammar Focus: Relative Clauses</h3>
                <p><strong>Defining relative clauses:</strong></p>
                <ul>
                    <li><strong>who:</strong> for people - "The woman who organized the festival is my aunt"</li>
                    <li><strong>which:</strong> for things - "The tradition which we follow is ancient"</li>
                    <li><strong>that:</strong> for people/things - "The customs that we preserve are important"</li>
                    <li><strong>where:</strong> for places - "The village where I was born is small"</li>
                    <li><strong>when:</strong> for time - "The moment when we celebrate is special"</li>
                </ul>

                <p><strong>Non-defining relative clauses:</strong></p>
                <ul>
                    <li>Extra information between commas</li>
                    <li>"Morocco, which is in North Africa, has rich traditions"</li>
                    <li>Cannot use "that"</li>
                </ul>

                <h3>3. Writing: Descriptive Essay</h3>
                <p>Describe a Moroccan tradition or cultural event using sensory details (sight, sound, smell, taste, touch).</p>

                <h3>4. Functions</h3>
                <ul>
                    <li>Describing: It is characterized by, It consists of</li>
                    <li>Comparing: Similarly, In the same way, Like</li>
                    <li>Contrasting: However, On the other hand, Unlike</li>
                </ul>
            </>
        ),
        exercises: [
            {
                id: 1,
                title: 'Relative Pronouns',
                difficulty: 'simple',
                content: 'Fill in with who, which, where, or when: 1. The city ___ I live celebrates many traditions. 2. The people ___ organize festivals work hard.'
            }
        ],
        quiz: [
            {
                question: 'Which relative pronoun is used for places?',
                options: ['who', 'which', 'where', 'when'],
                correctIndex: 2
            },
            {
                question: 'In non-defining relative clauses, we cannot use:',
                options: ['who', 'which', 'that', 'where'],
                correctIndex: 2
            }
        ]
    },
    {
        id: 'unit3-humour',
        title: 'Unit 3: Humour',
        subtitle: 'Comedy, jokes, and the importance of laughter',
        courseContent: (
            <>
                <h2>Unit 3: Humour</h2>

                <h3>1. Vocabulary</h3>
                <ul>
                    <li><strong>Types:</strong> joke, pun, sarcasm, irony, parody, satire</li>
                    <li><strong>Reactions:</strong> laugh, giggle, chuckle, smile, grin</li>
                    <li><strong>Adjectives:</strong> funny, hilarious, amusing, witty, humorous</li>
                    <li><strong>Expressions:</strong> sense of humour, make fun of, crack a joke</li>
                </ul>

                <h3>2. Grammar Focus: Reported Speech</h3>
                <p><strong>Tense changes:</strong></p>
                <ul>
                    <li>Present → Past: "I am happy" → He said he was happy</li>
                    <li>Past → Past Perfect: "I went" → She said she had gone</li>
                    <li>Will → Would: "I will come" → He said he would come</li>
                    <li>Can → Could: "I can help" → She said she could help</li>
                </ul>

                <p><strong>Pronoun and time changes:</strong></p>
                <ul>
                    <li>I → he/she, we → they</li>
                    <li>today → that day, tomorrow → the next day</li>
                    <li>here → there, this → that</li>
                </ul>

                <p><strong>Reported questions:</strong></p>
                <ul>
                    <li>Yes/No: "Are you happy?" → He asked if/whether I was happy</li>
                    <li>Wh-: "Where do you live?" → She asked where I lived</li>
                </ul>

                <h3>3. Writing: Narrative</h3>
                <p>Tell a funny story using past tenses and include dialogue with reported speech.</p>

                <h3>4. Functions</h3>
                <ul>
                    <li>Reporting: He said that, She told me that, They asked if</li>
                    <li>Narrating: First, Then, After that, Finally</li>
                </ul>
            </>
        ),
        exercises: [],
        quiz: [
            {
                question: 'Report: "I am studying" → She said she ___ studying.',
                options: ['is', 'was', 'has been', 'will be'],
                correctIndex: 1
            },
            {
                question: 'Report: "Will you come?" → He asked ___ I would come.',
                options: ['that', 'what', 'if', 'when'],
                correctIndex: 2
            }
        ]
    },
    {
        id: 'unit4-citizenship',
        title: 'Unit 4: Citizenship',
        subtitle: 'Rights, responsibilities, and civic engagement',
        courseContent: (
            <>
                <h2>Unit 4: Citizenship</h2>

                <h3>1. Vocabulary</h3>
                <ul>
                    <li><strong>Rights:</strong> human rights, freedom, equality, justice, dignity</li>
                    <li><strong>Responsibilities:</strong> duty, obligation, vote, participate, respect</li>
                    <li><strong>Civic:</strong> citizen, democracy, government, law, constitution</li>
                    <li><strong>Actions:</strong> advocate, protest, campaign, petition, elect</li>
                </ul>

                <h3>2. Grammar Focus: Passive Voice</h3>
                <p><strong>Form: be + past participle</strong></p>
                <ul>
                    <li>Present: Laws are made by Parliament</li>
                    <li>Past: The law was passed in 2011</li>
                    <li>Future: Changes will be implemented</li>
                    <li>Present Perfect: Rights have been protected</li>
                    <li>Modal: Citizens must be respected</li>
                </ul>

                <p><strong>When to use passive:</strong></p>
                <ul>
                    <li>When the action is more important than the doer</li>
                    <li>When the doer is unknown or obvious</li>
                    <li>In formal/academic writing</li>
                </ul>

                <h3>3. Writing: Argumentative Essay</h3>
                <p><strong>Structure:</strong></p>
                <ul>
                    <li>Introduction: Present the topic + thesis statement</li>
                    <li>Body 1: First argument + examples</li>
                    <li>Body 2: Second argument + examples</li>
                    <li>Counter-argument + refutation (optional)</li>
                    <li>Conclusion: Restate thesis + final thought</li>
                </ul>

                <h3>4. Connectors</h3>
                <ul>
                    <li><strong>Addition:</strong> Furthermore, Moreover, In addition</li>
                    <li><strong>Contrast:</strong> However, Nevertheless, On the other hand</li>
                    <li><strong>Cause:</strong> Because, Since, As a result of</li>
                    <li><strong>Effect:</strong> Therefore, Consequently, Thus</li>
                </ul>
            </>
        ),
        exercises: [
            {
                id: 1,
                title: 'Active to Passive',
                difficulty: 'moyen',
                content: 'Change to passive: 1. The government protects citizens. 2. They passed a new law. 3. People will elect a new president.'
            },
            {
                id: 2,
                title: 'Argumentative Essay',
                difficulty: 'bac',
                content: 'Write an argumentative essay about: "Young people should participate more in political life." (250-300 words)'
            }
        ],
        quiz: [
            {
                question: 'Change to passive: "They speak English here."',
                options: ['English is spoken here', 'English was spoken here', 'English has been spoken here', 'English will be spoken here'],
                correctIndex: 0
            }
        ]
    },
    {
        id: 'unit5-brain-drain',
        title: 'Unit 5: Brain Drain',
        subtitle: 'Migration of skilled workers and its effects',
        courseContent: (
            <>
                <h2>Unit 5: Brain Drain</h2>

                <h3>1. Vocabulary</h3>
                <ul>
                    <li><strong>Migration:</strong> emigrate, immigrate, migrate, relocate, settle</li>
                    <li><strong>Brain drain:</strong> skilled workers, talent, expertise, professionals</li>
                    <li><strong>Causes:</strong> opportunity, salary, career, conditions, instability</li>
                    <li><strong>Effects:</strong> shortage, loss, development, economy, innovation</li>
                </ul>

                <h3>2. Grammar Focus: Conditionals</h3>
                <p><strong>Zero Conditional:</strong> General truths</p>
                <ul>
                    <li>If + present simple, present simple</li>
                    <li>"If water boils, it evaporates"</li>
                </ul>

                <p><strong>First Conditional:</strong> Real/possible future</p>
                <ul>
                    <li>If + present simple, will + base verb</li>
                    <li>"If salaries improve, fewer people will leave"</li>
                </ul>

                <p><strong>Second Conditional:</strong> Hypothetical/unreal present</p>
                <ul>
                    <li>If + past simple, would + base verb</li>
                    <li>"If I had better opportunities here, I would stay"</li>
                </ul>

                <p><strong>Third Conditional:</strong> Unreal past (regret)</p>
                <ul>
                    <li>If + past perfect, would have + past participle</li>
                    <li>"If they had invested in education, they wouldn't have lost talent"</li>
                </ul>

                <h3>3. Writing: Problem-Solution Essay</h3>
                <ul>
                    <li>Introduction: Present the problem</li>
                    <li>Body 1: Causes of the problem</li>
                    <li>Body 2: Effects of the problem</li>
                    <li>Body 3: Solutions</li>
                    <li>Conclusion: Summary + recommendation</li>
                </ul>

                <h3>4. Functions</h3>
                <ul>
                    <li>Expressing cause: due to, because of, as a result of</li>
                    <li>Expressing effect: lead to, result in, cause</li>
                    <li>Suggesting solutions: should, ought to, need to</li>
                </ul>
            </>
        ),
        exercises: [],
        quiz: [
            {
                question: 'Which conditional expresses a hypothetical situation?',
                options: ['Zero', 'First', 'Second', 'All of them'],
                correctIndex: 2
            },
            {
                question: 'Complete: "If I ___ more money, I would travel." (have)',
                options: ['have', 'had', 'will have', 'would have'],
                correctIndex: 1
            }
        ]
    },
    {
        id: 'unit6-technology',
        title: 'Unit 6: Technology',
        subtitle: 'Digital world, social media, and innovation',
        courseContent: (
            <>
                <h2>Unit 6: Technology</h2>

                <h3>1. Vocabulary</h3>
                <ul>
                    <li><strong>Devices:</strong> smartphone, laptop, tablet, gadget, device</li>
                    <li><strong>Internet:</strong> website, app, download, upload, stream, browse</li>
                    <li><strong>Social media:</strong> post, share, like, follow, influencer, viral</li>
                    <li><strong>Issues:</strong> addiction, privacy, cyberbullying, fake news, hacking</li>
                </ul>

                <h3>2. Grammar Focus: Modal Verbs</h3>
                <p><strong>Ability:</strong></p>
                <ul>
                    <li>can/could - "I can use computers"</li>
                    <li>be able to - "I am able to code"</li>
                </ul>

                <p><strong>Obligation/Necessity:</strong></p>
                <ul>
                    <li>must/have to - "You must protect your password"</li>
                    <li>should/ought to - "You should be careful online"</li>
                </ul>

                <p><strong>Possibility:</strong></p>
                <ul>
                    <li>may/might/could - "Technology might replace jobs"</li>
                </ul>

                <p><strong>Permission:</strong></p>
                <ul>
                    <li>can/may - "Can I use your phone?"</li>
                </ul>

                <h3>3. Writing: Opinion Essay</h3>
                <ul>
                    <li>Introduction: State the issue + your opinion</li>
                    <li>Body: Support your opinion with reasons</li>
                    <li>Conclusion: Restate your opinion</li>
                </ul>

                <h3>4. Expressing Opinion</h3>
                <ul>
                    <li>In my opinion, From my point of view</li>
                    <li>I strongly believe that, I am convinced that</li>
                    <li>It seems to me that, As far as I am concerned</li>
                </ul>
            </>
        ),
        exercises: [
            {
                id: 1,
                title: 'Modal Verbs',
                difficulty: 'simple',
                content: 'Complete with appropriate modals: 1. You ___ (obligation) protect your privacy online. 2. Social media ___ (possibility) affect mental health.'
            }
        ],
        quiz: [
            {
                question: 'Which modal expresses strong obligation?',
                options: ['can', 'should', 'must', 'might'],
                correctIndex: 2
            }
        ]
    }
];
