import { route } from 'quasar/wrappers';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'admin/setup', component: () => import('components/AdminSetup.vue') },
      { path: 'admin/agency', component: () => import('components/AdminAgency.vue') },
      { path: 'admin/io', component: () => import('components/AdminIo.vue') },
      { path: 'admin/pages', component: () => import('components/AdminPages.vue') },
      { path: 'admin/website', component: () => import('components/AdminWebsite.vue') },
      { path: 'admin/propiedades', component: () => import('components/AdminPropiedades.vue') },
      { path: 'admin/clients', component: () => import('components/AdminClients.vue') },
      { path: 'admin/contacts', component: () => import('components/AdminContacts.vue') },
      { path: 'admin/about', component: () => import('components/AdminAbout.vue') },
      { path: 'admin/propiedades/editar/:idPropiedad', component: () => import('components/AdminPropiedadesEditar.vue') },
      { path: 'admin/propiedades/nuevo', component: () => import('components/AdminPropiedadesNuevo.vue') },
      { path: 'admin/propiedades/list', component: () => import('components/AdminPropiedadesListFilter.vue') },
      { path: 'admin/propiedades/settings', component: () => import('components/AdminPropiedadesSettings.vue') },
      { path: 'admin/website/settings', component: () => import('components/AdminWebsiteSettings.vue') },
      { path: 'admin/website/content', component: () => import('components/AdminWebsiteContent.vue') },
      { path: 'admin/website/themes', component: () => import('components/AdminWebsiteThemes.vue') },
      { path: 'admin/website/sections', component: () => import('components/AdminWebsiteSections.vue') },
      { path: 'admin/clients/new', component: () => import('components/AdminClientsNew.vue') },
      { path: 'admin/clients/edit/:id', component: () => import('components/AdminClientsEdit.vue') },
      { path: 'admin/contacts/new', component: () => import('components/AdminContactsNew.vue') },
      { path: 'admin/contacts/edit/:id', component: () => import('components/AdminContactsEdit.vue') },
    ]
  }
];

export default route(function () {
  return createRouter({
    history: createWebHistory(),
    routes
  });
});
