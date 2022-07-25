import Vue from 'vue';
import VueRouter from 'vue-router';
import PostView from '../views/PostView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            redirect: '/post',
        },
        {
            path: '/post',
            component: PostView,
        }
    ]
});