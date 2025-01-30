const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PublishPost.vue') },
      { path: 'createPost', component: () => import('src/pages/CreatePost.vue') },
      { path: 'postPlanner', component: () => import('src/pages/PostPlanner.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
