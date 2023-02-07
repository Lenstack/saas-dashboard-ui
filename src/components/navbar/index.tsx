import {ReactNode} from "react";
import Link from "next/link";

interface INavbarProps {
    className?: string
    children: ReactNode
}

interface INavbarItemProps {
    className?: string
    href: string
    children: ReactNode
}

export const Navbar = ({children, ...restProps}: INavbarProps) => {
    return (
        <nav {...restProps}>
            {children}
        </nav>
    )
}

Navbar.Item = ({children, ...restProps}: INavbarItemProps) => {
    return (
        <Link {...restProps}>
            {children}
        </Link>
    )
}

Navbar.Content = ({children, ...restProps}: INavbarProps) => {
    return (
        <div {...restProps}>
            {children}
        </div>
    )
}