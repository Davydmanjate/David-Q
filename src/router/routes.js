import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', name: 'register', component: () => import('pages/Register.vue') },
      { path: 'pass', name: 'pass', component: () => import('pages/PassRep.vue') },
      // { path: 'index', name: 'index', component: () => import('pages/IndexPage.vue') },
      { path: 'out', name: 'out', component: () => import('pages/LogOut.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'index', name: 'index', component: () => import('pages/IndexPage.vue') },
      { path: 'despesa', name: 'despesa', component: () => import('pages/despesas/DespesaPage.vue') },
      { path: 'econo', name: 'econo', component: () => import('pages/despesas/EconomiaPage.vue') },
      { path: 'emp', name: 'emp', component: () => import('pages/despesas/empPage.vue') },
      { path: 'membro', name: 'membro', component: () => import('pages/despesas/membrosPage.vue') },
      { path: 'produt', name: 'produt', component: () => import('pages/despesas/produtPage.vue') },
      { path: 'add', name: 'add', component: () => import('pages/despesas/addMembro.vue') },
      { path: 'user', name: 'user', component: () => import('pages/despesas/userPage.vue') },
      { path: 'vacina', name: 'vacina', component: () => import('pages/despesas/vacinaPage.vue') },
      { path: 'bebe', name: 'bebe', component: () => import('pages/despesas/bebePage.vue') },
      { path: 'quiz', name: 'quiz', component: () => import('pages/despesas/quizPage.vue') }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];
const router = createRouter({
  history:
  createWebHistory(process.env.VUE_ROUTER_BASE),
  routes,
});

export default routes
