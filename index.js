const cheerio = require('cheerio');
const axios = require('axios');
module.exports = async function(url) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    return {
        title: $("body > div.wrap > div.container > div.content > div.post-view > div.details > div.info-bar > div.info-top > h1").text(),
        views: $("body > div.wrap > div.container > div.content > div.post-view > div.details > div.info-bar > div.info-bottom > div.visits").text().replace("\n", "").trim(), 
        rawData: $("body > div.wrap > div.container > div.content > div.post-view > textarea").text(),
        user: $("body > div.wrap > div.container > div.content > div.post-view > div.details > div.info-bar > div.info-bottom > div.username > a").text(),
        expiration: $("body > div.wrap > div.container > div.content > div.post-view > div.details > div.info-bar > div.info-bottom > div.expire").text().replace("\n", "").trim(),
        dateCreated: $("body > div.wrap > div.container > div.content > div.post-view > div.details > div.info-bar > div.info-bottom > div.date > span").text(),
        language: $("body > div.wrap > div.container > div.content > div.post-view > div.highlighted-code > div.top-buttons > div.left > a").text()
    }
}