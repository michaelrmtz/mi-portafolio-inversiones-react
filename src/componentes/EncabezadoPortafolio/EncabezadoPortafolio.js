import React from "react";
import "../../estilos/componentes/encabezado-portafolio.css";

const EncabezadoPortafolio = ({ capitalTotal, totalInstituciones }) => {
    return (
        <header className="contenedor-encabezado-portafolio">
            <div className="contenedor-titulo-capital-total">
                <div className="contenedor-titulo">
                    <h2>Mi Capital</h2>
                </div>
                <div className="contenedor-capital-total">
                    <h2>
                        💰{capitalTotal}
                    </h2>
                </div>
            </div>

            <div className="contenedor-titulo-total-instituciones">
                <div className="contenedor-titulo-instituciones">
                    🏦 Instituciones
                </div>
                <div className="contenedor-total-instituciones">
                    <strong>{totalInstituciones}</strong>
                </div>
            </div>
        </header>
    );
};

export default EncabezadoPortafolio;
