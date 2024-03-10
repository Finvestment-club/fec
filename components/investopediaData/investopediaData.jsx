import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with your Apify API token
const client = new ApifyClient({
    token: 'apify_api_98ThT7nJeUr9f924GUTibL2qOPufoe1ckm5e',
});

// Prepare Actor input
const input = {
    "startUrls": [
        {
            "url": "https://www.investopedia.com/stocks-4427785"
        },
        {
            "url": "https://www.investopedia.com/savings-accounts-4689728"
        },
        {
            "url": "https://www.investopedia.com/personal-finance-4427760"
        },
        {
            "url": "https://www.investopedia.com/markets-news-4427704"
        },
        {
            "url": "https://www.investopedia.com/best-online-brokers-4587872"
        }
    ],
    "dateRange": "anytime",
    "maxArticles": 100,
    "proxyConfiguration": {
        "useApifyProxy": true
    }
};

(async () => {
    // Run the Actor and wait for it to finish
    const run = await client.actor("glitch_404/investopedia-scraper").call(input);

    // Fetch and print Actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
})();