import {ReactNode} from "react";

export interface IModal {
    title: string;
    subtitle?: string;
    header?: ReactNode;
    content?: ReactNode;
}

export interface IModalProvider {
    children: ReactNode;
}