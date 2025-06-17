document.addEventListener('DOMContentLoaded', () => {

    // --- DATA SOURCE ---
    // All your provided links and metadata structured as a JavaScript array of objects.
    // This makes it easy to manage and filter.
    // I added a 'description' for each for better UI.
    const linkData = [
        // Industry Focus
        { title: "Google AI Blog", url: "https://ai.googleblog.com", description: "Official Google source for the latest in AI research, progress, and applications. Highly authoritative.", tags: ["AI", "Industry Focus", "Deep Articles", "Big Tech"] },
        { title: "Towards Data Science", url: "https://towardsdatascience.com", description: "High-quality technical articles, tutorials, and case studies on AI/ML. Great for in-depth learning.", tags: ["AI", "Data Science", "Deep Articles", "Engineer"] },
        { title: "The Batch", url: "https://www.deeplearning.ai/the-batch/", description: "Weekly newsletter by Andrew Ng's team summarizing key news and trends in the AI field. Strong insights.", tags: ["AI", "News Briefs", "Engineer", "Investor"] },
        { title: "CoinDesk", url: "https://www.coindesk.com", description: "Comprehensive news, market data, and analysis for cryptocurrencies and blockchain.", tags: ["Web3", "Industry Focus", "News Briefs", "Investor"] },
        { title: "The Block", url: "https://www.theblockcrypto.com", description: "In-depth reporting on the Web3 industry, projects, and funding, with a focus on on-chain data.", tags: ["Web3", "Deep Articles", "Startups", "Investor"] },
        { title: "Bankless", url: "https://bankless.substack.com", description: "Focuses on DeFi, NFTs, and broader Web3 culture and investment strategies. Professional and cutting-edge.", tags: ["Web3", "Podcast", "Newsletter", "Investor"] },
        { title: "STAT News", url: "https://www.statnews.com", description: "Authoritative news and in-depth reporting on life sciences, including biotech, pharma, and healthcare.", tags: ["Biotech", "Industry Focus", "Deep Articles", "Executive"] },
        { title: "Fierce Biotech", url: "https://www.fiercebiotech.com", description: "Latest updates, company news, and drug development progress in the biopharma industry.", tags: ["Biotech", "News Briefs", "Big Tech", "Startups"] },
        { title: "BioSpace", url: "https://www.biospace.com", description: "Industry hub for biotech jobs, news, and insights covering companies, products, and research.", tags: ["Biotech", "Industry Focus", "Startups", "Engineer"] },
        // Tech Stacks
        { title: "CSS-Tricks", url: "https://css-tricks.com", description: "Excellent tutorials, tips, and articles on CSS, HTML, and JavaScript. Highly practical.", tags: ["Frontend", "Tech Stacks", "Deep Articles", "Engineer"] },
        { title: "Smashing Magazine", url: "https://www.smashingmagazine.com", description: "In-depth content on web design and front-end development, emphasizing best practices.", tags: ["Frontend", "Tech Stacks", "Deep Articles", "Engineer"] },
        { title: "React Blog", url: "https://react.dev/blog", description: "Official source for React framework updates, features, and best practices.", tags: ["Frontend", "Tech Stacks", "Deep Articles", "Engineer"] },
        { title: "High Scalability", url: "http://highscalability.com", description: "Case studies and articles on large-scale system architecture, performance, and scalability.", tags: ["Backend", "Tech Stacks", "Deep Articles", "Engineer"] },
        { title: "MartinFowler.com", url: "https://martinfowler.com", description: "Classic content on software design, refactoring, and enterprise application architecture.", tags: ["Backend", "Tech Stacks", "Deep Articles", "Engineer", "Executive"] },
        { title: "The New Stack", url: "https://thenewstack.io", description: "Focuses on cloud-native, Kubernetes, DevOps, and microservices technologies.", tags: ["Backend", "Tech Stacks", "News Briefs", "Engineer"] },
        { title: "Kaggle Blog", url: "https://medium.com/kaggle", description: "Official blog sharing data science competition solutions, techniques, and community news.", tags: ["Data Science", "Tech Stacks", "Deep Articles", "Engineer"] },
        { title: "DataCamp Blog", url: "https://www.datacamp.com/blog", description: "Tutorials and concept explanations for data science, machine learning, and Python/R.", tags: ["Data Science", "Tech Stacks", "Deep Articles", "Engineer"] },
        { title: "Analytics Vidhya", url: "https://www.analyticsvidhya.com", description: "A comprehensive learning platform for data science, ML, and AI with articles and case studies.", tags: ["Data Science", "Tech Stacks", "Deep Articles", "Engineer"] },
        // Roles
        { title: "Hacker News", url: "https://news.ycombinator.com", description: "A daily must-read for Silicon Valley engineers, with community discussions on tech, startups, and trends.", tags: ["Engineer", "Roles", "Startups", "News Briefs"] },
        { title: "Google Developers Blog", url: "https://developers.googleblog.com", description: "Tech updates, API releases, and best practices from across Google.", tags: ["Engineer", "Roles", "Big Tech", "Deep Articles"] },
        { title: "Stack Overflow Blog", url: "https://stackoverflow.blog", description: "Insights on the developer community, programming trends, and career advice.", tags: ["Engineer", "Roles", "Deep Articles"] },
        { title: "Product Hunt", url: "https://www.producthunt.com", description: "Discover and share the latest products, understand market trends and user feedback.", tags: ["Product Manager", "Roles", "Startups", "Marketing/Growth"] },
        { title: "Lenny's Newsletter", url: "https://www.lennysnewsletter.com", description: "Deep insights on product growth, product management, and career development. Very popular with PMs.", tags: ["Product Manager", "Roles", "Marketing/Growth", "Deep Articles", "Newsletter"] },
        { title: "Mind the Product", url: "https://www.mindtheproduct.com", description: "The world's largest product manager community, offering articles, events, and resources.", tags: ["Product Manager", "Roles", "Deep Articles"] },
        { title: "GrowthHackers", url: "https://growthhackers.com", description: "A community and content hub for growth strategies, A/B testing, data analysis, and user acquisition.", tags: ["Marketing/Growth", "Roles", "Startups"] },
        { title: "Marketing Brew", url: "https://www.marketingbrew.com", description: "A daily email from Morning Brew that refines marketing industry news and trends.", tags: ["Marketing/Growth", "Roles", "News Briefs", "Newsletter"] },
        { title: "Neil Patel Blog", url: "https://neilpatel.com/blog", description: "Digital marketing expert's blog covering SEO, content marketing, and conversion rate optimization.", tags: ["Marketing/Growth", "Roles", "Deep Articles"] },
        { title: "Stratechery", url: "https://stratechery.com", description: "Deep analysis of tech industry strategy and business models. Highly valuable, mostly paid content.", tags: ["Executive/Investor", "Roles", "Deep Articles"] },
        { title: "Bloomberg Technology", url: "https://www.bloomberg.com/technology", description: "The latest news, market data, and analysis on global technology companies.", tags: ["Executive/Investor", "Roles", "Big Tech", "News Briefs"] },
        { title: "a16z Blog", url: "https://a16z.com/blog/", description: "Insights from a top VC firm on future trends, industry sectors, and startup strategies.", tags: ["Executive/Investor", "Roles", "Startups", "Deep Articles"] },
        // Company Type
        { title: "TechCrunch", url: "https://techcrunch.com", description: "Comprehensive coverage of tech giant news, product launches, and business strategies.", tags: ["Big Tech", "Startups", "Company Type", "News Briefs"] },
        { title: "The Information", url: "https://www.theinformation.com", description: "In-depth, exclusive reporting on the tech industry's inner workings and business deals. Mostly paid.", tags: ["Big Tech", "Startups", "Company Type", "Deep Articles"] },
        { title: "WSJ Technology", url: "https://www.wsj.com/news/technology", description: "Analyzes big tech's impact from a business and macroeconomic perspective.", tags: ["Big Tech", "Company Type", "News Briefs", "Executive/Investor"] },
        { title: "Y Combinator Blog", url: "https://www.ycombinator.com/blog", description: "Official blog of YC, sharing advice on startups, fundraising, and product building.", tags: ["Startups", "Company Type", "Deep Articles", "Executive/Investor"] },
        { title: "Crunchbase News", url: "https://news.crunchbase.com", description: "Tracks funding, M&A, and growth trends for startups worldwide.", tags: ["Startups", "Company Type", "News Briefs", "Investor"] },
        { title: "First Round Review", url: "https://firstround.com/review", description: "In-depth articles from a top VC on startup operations and growth strategies.", tags: ["Startups", "Company Type", "Deep Articles", "Executive/Investor"] },
        // Content Format
        { title: "Medium", url: "https://medium.com", description: "A vast collection of in-depth analysis, tutorials, and thoughts from individuals and organizations.", tags: ["Deep Articles", "Content Format"] },
        { title: "Substack", url: "https://substack.com", description: "Home to a large number of high-quality newsletters from independent writers and professionals.", tags: ["Deep Articles", "Newsletter", "Content Format"] },
        { title: "Nielsen Norman Group", url: "https://www.nngroup.com", description: "Authoritative, rigorous research reports and articles on UX and usability.", tags: ["Deep Articles", "Content Format", "Product Manager", "Engineer"] },
        { title: "Axios Pro", url: "https://www.axios.com/pro", description: "Concise and efficient business and tech news summaries, presented in a scannable format.", tags: ["News Briefs", "Content Format", "Executive/Investor"] },
        { title: "Morning Brew", url: "https://www.morningbrew.com", description: "Daily morning email summarizing business, tech, and market news in a witty, easy-to-read style.", tags: ["News Briefs", "Newsletter", "Content Format"] },
        { title: "The Hustle", url: "https://thehustle.co", description: "Daily business and tech news presented in a fun, storytelling style.", tags: ["News Briefs", "Newsletter", "Content Format"] },
        { title: "YouTube", url: "https://www.youtube.com", description: "Search for channels like 'Fireship', 'Two Minute Papers', or 'Stanford University' for talks and tutorials.", tags: ["Video", "Content Format"] },
        { title: "TED Talks", url: "https://www.ted.com/talks", description: "Inspirational talks on technology, business, design, and more, with multi-language support.", tags: ["Video", "Content Format"] },
        { title: "Google Developers YouTube", url: "https://www.youtube.com/c/GoogleDevelopers", description: "Official tutorials, conference talks, and product demos from Google.", tags: ["Video", "Content Format", "Engineer"] },
        { title: "Acquired", url: "https://www.acquired.fm", description: "Deep-dive analysis of the history and strategy of great technology companies. A must for executives.", tags: ["Podcast", "Content Format", "Executive/Investor", "Deep Articles"] },
        { title: "Exponent", url: "https://exponent.fm", description: "Ben Thompson and James Allworth discuss the strategic impact of technology and media.", tags: ["Podcast", "Content Format", "Executive/Investor"] },
        { title: "Pivot", url: "https://podcasts.voxmedia.com/show/pivot", description: "Kara Swisher and Scott Galloway's sharp commentary on tech, business, and politics.", tags: ["Podcast", "Content Format", "Executive/Investor"] }
    ];

    const filterGroups = {
        "Industry Focus": ["AI", "Web3", "Biotech"],
        "Tech Stacks": ["Frontend", "Backend", "Data Science"],
        "Roles": ["Engineer", "Product Manager", "Marketing/Growth", "Executive/Investor"],
        "Company Type": ["Big Tech", "Startups"],
        "Content Format": ["Deep Articles", "News Briefs", "Video", "Podcast", "Newsletter"]
    };

    // --- DOM Elements ---
    const filtersContainer = document.getElementById('filters-container');
    const feedContainer = document.getElementById('feed-container');
    const feedTitle = document.getElementById('feed-title');
    const currentYearSpan = document.getElementById('current-year');

    let activeTag = "All";

    // --- RENDER FUNCTIONS ---

    /**
     * Renders the filter buttons on the page based on the filterGroups object.
     */
    function renderFilters() {
        let filtersHTML = `
            <div class="flex flex-wrap gap-2 items-center">
                <span class="text-sm font-semibold text-gray-700 mr-2">Quick Filters:</span>
                <button data-tag="All" class="filter-btn active">All</button>
            </div>`;

        for (const groupName in filterGroups) {
            const tags = filterGroups[groupName];
            filtersHTML += `
                <div class="flex flex-wrap gap-2 items-center">
                    <span class="text-sm font-semibold text-gray-700 mr-2 w-28">${groupName}:</span>
                    ${tags.map(tag => `<button data-tag="${tag}" class="filter-btn">${tag}</button>`).join('')}
                </div>
            `;
        }
        filtersContainer.innerHTML = filtersHTML;
    }

    /**
     * Renders the resource cards in the feed container.
     * @param {Array} dataToRender - The array of link objects to display.
     */
    function renderCards(dataToRender) {
        if (!dataToRender.length) {
            feedContainer.innerHTML = `<p class="text-gray-500 col-span-full text-center">No resources found for the selected filter.</p>`;
            return;
        }

        feedContainer.innerHTML = dataToRender.map(item => {
            const domain = new URL(item.url).hostname.replace('www.', '');
            return `
                <article class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <div class="p-5 flex-grow">
                        <div class="flex flex-wrap gap-2 mb-3">
                            ${item.tags.map(tag => `<span class="text-xs font-semibold bg-gray-100 text-gray-800 px-2 py-1 rounded-full">${tag}</span>`).join('')}
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2">
                            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
                                ${item.title}
                            </a>
                        </h3>
                        <p class="text-gray-600 text-sm line-clamp-2">${item.description}</p>
                    </div>
                    <div class="px-5 py-3 bg-gray-50 border-t mt-auto">
                        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                            Visit ${domain} &rarr;
                        </a>
                    </div>
                </article>
            `;
        }).join('');
    }

    // --- EVENT HANDLING ---

    /**
     * Filters the linkData based on the selected tag and re-renders the cards.
     * @param {string} tag - The tag to filter by.
     */
    function filterAndRender(tag) {
        activeTag = tag;
        
        // Update button styles
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.dataset.tag === activeTag) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update feed title
        feedTitle.textContent = activeTag === "All" ? "All Resources" : `${activeTag} Resources`;

        // Filter data and render
        const filteredData = activeTag === 'All'
            ? linkData
            : linkData.filter(item => item.tags.includes(activeTag));
        
        renderCards(filteredData);
    }
    
    // Use event delegation for filter clicks
    filtersContainer.addEventListener('click', (e) => {
        if (e.target.matches('.filter-btn')) {
            const tag = e.target.dataset.tag;
            filterAndRender(tag);
        }
    });

    // --- INITIALIZATION ---

    function init() {
        currentYearSpan.textContent = new Date().getFullYear();
        renderFilters();
        renderCards(linkData);
    }

    init();
});
