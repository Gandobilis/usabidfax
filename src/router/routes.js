// Name attribute could be added to the routes object.
const routes = [
    {
        path: '/',
        component: () => import('../views/Main.vue')
    },
    {
        /*
         This route should be constructed dynamically.
         Every slug in url must be part of a some filer.
        */
        path: '/:vin',
        component: () => import('../views/Car.vue')
    },
    {
        path: '/contact',
        component: () => import('../views/Contact.vue')
    }
]

export default routes