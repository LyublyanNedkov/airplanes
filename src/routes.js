import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'
import Courses from './components/Courses.vue'
import Contacts from './components/Contacts.vue'
import Audi from './components/Audi.vue'
import Engine from './components/Audi/Engine'
import Gearbox from './components/Audi/Gearbox'
import Bodykit from './components/Audi/Bodykit'
import Wheels from './components/Audi/Wheels'
import Breaks from './components/Audi/Breaks'
import Suspension from './components/Audi/Suspension'
import Turbocharger from './components/Audi/Turbocharger'
import Exhaust_system from './components/Audi/Exhaust_system'

export const routes = [
    { path: '/', component: Home },
    { path: '/Portfolio', component: Portfolio },
    { path: '/Courses', component: Courses },
    { path: '/Contacts', component: Contacts },
    { path: '/Audi', component: Audi },
    { path: '/Audi/Engine', component: Engine },
    { path: '/Audi/Gearbox', component: Gearbox },
    { path: '/Audi/Bodykit', component: Bodykit },
    { path: '/Audi/Wheels', component: Wheels },
    { path: '/Audi/Breaks', component: Breaks },
    { path: '/Audi/Suspension', component: Suspension },
    { path: '/Audi/Turbocharger', component: Turbocharger },
    { path: '/Audi/Exhaust_system', component: Exhaust_system },
];