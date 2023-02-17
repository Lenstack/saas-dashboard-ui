import {createContext} from "react";

export const ToastContext = createContext({
    showToast: false,
    setShowToast: (showToast: boolean) => {},
})