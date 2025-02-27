'use strict';
const rpn = require('request-promise-native');
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

urls.forEach((url) => {
	getTitle(url);
});

function getTitle(url) {
	rpn(url).then((body) => {
		try {
			// const dom = new JSDOM(body);
			getDom(body).then((dom) => {

				const selector = "#primary > div > div > div > article > header > h2 > a";
				const aList = dom.window.document.querySelectorAll(selector);

				aList.forEach((a) => {
					console.log(a.textContent);
				});

				console.log("--------------------------------------------------------------------");
			});

		} catch (e) {
			console.error(e);
		}
	});
}

function getDom(body) {
	return new Promise((resolve) => {
		resolve(new JSDOM(body));
	});
}