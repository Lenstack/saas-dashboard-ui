import {ReactNode} from "react";

export interface IToast {
    type: "success" | "error" | "info" | "warning";
    message: string;
    location: "topCenter" | "topLeft" | "topRight" | "bottomCenter" | "bottomLeft" | "bottomRight";
    duration?: number;
}

export interface IToastProvider {
    children: ReactNode;
}