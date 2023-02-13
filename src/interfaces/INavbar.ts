import {ReactNode} from "react";
import {IRoutes} from "@/interfaces/IRoutes";

export interface INavbarProps {
    className?: string
    items?: IRoutes[]
    children?: ReactNode
}

export interface INavbarContentProps {
    className?: string
    children: ReactNode
}

export interface INavbarItemProps {
    className?: string
    href: string
    children: ReactNode
}