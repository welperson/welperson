
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      { path: '', component: () => import('pages/Index') },
      { path: 'new', component: () => import('pages/NewProduct') },
      { path: 'best', component: () => import('pages/BestProduct') },
      { path: 'favorite', component: () => import('pages/Favorite') },
      { path: 'cart', component: () => import('pages/Cart') },
      { path: 'mypage', component: () => import('pages/MyPage') },
      { path: 'detail/:id', component: () => import('pages/Detail') },
      {
        path: 'category',
        component: () => import('pages/Category'),
        children: [
          { path: '', component: () => import('pages/Category/components/All') },
          { path: 'tech', component: () => import('pages/Category/components/Tech') },
          { path: 'fashion', component: () => import('pages/Category/components/Fashion') },
          { path: 'beauty', component: () => import('pages/Category/components/Beauty') },
          { path: 'food', component: () => import('pages/Category/components/Food') },
          { path: 'office', component: () => import('pages/Category/components/Office') },
          { path: 'home', component: () => import('pages/Category/components/Home') }
        ]
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404')
  }
]

export default routes
