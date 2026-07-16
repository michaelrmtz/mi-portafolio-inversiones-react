import React from 'react';
import "../../../estilos/componentes/confirmar-eliminar.css";

const ConfirmarEliminarInstitucion = ({ institucion, alConfirmar, alCancelar }) => {

    return (
        <div className="confirmar-eliminar">

            <p className="confirmar-eliminar__mensaje">
                ¿Estás seguro de eliminar la institución
                <strong> "{institucion?.nombre}"</strong>?
            </p>

            <p className="confirmar-eliminar__detalle">
                También se eliminarán todas las inversiones y pagos asociados.
            </p>

            <div className="confirmar-eliminar__acciones">

                <button
                    type="button"
                    className="confirmar-eliminar__cancelar"
                    onClick={alCancelar}
                >
                    Cancelar
                </button>

                <button
                    type="button"
                    className="confirmar-eliminar__eliminar"
                    onClick={alConfirmar}
                >
                    Eliminar
                </button>

            </div>

        </div>
    );
};

export default ConfirmarEliminarInstitucion;
