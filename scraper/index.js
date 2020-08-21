// const axios = require('axios')
// const $ = require('cheerio')
import axios from 'axios'
import $ from 'cheerio'

class Scraper {
    constructor(baseUrl='https://zfilm-hd.net/'){
        this.baseUrl = baseUrl;
        this.data=[] // {url, imgUrl, voice, kp, imdb, year, title, description}
    }

    async scrapeMainPage(){
        let {data} = await axios.get(this.baseUrl);
        $('ul.content-video > li',data).each((i,elem)=>{         
            this.data.push({
                url: this.baseUrl+$('div.poster-main > a',elem).attr('href'),
                imgUrl: $('div.poster-main > a > img', elem).attr('src'),
                voice: $('div.poster-main > em > span',elem).text(),
                kp:  $('div.poster-main > span.zf_kp_s',elem).text(),
                imdb:  $('div.poster-main > span.zf_imdb_s',elem).text(),
                year:  $('div.poster-main > strong > span',elem).text(),
                title: $('div.info-poster > a > h3',elem).text(),
                description: $('div.info-poster > p',elem).text()
            })
        })
    }
}

export default Scraper

// var scraper= new Scraper()
// scraper.scrapeMainPage().then(()=>{
//     console.log(scraper.data)
// })
