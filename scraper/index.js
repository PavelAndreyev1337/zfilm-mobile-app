const axios = require('axios')
const $ = require('cheerio')
global.Buffer = global.Buffer || require('buffer').Buffer

class Scraper {
    constructor(baseUrl = 'https://zfilm-hd.net') {
        this.useAgent =  { 'User-Agent': 'Mozilla/5.0' }
        this.baseUrl = baseUrl
    }

    async scrapePage(relativeUrl=null) {
        var posters = []
        let url = relativeUrl ? this.baseUrl+relativeUrl : this.baseUrl
        let { data } = await axios.get(url, { headers: this.useAgent })
        $('.content-video > li', data).each((i, elem) => {
            if (i==10 && !relativeUrl) return false
            var imgUrl = $('div.poster-main > a > img', elem).attr('src')
            posters.push({
                url: this.baseUrl + $('div.poster-main > a', elem).attr('href'),
                imgUrl: imgUrl.startsWith("https") ? imgUrl : this.baseUrl+imgUrl,
                voice: $('div.poster-main > em > span', elem).text(),
                kp: $('div.poster-main > span.zf_kp_s', elem).text(),
                imdb: $('div.poster-main > span.zf_imdb_s', elem).text(),
                year: $('div.poster-main > strong > span', elem).text(),
                title: $('div.info-poster > a > h3', elem).text(),
                description: $('div.info-poster > p', elem).text()
                })
            })
        return posters
    }

    async scrapeVideoPlayersUrls(url){
        let videoPlayersUrls=[]
        let headers={headers: Object.assign({'Referer': url},this.useAgent)}
        let resp = await axios.get(url, { headers: this.useAgent})
        let urlPlayers = $('div.player-wrapper > iframe',resp.data).attr('src')
        resp = await axios.get(urlPlayers,headers)
        let urlVideocdn=$('li[data-name="videocdn"]',resp.data).attr('data-src')
        try{
            let {status} = await axios.get(urlVideocdn,headers)
            if(status===200) videoPlayersUrls.push(urlVideocdn)
        } finally{
            return videoPlayersUrls
        }
    }
}

const scraper = new Scraper()
Object.freeze(scraper)

export default scraper