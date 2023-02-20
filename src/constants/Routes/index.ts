import {IRoutes, IModuleRoutes} from "@/interfaces";

export const MODULE_ROUTES: IModuleRoutes [] = [
    {
        name: 'The College Of Engineering',
        description: '18 Groups',
        image: '',
        to: '/dashboard/institutions/the-college-of-engineering',
    },
    {
        name: 'The College Of Engineering',
        description: '18 Groups',
        image: '',
        to: '/dashboard/institutions/the-college-of-engineering',
    }
]

export const HOME_ROUTES: IRoutes [] = [
    {
        name: 'FAQ',
        to: '#faq',
    },
    {
        name: 'Plans',
        to: '#plans',
    },
    {
        name: 'Testimonials',
        to: '#testimonials',
    },
    {
        name: 'Features',
        to: '#features',
    }
]

export const DASHBOARD_ROUTES: IRoutes [] = [
    {
        name: 'Overview',
        to: '/dashboard',
    },
    {
        name: 'Institutions',
        to: '/dashboard/institutions',
    },
    {
        name: 'Settings',
        to: '/dashboard/settings',
    },
]

export const SETTINGS_ROUTES: IRoutes [] = [
    {
        name: 'General',
        to: '/dashboard/settings',
    },
    {
        name: 'Security',
        to: '/dashboard/settings/security',
    },
    {
        name: 'Billing',
        to: '/dashboard/settings/billing',
    },
    {
        name: 'Teams',
        to: '/dashboard/settings/teams',
    },
    {
        name: 'Notifications',
        to: '/dashboard/settings/notifications',
    },
    {
        name: 'API Keys',
        to: '/dashboard/settings/api-keys',
    },
]

export const AUTH_ROUTES: IRoutes [] = [
    {
        name: 'Sign In',
        to: '/authentication/sign-in',
    },
    {
        name: 'Sign Up',
        to: '/authentication/sign-up',
    }
]