import Link from "next/link";
import {INavbarContentProps, INavbarItemProps, INavbarProps} from "@/interfaces";
import {useRouter} from "next/router";

export const Navbar = ({items, children, ...restProps}: INavbarProps) => {
    const {asPath} = useRouter()
    return (
        <nav {...restProps}>
            {
                items?.map((item, index) => (
                    <Navbar.Item key={index} href={item.to}
                                 className={`${item.to === asPath ? "" : ""}`}>{item.name}</Navbar.Item>
                ))
            }
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