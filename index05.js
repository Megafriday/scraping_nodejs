'use strict';
const rp = require('request-promise');
const { JSDOM } = require('jsdom');

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

const selector = "#primary > div > div > div > article > header > h2 > a";

Promise
	.all(urls.map(url => rp(url)))
	.then(htmls => {
		htmls.forEach((html, i) => {
			console.log(urls[i]);

			const dom = new JSDOM(html);
			const aList = dom.window.document.querySelectorAll(selector);
			console.log([...aList].map(a => `\t${a.textContent}`).join('\n'));
		})
	}).catch(e => {
		console.error(e);
	});