import { createWebHistory, createRouter } from 'vue-router';
import ContactBook from '@/views/ContactBook.vue';
const routes = [
  {
    path: '/',
    name: 'contactbook',
    component: ContactBook
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/contacts/:id',
    name: 'contact.edit',
    component: () => import('@/views/ContactEdit.vue'),
    props: (route) => ({ contactId: route.params.id })
  },
  {
    path: '/contacts',
    name: 'contact.add',
    component: () => import('@/views/ContactAdd.vue'),
    props: (route) => ({ contactId: route.params.id })
  },
  {
    path: '/error',
    name: 'ErrorPage',
    component: () => import('@/views/ErrorPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
export default router;
