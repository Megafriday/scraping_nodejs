'use strict';
const request = require('request');
const {JSDOM} = require('jsdom');

const urls = [];
urls.push("https://www.sejuku.net/blog/category/programing/node-js");
urls.push("https://www.sejuku.net/blog/category/programing/node-js/page/2");
urls.push("https://www.sejuku.net/blog/category/programing/javascript");
urls.push("https://www.sejuku.net/blog/category/programing/javascript/page/2");
urls.push("https://www.sejuku.net/blog/category/programing/javascript/page/3");
urls.push("https://www.sejuku.net/blog/category/programing/javascript/page/4");
urls.push("https://www.sejuku.net/blog/category/programing/javascript/page/5");
urls.push("https://www.sejuku.net/blog/category/programing/javascript/page/6");
urls.push("https://www.sejuku.net/blog/category/programing/javascript/page/7");
urls.push("https://www.sejuku.net/blog/category/programing/javascript/page/8");
urls.push("https://www.sejuku.net/blog/category/programing/javascript/page/9");

Promise
  .all(urls.map(url => printTitle(url)))
  .then(results => {
    results.forEach(({ url, aList }) => {
      console.log(url);
      console.log([...aList].map(a => `\t${a.textContent}`).join('\n'));
    })
  }).catch(e => {
    console.error(e);
  })

function printTitle(url) {
  return new Promise((resolve, reject) => {
    request(url, (e, response, body) => {
      if (e) reject(e);
      try {
        const dom = new JSDOM(body);
        const selector = "#primary > div > div > div > article > header > h2 > a";
        const aList = dom.window.document.querySelectorAll(selector);
        resolve({ url, aList });
      } catch (e2) {
        reject(e2);
      }
    });
  });
}
