import Home from './components/Home.vue'
import Products from './components/Products.vue'
import LogIn from './components/LogIn.vue'
import Register from './components/Register.vue'
import Contacts from './components/Contacts.vue'
import Audi from './components/Audi.vue'
import Garmin from './components/Aviation/Garmin.vue'
import PrattWhitney from './components/Aviation/PrattWhitney.vue'
import Honeywell from './components/Aviation/Honeywell.vue'
import Safran from './components/Aviation/Safran.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/Products', component: Products },
    { path: '/LogIn', component: LogIn },
    { path: '/Register', component: Register },
    { path: '/Contacts', component: Contacts },
    { 
        path: '/Aviation',
        name: 'Aviation general',
        component: Audi,
        children: [
            {
                path: 'Garmin',
                component: Garmin,
            },
            {
                path: 'PrattWhitney',
                component: PrattWhitney,
            },
            {
                path: 'Honeywell',
                component: Honeywell,
            },
            {
                path: 'Safran',
                component: Safran,
            },
        ]
    },
];