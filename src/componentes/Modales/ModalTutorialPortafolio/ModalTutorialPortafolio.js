import React from "react";
import { Joyride } from "react-joyride";

const pasosTutorial = [
    {
        target: ".menu-principal",
        content: "Desde aquí podrás navegar por las distintas secciones de la aplicación."
    },
    {
        target: ".contenedor-encabezado-portafolio",
        content: "Aquí verás el capital total invertido y el número de instituciones financieras registradas."
    },
    {
        target: ".mundo-patrimonial",
        content: "Aquí visualizarás una representación de tu mundo patrimonial."
    },
    {
        target: ".contenedor-distribucion-portafolio",
        content: "Aquí notarás cómo está distribuido tu capital."
    },
        {
        target: ".tarjeta-proximos-pagos",
        content: "Desde aquí podrás enterarte de tus próximos pagos de inversiones."
    },
    {
        target: ".formulario-institucion",
        content: "Aquí podrás agregar una institución financiera como Nu, BBVA México, Mercado Pago, etc."
    }
];

const ModalTutorialPortafolio = ({ mostrarModalTutorialPortafolio, setMostrarTutorialPortafolio }) => {
    return (
        <Joyride
            steps={pasosTutorial}
            run={mostrarModalTutorialPortafolio}
            continuous
            showSkipButton
            showProgress
            disableScrolling
            disableScrollParentFix
            locale={{
                back: "Anterior",
                close: "Cerrar",
                last: "Finalizar",
                next: "Siguiente",
                skip: "Omitir"
            }}
            styles={{
                options: {
                    primaryColor: "#7c3aed",
                    zIndex: 10000
                }
            }}
            onEvent={(data) => {
                if (data.action === "stop" || data.action === "reset") {
                    localStorage.setItem("portafolio-visto", "true");
                    setMostrarTutorialPortafolio(false);
                }
            }}
        />
    );
};

export default ModalTutorialPortafolio;
