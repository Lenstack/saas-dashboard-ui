export interface IToast {
    type: "success" | "error" | "info" | "warning";
    message: string;
    location: "top-center" | "top-left" | "top-right" | "bottom-center" | "bottom-left" | "bottom-right";
    duration?: number;
}