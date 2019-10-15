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

async function main(){
	urls.forEach((url)=>{
		let body = await getBody(url);

		try {
			let dom = new JSDOM(body);
			
			let aList = dom.window.document.querySelectorAll("#primary > div > div > div > article > header > h2 > a");
			aList.forEach((a)=>{
				console.log(a.textContent);
			});

			console.log("--------------------------------------------------------------------");
		} catch (e) {
			console.error(e);
		}

	});
}

function getBody(url){
	return new Promise((resolve, reject)=>{
		request(url, (e, response, body)=>{
			if(!e){
				resolve(body);
			}else{
				reject(e);
			}
		});
	});
}

main();