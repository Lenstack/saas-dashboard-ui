import {IBreadcrumbItemProps, IBreadcrumbProps} from "@/interfaces";
import Link from "next/link";
import {useRouterPath} from "@/hooks";
import {toPascalCase} from "@/utils";
import {Fragment} from "react";

export const Breadcrumb = ({...restProps}: IBreadcrumbProps) => {
    const route = useRouterPath()
    const paths = route.split('/').filter(Boolean)
    return (
        <div {...restProps}>
            {
                paths.map((path, index) => (
                    <Fragment key={index}>
                        <Breadcrumb.Item
                            to={`/${paths.slice(0, index + 1).join('/')}`}>{toPascalCase(path)}</Breadcrumb.Item>
                        {
                            index !== paths.length - 1 && (
                                <span className="text-gray-400 dark:text-gray-500">/</span>
                            )
                        }
                    </Fragment>
                ))
            }
        </div>
    )
}

Breadcrumb.Item = ({to, children, ...restProps}: IBreadcrumbItemProps) => {
    return (
        <Link href={to} {...restProps}>{children}</Link>
    )
}