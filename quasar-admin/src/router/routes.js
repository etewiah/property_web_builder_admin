import { route } from 'quasar/wrappers';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'admin/propiedades/editar/:idPropiedad', component: () => import('pages/EditPropertyPage.vue') },
      // Add more routes here as needed
    ]
  }
];

export default route(function () {
  return createRouter({
    history: createWebHistory(),
    routes
  });
});
