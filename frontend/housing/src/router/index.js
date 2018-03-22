import Vue from 'vue'
import Router from 'vue-router'
import Foo from '@/components/Foo'
import Traditional from '@/components/Traditional'
import ViewApplications from '@/components/ViewApplications'
import HousingRules from '@/components/HousingRules'
import Home from '@/components/Home'
import Register from '@/components/Register'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/foo',
            name: 'Foo',
            component: Foo
        },
        {
            path: '/viewApps',
            name: 'viewApps',
            component: ViewApplications
        },
        {

            path: '/traditional',
            name: 'Traditional',
            component: Traditional
        },
        {
            path: '/housingRules',
            name: 'HousingRules',
            component: HousingRules
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            props : true
        }
    ]
})