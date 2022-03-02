import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'
import Courses from './components/Courses.vue'
import Contacts from './components/Contacts.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/Portfolio', component: Portfolio },
    { path: '/Courses', component: Courses },
    { path: '/Contacts', component: Contacts },
];