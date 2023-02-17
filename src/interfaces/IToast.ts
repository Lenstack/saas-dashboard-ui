export interface IToast {
    type: "success" | "error" | "info" | "warning";
    message: string;
    location: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    duration?: number;
}