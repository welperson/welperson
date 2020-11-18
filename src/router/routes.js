
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'new', component: () => import('pages/NewProduct.vue') },
      { path: 'best', component: () => import('pages/BestProduct.vue') },
      { path: 'favorite', component: () => import('pages/Favorite.vue') },
      { path: 'cart', component: () => import('pages/Cart.vue') },
      { path: 'mypage', component: () => import('pages/MyPage.vue') },
      { path: 'detail/:id', component: () => import('pages/Detail.vue') },
      {
        path: 'category',
        component: () => import('pages/category.vue'),
        children: [
          { path: '', component: () => import('components/All.vue') },
          { path: 'tech', component: () => import('components/Tech.vue') },
          { path: 'fashion', component: () => import('components/Fashion.vue') },
          { path: 'beauty', component: () => import('components/Beauty.vue') },
          { path: 'food', component: () => import('components/Food.vue') },
          { path: 'office', component: () => import('components/Office.vue') },
          { path: 'home', component: () => import('components/Home.vue') }
        ]
      }
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
