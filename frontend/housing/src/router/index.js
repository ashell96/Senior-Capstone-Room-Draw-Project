import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Squatting from '@/components/Squatting'
import Traditional from '@/components/Traditional'
import ViewApplications from '@/components/ViewApplications'
import HousingRules from '@/components/HousingRules'
import Home from '@/components/Home'
import Register from '@/components/Register'
import RoomSelector from '@/components/RoomSelector'
import Omega from '@/components/Omega'
import Themed from '@/components/Themed'
import OffCampus from '@/components/OffCampus'
import Nu from '@/components/Nu'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/squatting',
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
            path: '/omega',
            name: 'Omega',
            component: Omega
        },
        {
            path: '/themed',
            name: 'Themed',
            component: Themed
        },
        {
            path: '/offcampus',
            name: 'OffCampus',
            component: OffCampus
        },
        {
            path: '/nu',
            name: 'Nu',
            component: Nu
        }

    ]
})