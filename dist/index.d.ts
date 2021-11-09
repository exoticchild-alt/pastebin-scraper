export declare function Scrape(url: string): Promise<{
    title: string;
    views: string;
    rawData: string;
    user: string;
    expiration: string;
    dateCreated: string;
    language: string;
}>;
