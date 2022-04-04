module.exports = {
    images: {
        domains: [
            'lh3.googleusercontent.com',
        ]
    },
    trailingSlash: true,
    async headers(){
        return [{
            source:'/:path*',
            headers:[{
                key:'X-Frame-Options',
                value:'SAMEORIGIN',
               
            },{
                key:'x-robots-tag',
                value:'all',
            }
            ]
        }]
    }
}