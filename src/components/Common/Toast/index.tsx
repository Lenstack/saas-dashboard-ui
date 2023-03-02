import {useContext, useEffect} from "react";
import {
    XMarkIcon,
    CheckIcon,
    InformationCircleIcon,
    ExclamationTriangleIcon,
    ExclamationCircleIcon
} from "@heroicons/react/24/outline";
import {ToastContext} from "@/contexts";
import {IToast} from "@/interfaces";

const TOAST_LOCATIONS = {
    topCenter: "top-5 left-1/2 transform -translate-x-1/2",
    topLeft: "top-5 left-5",
    topRight: "top-5 right-5",
    bottomCenter: "bottom-5 left-1/2 transform -translate-x-1/2",
    bottomLeft: "bottom-5 left-5",
    bottomRight: "bottom-5 right-5",
}

const TOAST_ICONS = {
    success: <CheckIcon className="w-5 h-5 text-green-500 dark:text-green-400"/>,
    error: <ExclamationCircleIcon className="w-5 h-5 text-red-500 dark:text-red-400"/>,
    info: <InformationCircleIcon className="w-5 h-5 text-blue-500 dark:text-blue-400"/>,
    warning: <ExclamationTriangleIcon className="w-5 h-5 text-orange-500 dark:text-orange-400"/>,
}

export const Toast = ({type, location, duration = 5000, message}: IToast) => {
    const {showToast, setShowToast} = useContext(ToastContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false)
        }, duration);

        return () => clearTimeout(timer)
    }, [duration, setShowToast])

    return (
        <>
            {
                showToast && (
                    <aside className={`absolute z-10 flex justify-between items-center w-full p-4 space-x-4 max-w-xs
                    border dark:border-[#1f1f1f] bg-[#fafafa] dark:bg-[#161616] rounded ${TOAST_LOCATIONS[location]}`}>
                        <div className="flex items-center gap-5">
                            {TOAST_ICONS[type]}
                            <span className="">{message}</span>
                        </div>
                        <button className="ml-auto" onClick={() => {
                            setShowToast(false)
                        }}>
                            <XMarkIcon className="w-5 h-5"/>
                        </button>
                    </aside>
                )
            }
        </>
    )
}