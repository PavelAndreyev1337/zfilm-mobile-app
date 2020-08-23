//import axios from 'axios'
//import $ from 'cheerio'
const axios = require('axios')
const $ = require('cheerio')
global.Buffer = global.Buffer || require('buffer').Buffer

class Scraper {
    constructor(baseUrl = 'https://zfilm-hd.net') {
        this.useAgent =  { 'User-Agent': 'Mozilla/5.0' }
        this.baseUrl = baseUrl
        this.data = [] // {url, imgUrl, voice, kp, imdb, year, title, description}
        this.videoPlayersUrls = []
    }

    async scrapePage(relativeUrl=null) {
        let url = relativeUrl ? this.baseUrl+relativeUrl : this.baseUrl
        let { data } = await axios.get(url, { headers: this.useAgent })
        $('ul.content-video > li', data).each((i, elem) => {
            var imgUrl = $('div.poster-main > a > img', elem).attr('src')
            this.data.push({
                url: this.baseUrl + $('div.poster-main > a', elem).attr('href'),
                imgUrl: imgUrl.startsWith("http") ? imgUrl : this.baseUrl+imgUrl,
                voice: $('div.poster-main > em > span', elem).text(),
                kp: $('div.poster-main > span.zf_kp_s', elem).text(),
                imdb: $('div.poster-main > span.zf_imdb_s', elem).text(),
                year: $('div.poster-main > strong > span', elem).text(),
                title: $('div.info-poster > a > h3', elem).text(),
                description: $('div.info-poster > p', elem).text()
            })
        })
    }

    async scrapeVideoPlayerUrls(url){
        let resp = await axios.get(url, { headers: this.useAgent})
        let urlPlayers = $('div.player-wrapper > iframe',resp.data).attr('src')
        resp = await axios.get(urlPlayers,{headers: Object.assign({'Referer': url},this.useAgent)})
        this.videoPlayersUrls.push($('li[data-name="videocdn"]',resp.data).attr('data-src'))
    }
}

export default Scraper

// var scraper= new Scraper()
// scraper.scrapeVideoFrame()