import {useContext, useState} from "react";
import {IModal} from "@/interfaces";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {ModalContext} from "@/contexts";

export const Modal = ({title, subtitle, header, content}: IModal) => {
    const {showModal, setShowModal} = useContext(ModalContext)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div className="modal">
            <button className="btn" onClick={toggleModal}>{title}</button>
            {
                showModal && (
                    <div className="modal__overlay">
                        <div className="modal__content">
                            <div className="modal__header">
                                <header>
                                    <h3 className="modal__title">{header}</h3>
                                    <p>{subtitle}</p>
                                </header>
                                <button onClick={toggleModal}>
                                    <XMarkIcon className="w-5 h-5"/>
                                </button>
                            </div>
                            <div className="modal__body">
                                {content}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}