import React, {createContext, useState} from "react";
import {IToast, IToastProvider} from "@/interfaces";
import {Toast} from "@/components";

export const ToastContext = createContext({
    showToast: {} as boolean | IToast,
    setShowToast: (showToast: boolean | IToast) => {
    }
})

export const ToastProvider = ({children}: IToastProvider) => {
    const [showToast, setShowToast] = useState({
        type: "info",
        message: "Default message",
        location: "topRight",
    } as boolean | IToast);

    return (
        <ToastContext.Provider value={{showToast, setShowToast}}>
            {typeof showToast === "object" && <Toast {...showToast} />}
            {children}
        </ToastContext.Provider>
    )
}