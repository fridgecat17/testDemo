export default {
  path: '/mine',
  name: 'mine',
  component: () => import("@/views/Mine"),
  children: [
    {
      path: 'register',
      component: () => import("@/views/Register")
    },
  ]
}