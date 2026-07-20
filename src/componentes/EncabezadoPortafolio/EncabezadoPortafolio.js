import React from "react";
import "../../estilos/componentes/encabezado-portafolio.css";

/**
 * @description Componente que se encarga de mostrar el título, y el capital total.
 * @param {string} capitalTotal Parámetro cuyo valor debe ser el capital total.
 * @param {number} totalInstituciones Parámetro cuyo valor debe ser el total de las instituciones.
 * @param {boolean} mostrarMontos Parámetro cuyo valor debe ser true o false que indica si se debe mostrar o no el monto.
 * @param {function} setMostrarMontos Parámetro cuyo valor debe ser una función estado que permita setear el mostrar o no el monto.
 * @returns Retorna un elemento JSX.
 */
const EncabezadoPortafolio = ({ capitalTotal, totalInstituciones, mostrarMontos, setMostrarMontos }) => {
    return (
        <header className="contenedor-encabezado-portafolio">
            <div className="contenedor-titulo-capital-total">
                <div className="contenedor-titulo">
                    <h2>Mi Capital</h2>
                    <button
                        type="button"
                        className="boton-ocultar-montos"
                        onClick={() => setMostrarMontos(!mostrarMontos)}
                    >
                        {
                            mostrarMontos ? "👁️" : "🙈"
                        }
                    </button>
                </div>
                <div className="contenedor-capital-total">
                    <h2>
                        💰{
                            mostrarMontos ? capitalTotal : "•••••••"
                        }
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
