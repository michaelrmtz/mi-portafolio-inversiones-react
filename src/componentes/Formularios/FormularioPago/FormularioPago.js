import React, { useState } from "react";
import '../../../estilos/componentes/formulario-pago.css';

const FormularioPago = ({ institucionSeleccionada, inversionPagoSeleccionada, agregarPago }) => {

    const [fechaPago, setFechaPago] = useState("");
    const [importePago, setImportePago] = useState("");

    const guardarPago = () => {

        if (!fechaPago || !importePago) {
            return;
        }

        const nuevoPago = {
            id: Date.now(),
            fecha: fechaPago,
            importe: Number(importePago),
            pagado: false,
        };

        agregarPago(
            institucionSeleccionada.id,
            inversionPagoSeleccionada.id,
            nuevoPago
        );

        setFechaPago("");
        setImportePago("");
    };

    return (
        <div className="formulario-pago">

            <div className="formulario-pago__grupo">
                <label className="formulario-pago__label">
                    Fecha
                </label>

                <input
                    type="date"
                    className="formulario-pago__input"
                    value={fechaPago}
                    onChange={(event) =>
                        setFechaPago(event.target.value)
                    }
                />
            </div>

            <div className="formulario-pago__grupo">
                <label className="formulario-pago__label">
                    Importe
                </label>

                <input
                    type="number"
                    step="0.01"
                    className="formulario-pago__input"
                    value={importePago}
                    onChange={(event) =>
                        setImportePago(event.target.value)
                    }
                />
            </div>

            <button
                type="button"
                className="formulario-pago__boton"
                onClick={guardarPago}
            >
                💾 Guardar pago
            </button>
        </div>
    );
};

export default FormularioPago;
