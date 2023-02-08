import {ReactNode} from "react";

export interface INavbarProps {
    className?: string
    children: ReactNode
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