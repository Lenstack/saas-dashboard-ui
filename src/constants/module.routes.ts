import {IRoutes, IModuleRoutes} from "@/interfaces";

export const MODULE_ROUTES: IModuleRoutes [] = [
    {
        name: 'The College Of Engineering',
        description: '18 Groups',
        image: '',
        to: '/dashboard/the-college-of-engineering',
    },
    {
        name: 'The College Of Sciences',
        description: '23 Groups',
        image: '',
        to: '/dashboard/the-college-of-sciences',
    },
    {
        name: 'The College Of Business',
        description: '12 Groups',
        image: '',
        to: '/dashboard/the-college-of-business',
    },
    {
        name: 'The College Of Education',
        description: '8 Groups',
        image: '',
        to: '/dashboard/the-college-of-education',
    },
    {
        name: 'The College Of Arts And Humanities',
        description: '5 Groups',
        image: '',
        to: '/dashboard/the-college-of-arts-and-humanities',
    },
    {
        name: 'The College Of Health And Human Services',
        description: '7 Groups',
        image: '',
        to: '/dashboard/the-college-of-health-and-human-services',
    },
    {
        name: 'The College Of Nursing',
        description: '3 Groups',
        image: '',
        to: '/dashboard/the-college-of-nursing',
    },
    {
        name: 'The College Of Law',
        description: '2 Groups',
        image: '',
        to: '/dashboard/the-college-of-law',
    },
    {
        name: 'The College Of Pharmacy',
        description: '1 Group',
        image: '',
        to: '/dashboard/the-college-of-pharmacy',
    },
    {
        name: 'The College Of Social Work',
        description: '1 Group',
        image: '',
        to: '/dashboard/the-college-of-social-work',
    },
    {
        name: 'The College Of Veterinary Medicine',
        description: '1 Group',
        image: '',
        to: '/dashboard/the-college-of-veterinary-medicine',
    }
]

export const HOME_ROUTES: IRoutes [] = [
    {
        name: 'Features',
        to: '/features',
    },
    {
        name: 'Pricing',
        to: '/pricing',
    },
    {
        name: 'FAQ',
        to: '/faq',
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