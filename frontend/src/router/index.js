import Vue from 'vue'
import Router from 'vue-router'

// Components
import ViewApplications from '@/components/ViewApplications'
import HousingRules from '@/components/HousingRules'
import Home from '@/components/Home'
import Register from '@/components/Register'
import RoomSelector from '@/components/RoomSelector'
import ViewSubmissions from '@/components/ViewSubmissions'
import RoommateRequests from '@/components/RoommateRequests'
import ViewRequests from '@/components/ViewRequests'
import AllSubmissions from '@/components/AllSubmissions'
import ViewAllSubmissions from '@/components/ViewAllSubmissions'
// App types
import Omega from '@/components/appType/Omega'
import OffCampus from '@/components/appType/OffCampus'
import Nu from '@/components/appType/Nu'
import Themed from '@/components/appType/Themed'
import Squatting from '@/components/appType/Squatting'
import Traditional from '@/components/appType/Traditional'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            props: true
        },
        {
            path: '/Squatting',
            name: 'Squatting',
            component: Squatting,
            props: true
        },
        {
            path: '/viewApps',
            name: 'viewApps',
            component: ViewApplications,
            props: true
        },
        {

            path: '/traditional',
            name: 'Traditional',
            component: Traditional,
            props: true
        },
        {
            path: '/housingRules',
            name: 'HousingRules',
            component: HousingRules,
            props: true
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            props: true
        },
        {
            path: '/roomSelector',
            name: 'RoomSelector',
            component: RoomSelector,
            props: true
        },
        {
            path: "/omega",
            name: 'Omega',
            component: Omega,
            props: true
        },
        {
            path: "/offcampus",
            name: 'Off_campus',
            component: OffCampus,
            props: true
        },
        {
            path: "/nu",
            name: 'Nu',
            component: Nu,
            props: true
        },
        {
            path: "/themed",
            name: 'Themed',
            component: Themed,
            props: true
        },
        {
            path: "/ViewSubmissions",
            name: 'ViewSubmissions',
            component: ViewSubmissions,
            props: true
        },
        {
            path: '/RoommateRequests',
            name: 'RoommateRequests',
            component: RoommateRequests,
            props: true
        },
        {
            path: '/ViewRequests',
            name: 'ViewRequests',
            component: ViewRequests,
            props: true
        },
        {
        path: '/AllSubmissions',
        name: 'AllSubmissions',
        component: AllSubmissions,
        props: true
        },
        {
            path: '/ViewAllSubmissions',
            name: 'ViewAllSubmissions',
            component: ViewAllSubmissions,
            props: true
        }
    ]
})