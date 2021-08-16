//here you can try this library
//const pastebin = require('pastebin-scraper')
const scrape = require('pastebin-scraper')
scrape('https://pastebin.com/4Z489JeC').then(res => console.log(res))