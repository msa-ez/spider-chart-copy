// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
import Step from '../components/spider/step/Step.vue'
import Profile from '../components/spider/Profile.vue'
import CaseStudy from '../components/spider/CaseStudy.vue'
import allGuide from '../components/spider/allGuide.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: main,
    },
    {
        path: '/get-the-guide/:tabName/level:levelNumber',
        component: Profile,
        props: true,
    },
    {
        path: '/get-the-guide/review-result',
        component: Profile,
        props: true,
    },
    {
        path: '/case-study',
        component: CaseStudy,
        props: true,
    },
    {
        path: '/all-guide',
        component: allGuide,
        props: true,
    },
    {
        path: '/:path',
        name: 'Profile',
        component: Profile,
        props: true,
    },
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

export default router;
