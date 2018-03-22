import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Traditional from '@/components/Traditional'
import ViewApplications from '@/components/ViewApplications'
import HousingRules from '@/components/HousingRules'
import Omega from '@/components/Omega'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
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
        path: "/omega",
        name: 'Omega',
        component: Omega
        }
    ]
})