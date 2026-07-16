import React from "react";
import { formatearMoneda } from "../../utilerias/utilerias";
import "../../estilos/componentes/detalle-pagos.css";

const DetallePagos = ({ inversionPagosSeleccionada, institucionSeleccionada, marcarPagoComoCobrado }) => {

    const pagos = inversionPagosSeleccionada?.pagos || [];

    const totalEsperado = pagos.reduce(
        (total, pago) =>
            total + pago.importe,
        0
    );

    const totalCobrado = pagos
        .filter((pago) => pago.pagado)
        .reduce(
            (total, pago) =>
                total + pago.importe,
            0
        );

    const totalPendiente = pagos
        .filter((pago) => !pago.pagado)
        .reduce(
            (total, pago) =>
                total + pago.importe,
            0
        );

    return (
        <div className="detalle-pagos">

            <h3 className="detalle-pagos__titulo">
                {inversionPagosSeleccionada?.nombre}
            </h3>

            <div className="detalle-pagos__resumen">

                <div className="detalle-pagos__tarjeta">
                    <span>📈 Esperado</span>

                    <strong>
                        {formatearMoneda(
                            totalEsperado
                        )}
                    </strong>
                </div>

                <div className="detalle-pagos__tarjeta">
                    <span>✅ Cobrado</span>

                    <strong>
                        {formatearMoneda(
                            totalCobrado
                        )}
                    </strong>
                </div>

                <div className="detalle-pagos__tarjeta">
                    <span>⏳ Pendiente</span>

                    <strong>
                        {formatearMoneda(
                            totalPendiente
                        )}
                    </strong>
                </div>

            </div>

            <h4>Pagos</h4>

            {pagos.length === 0 ? (
                <p>
                    No hay pagos registrados.
                </p>
            ) : (
                <div className="detalle-pagos__lista">

                    {pagos.map((pago) => (
                        <div
                            key={pago.id}
                            className="detalle-pagos__item"
                        >
                            <div className="detalle-pagos__info">

                                <span className="detalle-pagos__estado">
                                    {pago.pagado
                                        ? "✅ Cobrado"
                                        : "⏳ Pendiente"}
                                </span>

                                <span className="detalle-pagos__fecha">
                                    {pago.fecha}
                                </span>

                                <strong className="detalle-pagos__importe">
                                    {formatearMoneda(
                                        pago.importe
                                    )}
                                </strong>

                            </div>

                            <div className="detalle-pagos__acciones">
                                <button
                                    type="button"
                                    onClick={() => {

                                        if (
                                            !institucionSeleccionada ||
                                            !inversionPagosSeleccionada
                                        ) {
                                            return;
                                        }

                                        marcarPagoComoCobrado(
                                            institucionSeleccionada.id,
                                            inversionPagosSeleccionada.id,
                                            pago.id
                                        );
                                    }}
                                >
                                    ✅
                                </button>

                                <button type="button">
                                    ✏️
                                </button>

                                <button type="button">
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
};

export default DetallePagos;
