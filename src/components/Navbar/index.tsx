import Link from "next/link";
import {INavbarContentProps, INavbarItemProps, INavbarProps} from "@/interfaces";

export const Navbar = ({children, ...restProps}: INavbarProps) => {
    return (
        <nav {...restProps}>
            {children}
        </nav>
    )
}

Navbar.Content = ({children, ...restProps}: INavbarContentProps) => {
    return (
        <div {...restProps}>
            {children}
        </div>
    )
}

Navbar.Item = ({children, ...restProps}: INavbarItemProps) => {
    return (
        <Link {...restProps}>
            {children}
        </Link>
    )
}