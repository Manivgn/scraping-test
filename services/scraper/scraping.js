import * as cheerio from 'cheerio';
import request from 'request';

const url = 'https://www.google.com/search?q='
export default function scrapFromGoogle(keyword) {
    const searchItem = url + keyword
    request(searchItem, (error, response, html) => {
        if (!error && response.statusCode == 200) {
           const $ = cheerio.load(html);
           console.log($.html());
            $('.MjjYud').each((i, el) => {
                console.log($(el));
                const title = $(el).html();
                console.log(title)
            })
        }
    })
}



