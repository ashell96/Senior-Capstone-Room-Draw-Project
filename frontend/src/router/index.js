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
            component: Home
        },
        {
            path: '/Squatting',
            name: 'Squatting',
            component: Squatting
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
        },
        {
            path: '/roomSelector',
            name: 'RoomSelector',
            component: RoomSelector
        },
        {
        path: "/omega",
        name: 'Omega',
        component: Omega
        },
        {
            path: "/offcampus",
            name: 'OffCampus',
            component: OffCampus
        },
        {
        path: "/nu",
        name: 'Nu',
        component: Nu
        },
        {
            path: "/themed",
            name: 'Themed',
            component: Themed
        },
        {
            path: "/ViewSubmissions",
            name: 'ViewSubmissions',
            component: ViewSubmissions

        },
        {
            path: '/RoommateRequests',
            name: 'RoommateRequests',
            component: RoommateRequests
        }

    ]
})