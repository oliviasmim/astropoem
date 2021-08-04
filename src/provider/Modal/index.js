import { createContext, useContext } from "react";
import { useState } from "react";
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <ModalContext.Provider value={{handleOpen, handleClose, showModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext);