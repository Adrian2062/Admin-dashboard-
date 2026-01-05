import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue'),
            meta: { layout: 'auth' }
        },
        {
            path: '/',
            name: 'dashboard',
            component: () => import('../views/Dashboard.vue')
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: () => import('../views/Calendar.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/Profile.vue')
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('../views/Settings.vue')
        },
        // Analytics
        {
            path: '/analytics',
            redirect: '/analytics/reports'
        },
        {
            path: '/analytics/reports',
            name: 'analytics-reports',
            component: () => import('../views/Analytics/Reports.vue')
        },
        {
            path: '/analytics/live',
            name: 'analytics-live',
            component: () => import('../views/Analytics/LiveView.vue')
        },
        // Management
        {
            path: '/users',
            name: 'users',
            component: () => import('../views/Users.vue')
        },
        {
            path: '/orders',
            name: 'orders',
            component: () => import('../views/Orders.vue')
        },
        // Invoices
        {
            path: '/invoices',
            redirect: '/invoices/list'
        },
        {
            path: '/invoices/list',
            name: 'invoices-list',
            component: () => import('../views/Invoices/List.vue')
        },
        {
            path: '/invoices/create',
            name: 'invoices-create',
            component: () => import('../views/Invoices/Create.vue')
        }
    ]
})

export default router
