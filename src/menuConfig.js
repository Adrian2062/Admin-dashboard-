import {
    LayoutDashboard,
    ShoppingCart,
    Users,
    Settings,
    FileText,
    BarChart2,
    Shield,
    Calendar
} from 'lucide-vue-next';

export const menuItems = [
    {
        category: 'Overview',
        items: [
            {
                label: 'Dashboard',
                icon: LayoutDashboard,
                route: '/',
            },
            {
                label: 'Analytics',
                icon: BarChart2,
                children: [
                    { label: 'Reports', route: '/analytics/reports' },
                    { label: 'Live View', route: '/analytics/live' }
                ]
            },
            {
                label: 'Calendar',
                icon: Calendar,
                route: '/calendar'
            }
        ]
    },
    {
        category: 'Management',
        items: [
            {
                label: 'Users',
                icon: Users,
                route: '/users',
            },
            {
                label: 'Orders',
                icon: ShoppingCart,
                route: '/orders',
            },
            {
                label: 'Invoices',
                icon: FileText,
                children: [
                    { label: 'List', route: '/invoices/list' },
                    { label: 'Create', route: '/invoices/create' }
                ]
            }
        ]
    },
    {
        category: 'System',
        items: [
            {
                label: 'Settings',
                icon: Settings,
                route: '/settings',
            },
            {
                label: 'Security',
                icon: Shield,
                route: '/security',
            }
        ]
    }
];
