import {ReactNode} from "react";


export interface IBreadcrumbProps {
    className?: string;
    children?: ReactNode;
}

export interface IBreadcrumbItemProps {
    to: string;
    children?: ReactNode;
}