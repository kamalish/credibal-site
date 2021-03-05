export default [
  {
    path: "/:year/:month/:day/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Users/kamal/Code/credibal/website/src/templates/WordPressPost.vue")
  },
  {
    path: "/pricing/",
    component: () => import(/* webpackChunkName: "page--src--pages--pricing-vue" */ "/Users/kamal/Code/credibal/website/src/pages/pricing.vue")
  },
  {
    path: "/features/",
    component: () => import(/* webpackChunkName: "page--src--pages--features-vue" */ "/Users/kamal/Code/credibal/website/src/pages/features.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/kamal/Code/credibal/website/src/pages/blog.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/kamal/Code/credibal/website/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/kamal/Code/credibal/website/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/kamal/Code/credibal/website/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/kamal/Code/credibal/website/src/pages/404.vue")
  }
]

