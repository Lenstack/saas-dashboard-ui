import {IToast} from "@/interfaces/IToast";
import {useContext, useEffect, useState} from "react";
import {XMarkIcon, CheckIcon} from "@heroicons/react/24/outline";
import {ToastContext} from "@/contexts";
import {toPascalCase} from "@/utils";

const TOAST_TYPES = {
    "success": "text-green-500 dark:text-green-400",
    "error": "text-red-500 dark:text-red-400",
    "info": "text-blue-500 dark:text-blue-400",
    "warning": "text-orange-500 dark:text-orange-400"
}

const TOAST_LOCATIONS = {
    "top-center": "top-5 left-1/2 transform -translate-x-1/2",
    "top-left": "top-5 left-5",
    "top-right": "top-5 right-5",
    "bottom-center": "bottom-5 left-1/2 transform -translate-x-1/2",
    "bottom-left": "bottom-5 left-5",
    "bottom-right": "bottom-5 right-5"
}

export const Toast = ({type, location, duration = 10000, message}: IToast) => {
    const {showToast, setShowToast} = useContext(ToastContext)
    const [locationStyle, setLocationStyle] = useState("")
    const [typeStyle, setTypeStyle] = useState("")

    const handleToast = () => {
        setShowToast(!showToast)
    }

    useEffect(() => {
        setLocationStyle(TOAST_LOCATIONS[location] || TOAST_LOCATIONS["top-right"])
        setTypeStyle(TOAST_TYPES[type] || TOAST_TYPES["info"])
    }, [type, location])

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false)
            }, duration)
            return () => clearTimeout(timer)
        }
    }, [showToast, setShowToast, duration])

    return (
        showToast ? (
            <div
                className={`absolute z-10 ${locationStyle} flex items-center w-full p-4 space-x-4 max-w-xs 
                 border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded`}>
                <span>
                    <CheckIcon className={`w-5 h-5 ${typeStyle}`}/>
                </span>
                <span>{toPascalCase(message)}</span>
                <button className="ml-auto" onClick={handleToast}>
                    <XMarkIcon className="w-5 h-5"/>
                </button>
            </div>
        ) : null
    )
}