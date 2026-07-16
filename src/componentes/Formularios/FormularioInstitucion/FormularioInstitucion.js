import React from "react";
import "../../../estilos/componentes/formulario-institucion.css";

const FormularioInstitucion = ({ nombreInstitucion, setNombreInstitucion, agregarInstitucion }) => {
    return (
        <div className="formulario-institucion">
            <div className="formulario-institucion__campo">
                <label className="formulario-institucion__label">
                    Agregar institución
                </label>

                <input
                    type="text"
                    placeholder="Ej. Nu, Klar, Finsus, etc."
                    className="formulario-institucion__input"
                    value={nombreInstitucion}
                    onChange={(event) =>
                        setNombreInstitucion(event.target.value)
                    }
                />
            </div>

            <button
                className="formulario-institucion__boton"
                onClick={agregarInstitucion}
            >
                Agregar
            </button>

        </div>
    );
};

export default FormularioInstitucion;
