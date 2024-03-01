import Home from '~/pages/Home';
import About from "~/pages/About";
import Services from "~/pages/Services";
import Contact from "~/pages/Contact";

const publicRoutes = [
    {
        path: '/', components: Home
    },
    {
        path: '/about', components: About
    },
    {
        path: '/services', components: Services
    },
    {
        path: '/contact', components: Contact
    }
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes};