import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import ViewApplications from '@/components/ViewApplications'
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
        }
    ]
})