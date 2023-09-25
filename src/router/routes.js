export default [
    {
        path: '/',
        component: () => import('../views/Main.vue')
    },
    {
        path: '/:id',
        component: () => import('../views/Car.vue')
    },
    {
        path: '/contact',
        component: () => import('../views/Contact.vue')
    },
    // {
    //     path: '/admin/car-list',
    //     component: () => import('../views/CarList.vue')
    // },
    // {
    //     path: '/admin/add-car',
    //     component: () => import('../views/AddCar.vue')
    // }
]