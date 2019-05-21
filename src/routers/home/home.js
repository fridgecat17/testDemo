export default {
  path: '/',
  name: 'home',
  component: () => import("@/views/Home"),
  children: [
    {
      path: 'area',
      component: () => import("@/components/area/area")
    },
    {
      path: 'hot',
      component: () => import("@/components/hot/hot")
    },
    {
      path: 'new',
      component: () => import("@/components/new/new")
    },
  ]
}