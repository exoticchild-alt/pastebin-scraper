# Pastebin Scraper Library #

[![NPM License](https://img.shields.io/npm/l/all-contributors.svg?style=flat)](https://github.com/exoticchild-alt/pastebin-scraper/blob/master/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/pastebin-scraper.svg?style=flat)]()   
[![NPM](https://nodei.co/npm/pastebin-scraper.png?downloads=true)](https://www.npmjs.com/pastebin-scraper)
<br>
[![GitHub Release](https://img.shields.io/github/release/exoticchild-alt/pastebin-scraper.svg?style=flat)]()
[![Issues](https://img.shields.io/github/issues-raw/exoticchild-alt/pastebin-scraper.svg?maxAge=25000)](https://github.com/exoticchild-alt/pastebin-scraper/issues)  
[![run on repl.it](https://repl.it/badge/github/exoticchild-alt/pastebin-scraper)](https://repl.it/github/exoticchild-alt/pastebin-scraper)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

### *Usage* ###
First, to be able to use the library, install it first using the following command
```
$ npm install pastebin-scraper --save
```
This library is a promise-based library, so you first must require it in your code and then use it somewhat like this.
```javascript
const {scrape} = require('pastebin-scraper')
scrape('https://pastebin.com/4Z489JeC')
.then(res => console.log(res))
```

Output looks something like this
```bash
{
  title: 'Pastebin Scraper',
  views: '8',
  rawData: 'This is for the Pastebin scraper Node.js library',
  user: 'mrslurpyboi',
  expiration: 'Never',
  dateCreated: 'Aug 15th, 2021',
  language: 'text'
}
```
You can run this test this library in the tryit.js folder if you are, for example, running this library in GitHub or Replit.
<br>
*v1.0.1*
