import {createContext, useState} from "react";
import {IModalProvider} from "@/interfaces/IModal";

export const ModalContext = createContext({
    showModal: false,
    setShowModal: (showModal: boolean) => {
    },
})

export const ModalProvider = ({children}: IModalProvider) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <ModalContext.Provider value={{showModal, setShowModal}}>
            {children}
        </ModalContext.Provider>
    )
}