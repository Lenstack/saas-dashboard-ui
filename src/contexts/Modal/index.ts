import {createContext} from "react";

export const ModalContext = createContext({
    showModal: false,
    setShowModal: (showModal: boolean) => {
    },
})