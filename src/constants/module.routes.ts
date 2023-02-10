import {IRoutes, IModuleRoutes} from "@/interfaces";

export const MODULE_ROUTES: IModuleRoutes [] = [
    {
        name: 'Loader Excel Ratings To Platform',
        description: 'This module allows loading excel ratings to platform',
        image: '',
        to: '/dashboard/load-ratings',
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
    {
        name: 'Dashboard',
        to: '/dashboard',
    }
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