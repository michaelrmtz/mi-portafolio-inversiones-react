import React, { useEffect, useState } from 'react';
import MenuPrincipal from "../../componentes/MenuPrincipal/MenuPrincipal";
import ModalTutorialPortafolio from '../../componentes/Modales/ModalTutorialPortafolio/ModalTutorialPortafolio';
import Portafolio from "../Portafolio/Portafolio";

const Principal = () => {
    const [mostrarModalTutorialPortafolio, setMostrarTutorialPortafolio] = useState(false);

    useEffect(() => {
        const tutorialVisto = localStorage.getItem("portafolio-visto");

        if (!tutorialVisto) {
            setMostrarTutorialPortafolio(true);
        }
    }, []);

    return (
        <>
            <MenuPrincipal />
            <ModalTutorialPortafolio
                mostrarModalTutorialPortafolio={mostrarModalTutorialPortafolio}
                setMostrarTutorialPortafolio={setMostrarTutorialPortafolio}
            />
            <Portafolio />
        </>
    );
};

export default Principal;
