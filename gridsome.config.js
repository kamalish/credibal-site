// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Credibal',
    siteUrl: 'https://kamalish.github.io',
    pathPrefix: 'credibal-site.git',
    plugins: [{
        use: '@gridsome/source-wordpress',
        options: {
            baseUrl: 'https://credibal.com/', // required
            apiBase: 'wp-json',
            typeName: 'WordPress',
            perPage: 100,
            concurrent: 10,
            routes: {
                post: '/:year/:month/:day/:slug',
                post_tag: '/tag/:slug',
                post_image: '/slug'
            }
        }
    }],
}