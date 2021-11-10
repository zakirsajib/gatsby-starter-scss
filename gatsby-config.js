module.exports = {
    siteMetadata: {
		title: 'Zakir Sajib - Google pagespeed',
        description: `Full Stack Web Developer`,
        author: `@zakirsajib`,
		siteUrl: `https://zakir-pagespeed.netlify.app/`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#8953B7`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/histaff.png`, // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-sitemap',
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['PT Serif'],
                },
                custom: {
                    families: ['Inter'],
                    urls: ['/fonts/fonts.css']
                }
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
