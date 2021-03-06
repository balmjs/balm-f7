import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import { initRouter } from './middleware';
// Layout
import BlankLayout from '@/views/layouts/blank';
// Routes
import guideRoutes from './guide';
import generalRoutes from './general';
import layoutRoutes from './layout';
import navigationRoutes from './navigation';
import themeRoutes from './theme';
import dataInputRoutes from './data-input';
import dataDisplayRoutes from './data-display';
import feedbackRoutes from './feedback';
import miscRoutes from './misc';
// Pages
import Home from '@/views/home';
import Donate from '@/views/donate';
const Store = () => import('@/views/plugins/store');
const Utils = () => import('@/views/utils');
const NotFound = () => import('@/views/not-found');
import testRoutes from './test';

Vue.use(VueRouter);
Vue.use(VueMeta);

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/donate',
    name: 'donate',
    component: Donate
  },
  {
    path: '/guide',
    name: 'guide',
    redirect: '/guide/intro',
    component: BlankLayout,
    children: guideRoutes
  },
  {
    path: '/general',
    name: 'general',
    redirect: '/general/button',
    component: BlankLayout,
    children: generalRoutes
  },
  {
    path: '/layout',
    name: 'layout',
    redirect: '/layout/grid',
    component: BlankLayout,
    children: layoutRoutes
  },
  {
    path: '/navigation',
    name: 'navigation',
    redirect: '/navigation/drawer',
    component: BlankLayout,
    children: navigationRoutes
  },
  {
    path: '/theme',
    name: 'theme',
    redirect: '/theme/color',
    component: BlankLayout,
    children: themeRoutes
  },
  {
    path: '/data-input',
    name: 'data-input',
    redirect: '/data-input/textfield',
    component: BlankLayout,
    children: dataInputRoutes
  },
  {
    path: '/data-display',
    name: 'data-display',
    redirect: '/data-display/list',
    component: BlankLayout,
    children: dataDisplayRoutes
  },
  {
    path: '/feedback',
    name: 'feedback',
    redirect: '/feedback/dialog',
    component: BlankLayout,
    children: feedbackRoutes
  },
  {
    path: '/misc',
    name: 'misc',
    redirect: '/misc/event',
    component: BlankLayout,
    children: miscRoutes
  },
  {
    path: '/store',
    name: 'store',
    component: Store
  },
  {
    path: '/utils',
    name: 'utils',
    component: Utils
  },
  {
    path: '*',
    component: NotFound
  }
];
const routes = baseRoutes.concat(testRoutes);
const router = new VueRouter({
  routes
});

initRouter(router);

export default router;
