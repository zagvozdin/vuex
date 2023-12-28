import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: ()=>import('@/Pages/MainPage.vue'),
  },{
    path: '/photo',
    component: ()=>import('@/Pages/PhotosPage.vue'),
  },
]

export default new VueRouter({
  mode:'history', routes
});