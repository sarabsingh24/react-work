import React, { useState, useContext } from "react";

const FirstContext = React.createContext();

const FirstProvider = ({ children}) => {

    const [showMenu, setShowMenu] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const showHideMenu = () => {
        setShowMenu(!showMenu);
    }
    const showHideModal = () => {

        setShowModal(!showModal);
    }

    return <FirstContext.Provider value={{ showHideMenu, showMenu, setShowMenu, showModal, setShowModal, showHideModal }}>{children}</FirstContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(FirstContext)
}

export { FirstProvider };
