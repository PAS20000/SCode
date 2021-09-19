module.exports = {
    images: {
        domains: [
        'yt3.ggpht.com','yt2.ggpht.com','yt1.ggpht.com','yt0.ggpht.com','yt.ggpht.com','i4.ytimg.com','i3.ytimg.com',
        'i2.ytimg.com','i1.ytimg.com','i0.ytimg.com','i.ytimg.com','encrypted-tbn3.gstatic.com',
        'encrypted-tbn2.gstatic.com','encrypted-tbn1.gstatic.com','encrypted-tbn.gstatic.com',
        'encrypted-tbn0.gstatic.com','encrypted-tbn4.gstatic.com'
    ],
    },
    trailingSlash: true,
    async headers(){
        return [{
            source:'/:path*',
            headers:[{
                key:'X-Frame-Options',
                value:'DENY',
                key:'x-robots-tag',
                value:'all'
            }]
        }]
    }
}