const routes = [
  { path: '/login', component: () => import('pages/LoginPage.vue') }, 
  { path: '/register', component: () => import('pages/SignUp.vue') }, 
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PublishPost.vue'), meta: { requiresAuth: true } },
      { path: 'createPost', component: () => import('src/pages/CreatePost.vue') },
      { path: 'postPlanner', component: () => import('src/pages/PostPlanner.vue') },
      { path: 'image', component: () => import('src/pages/Image.vue') },
    ]
  },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes
