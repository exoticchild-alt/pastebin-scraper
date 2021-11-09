//here you can try this library
//const {scrape} = require('pastebin-scraper')
const {Scrape} = require('pastebin-scraper');
const res = Scrape('https://pastebin.com/4Z489JeC')
.then(res => console.log(res));
//console.log(res);
console.log(typeof res);
