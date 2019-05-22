export default {
  path: '/area',
  name: 'area',
  component: () => import("@/components/area/area"),
  children: [
    {
      path: '/ZYT',
      component: () => import("@/components/area/ZYT/ZYT")
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