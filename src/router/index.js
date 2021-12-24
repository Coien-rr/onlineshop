import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/login.vue';
import Dashboard from '../views/dashboard.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard/goods'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path:'/dashboard',
    component: Dashboard,
    children: [
      {
        path: 'goods',
        component: () => import('../components/Dashboard/GoodList.vue') ,
      },
      {
        path: 'orders',
        component: () => import('../components/Dashboard/OrderList.vue'),
      },
      {
        path: 'purchase',
        component: () => import('../components/Dashboard/OrderPage.vue'),
      }
    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;