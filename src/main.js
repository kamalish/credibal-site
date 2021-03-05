//This is the main.js file. import global css and scripts here.
//The client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/vendor/font-awesome/css/all.min.css'
import '~/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css'
import '~/assets/vendor/dzsparallaxer/dzsparallaxer.css'
import '~/assets/vendor/cubeportfolio/css/cubeportfolio.min.css'
import '~/assets/vendor/aos/dist/aos.css'
import '~/assets/css/theme.css'
import '~/assets/vendor/jquery/dist/jquery.min.js'

export default function(Vue, { router, head, isClient, appOptions }) {
    // Set default Layout as a global component
    Vue.component('Layout', DefaultLayout)
    head.link.push({
        rel: 'stylesheet',
        href: 'assets/css/theme.css'
    })
    head.link.push({
        rel: 'stylesheet',
        href: '~/assets/vendor/aos/dist/aos.css'
    })

}