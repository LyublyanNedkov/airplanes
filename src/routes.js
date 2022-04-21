import Home from './components/Home.vue'
import Products from './components/Products.vue'
import LogIn from './components/LogIn.vue'
import Register from './components/Register.vue'
import Contacts from './components/Contacts.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import Audi from './components/Audi.vue'
import Engine from './components/Audi/Engine.vue'
import Gearbox from './components/Audi/Gearbox.vue'
import Bodykit from './components/Audi/Bodykit.vue'
import Wheels from './components/Audi/Wheels.vue'
import Breaks from './components/Audi/Breaks.vue'
import Suspension from './components/Audi/Suspension.vue'
import Turbocharger from './components/Audi/Turbocharger.vue'
import Exhaust_system from './components/Audi/Exhaust_system.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/Products', component: Products },
    { path: '/LogIn', component: LogIn },
    { path: '/Register', component: Register },
    { path: '/Contacts', component: Contacts },
    { path: '/ShoppingCart', component: ShoppingCart },
    { 
        path: '/Audi',
        name: 'Audi general',
        component: Audi,
        children: [
            {
                path: 'Engine',
                component: Engine,
            },
            {
                path: 'Gearbox',
                component: Gearbox,
            },
            {
                path: 'Bodykit',
                component: Bodykit,
            },
            {
                path: 'Wheels',
                component: Wheels,
            },
            {
                path: 'Breaks',
                component: Breaks,
            },
            {
                path: 'Suspension',
                component: Suspension,
            },
            {
                path: 'Turbocharger',
                component: Turbocharger,
            },
            {
                path: 'Exhaust_system',
                component: Exhaust_system,
            },
        ]
    },
];