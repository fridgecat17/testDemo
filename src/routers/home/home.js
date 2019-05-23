export default {
  path: '/',
  name: 'home',
  redirect: 'area',
  component: () => import("@/views/Home"),
  children: [
    {
      path: 'area',
      component: () => import("@/components/area/area"),
      redirect: '/area/ZYT',
      children: [
        {
          path: 'ZYT',
          component: () => import("@/components/area/ZYT/ZYT")
        },
        {
          path: 'DFGJ',
          component: () => import("@/components/area/DFGJ/DFGJ")
        },
        {
          path: 'GXXY',
          component: () => import("@/components/area/GXXY/GXXY")
        },
        {
          path: 'ZYGY',
          component: () => import("@/components/area/ZYGY/ZYGY")
        },
        {
          path: 'YJS',
          component: () => import("@/components/area/YJS/YJS")
        },
        {
          path: 'HWCC',
          component: () => import("@/components/area/HWCC/HWCC")
        },
        {
          path: 'JCQ',
          component: () => import("@/components/area/JCQ/JCQ")
        },
        {
          path: 'GWQ',
          component: () => import("@/components/area/GWQ/GWQ")
        },
      ]
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