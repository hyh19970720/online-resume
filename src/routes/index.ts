import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Main.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router, routes };
