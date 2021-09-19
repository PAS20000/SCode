import puppeteer from 'puppeteer'

const Generator = async(req, res) => {
    if(req.method !== 'POST') return res.status(402).json({error:`Method ${req.method} not allowed`});
    try {

        const { search } = req.query
        const browser = await puppeteer.launch({headless:true});
        const page = await browser.newPage();
        await page.goto(`https://www.youtube.com/results?search_query=${search}`);
        const thumb = await page.$eval('#img', img => img.src);
        const href = await page.$eval('#thumbnail', img => img.href);
        const title = await page.$eval('#video-title', video => video.title);
        await page.goto(href);
        await page.waitForSelector('ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer > #button');
        await page.click('ytd-menu-renderer.style-scope.ytd-video-primary-info-renderer > #button');
        await page.click('ytd-menu-service-item-renderer').catch(e => e)[1]
        const tags = await page.$eval('meta[name="keywords"]', meta => meta.content);
        await page.waitForTimeout(1000);
        const transcription = await page.$$eval('ytd-transcript-body-renderer > div', 
        divs => divs.map(div => div.innerText));

        return res.status(202).json({Generated:{
            thumb,
            href,
            title,
            tags,
            transcription
        }}) , await browser.close()
        
    } catch (e) {
        return res.status(500).json({error:'Servidor instável'}), console.log('[ ERROR ]'.red, e);
    }
}

export default Generator