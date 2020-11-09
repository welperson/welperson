
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'category', component: () => import('pages/category.vue') },
      { path: 'new', component: () => import('pages/NewProduct.vue') },
      { path: 'best', component: () => import('pages/BestProduct.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
