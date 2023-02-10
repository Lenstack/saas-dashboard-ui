import {IModuleRoutes} from "@/interfaces";

export const MODULE_ROUTES: IModuleRoutes [] = [
    {
        name: 'Loader Excel Ratings To Platform',
        description: 'This module allows loading excel ratings to platform',
        to: '/dashboard/load-ratings',
        color: '#ff8c00'
    },
    {
        name: 'Module For Student Ratings',
        description: 'This module allows managing student ratings',
        to: '/dashboard',
        color: '#ff8c00'
    },
]
