//here you can try this library
//const {scrape} = require('pastebin-scraper')
const {scrape} = require('pastebin-scraper');
const res = scrape('https://pastebin.com/4Z489JeC')
.then(res => console.log(res));
//console.log(res);
console.log(typeof res);
