"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrape = void 0;
const cheerio = require("cheerio");
const axios = require('axios').default;
function scrape(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios.get(url);
        const $ = cheerio.load(response.data);
        return {
            title: $("body > div.wrap > div.container > div.content > div.post-view > div.details > div.info-bar > div.info-top > h1").text(),
            views: $("body > div.wrap > div.container > div.content > div.post-view > div.details > div.info-bar > div.info-bottom > div.visits").text().replace("\n", "").trim(),
            rawData: $("body > div.wrap > div.container > div.content > div.post-view > textarea").text(),
            user: $("body > div.wrap > div.container > div.content > div.post-view > div.details > div.info-bar > div.info-bottom > div.username > a").text(),
            expiration: $("body > div.wrap > div.container > div.content > div.post-view > div.details > div.info-bar > div.info-bottom > div.expire").text().replace("\n", "").trim(),
            dateCreated: $("body > div.wrap > div.container > div.content > div.post-view > div.details > div.info-bar > div.info-bottom > div.date > span").text(),
            language: $("body > div.wrap > div.container > div.content > div.post-view > div.highlighted-code > div.top-buttons > div.left > a").text()
        };
    });
}
exports.scrape = scrape;
