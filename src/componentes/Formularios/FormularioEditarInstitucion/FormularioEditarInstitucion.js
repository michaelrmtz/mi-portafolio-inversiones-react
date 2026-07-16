
import React, { useState } from 'react';
import '../../../estilos/componentes/formulario-editar-institucion.css';

const FormularioEditarInstitucion = ({ institucion, actualizarNombre, alGuardar, alCancelar }) => {

    const [nombre, setNombre] = useState(
        institucion?.nombre || ""
    );

    const guardar = () => {

        if (!nombre.trim()) {
            return;
        }

        actualizarNombre(
            institucion.id,
            nombre.trim()
        );

        alGuardar?.();
    };

    return (
        <div className="formulario-editar">
            <div>
                <label>
                    Nombre de la institución:
                </label>

                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div className="formulario-editar__acciones">
                <button
                    type="button"
                    className="formulario-editar__cancelar"
                    onClick={alCancelar}
                >
                    Cancelar
                </button>

                <button
                    type="button"
                    className="formulario-editar__guardar"
                    onClick={guardar}
                >
                    Guardar cambios
                </button>
            </div>
        </div>
    );
};

export default FormularioEditarInstitucion;
