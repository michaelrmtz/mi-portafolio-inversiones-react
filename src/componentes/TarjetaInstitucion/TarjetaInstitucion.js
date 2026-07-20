import React, { useState } from "react";
import { formatearMoneda, obtenerDiasTranscurridos } from "../../utilerias/utilerias";
import "../../estilos/componentes/tarjeta-institucion.css";

const TarjetaInstitucion = ({ id, nombre, color, inversiones, eliminarInstitucion, editarInstitucion, abrirModal, seleccionarInversion, eliminarInversion, abrirModalPago,
    abrirModalDetallePagos, abrirModalImportarPagos }) => {

    const [mostrarInversiones, setMostrarInversiones] = useState(false);

    const montoTotal = inversiones.reduce(
        (total, inversion) => {

            if (inversion.tipoSeguimiento === "automatico" && inversion.fechaCreacion) {

                const diasTranscurridos = obtenerDiasTranscurridos(inversion.fechaCreacion);

                const rendimientoDiario = (inversion.monto * (inversion.tasa || 0)) / 100 / 365;

                const rendimientoAcumulado = rendimientoDiario * diasTranscurridos;

                return (
                    total +
                    inversion.monto +
                    rendimientoAcumulado
                );
            }
            return total + inversion.monto;
        },
        0
    );

    const rendimientoTotal = inversiones.reduce(
        (total, inversion) => {

            const pagosRegistrados =
                (inversion.pagos || []).reduce(
                    (subtotal, pago) =>
                        subtotal + pago.importe,
                    0
                );

            let rendimientoCalculado = 0;

            if (inversion.tipoSeguimiento === "automatico" && inversion.fechaCreacion) {
                const diasTranscurridos = obtenerDiasTranscurridos(inversion.fechaCreacion);
                const rendimientoDiario = (inversion.monto * (inversion.tasa || 0)) / 100 / 365;
                rendimientoCalculado = rendimientoDiario * diasTranscurridos;
            }

            return (
                total +
                pagosRegistrados +
                rendimientoCalculado
            );

        },
        0
    );

    return (
        <article
            className="tarjeta-institucion"
            style={{ borderTopColor: color }}
        >
            <div className="tarjeta-institucion__encabezado">

                <div
                    className="tarjeta-institucion__icono"
                    style={{ backgroundColor: color }}
                >
                    {nombre.charAt(0)}
                </div>

                <div className="tarjeta-institucion__titulo">

                    <div className="tarjeta-institucion__nombre-fila">
                        <h3 className="tarjeta-institucion__nombre">
                            {nombre}
                        </h3>

                        <button
                            type="button"
                            className="tarjeta-institucion__editar-nombre"
                            title="Editar nombre"
                            onClick={(event) => {
                                event.stopPropagation();
                                editarInstitucion(id);
                            }}
                        >
                            ✏️
                        </button>
                    </div>

                </div>

                <button
                    type="button"
                    className="tarjeta-institucion__boton-accion"
                    title="Eliminar institución"
                    onClick={(event) => {
                        event.stopPropagation();
                        eliminarInstitucion(id);
                    }}
                >
                    🗑️
                </button>

            </div>

            <p className="tarjeta-institucion__monto">
                {formatearMoneda(montoTotal)}
            </p>

            <p className="tarjeta-institucion__rendimiento">
                +
                {formatearMoneda(
                    rendimientoTotal
                )}
            </p>

            <div className="tarjeta-institucion__pie">

                <div
                    className="tarjeta-institucion__badge"
                    onClick={(event) => {
                        event.stopPropagation();
                        setMostrarInversiones(!mostrarInversiones);
                    }}
                >
                    📈 {inversiones.length} inversiones
                </div>

                <button
                    type="button"
                    title="Agregar inversión"
                    className="tarjeta-institucion__boton-agregar"
                    onClick={(event) => {
                        event.stopPropagation();
                        abrirModal();
                    }}
                >
                    +
                </button>

            </div>

            {mostrarInversiones && (
                <div className="tarjeta-institucion__inversiones">
                    {inversiones.length === 0 ? (
                        <p className="tarjeta-institucion__sin-inversiones">
                            No hay inversiones registradas.
                        </p>
                    ) : (
                        inversiones.map((inversion) => {
                            const esSeguimientoPagos = inversion.tipoSeguimiento === "pagos";
                            const esSeguimientoAutomatico = inversion.tipoSeguimiento === "automatico";
                            const esSeguimientoSaldo = inversion.tipoSeguimiento === "saldo";
                            return (
                                <div
                                    key={inversion.id}
                                    className="tarjeta-institucion__inversion"
                                >
                                    <div>
                                        {inversion.tipo === "plazo" ? "🔒" : "👁️"}{" "}{inversion.nombre}
                                    </div>
                                    <div className="tarjeta-institucion__detalle">

                                        <strong className="tarjeta-institucion__monto-inversion">
                                            {formatearMoneda(
                                                inversion.monto
                                            )}
                                        </strong>

                                    </div>

                                    <div className="tarjeta-institucion__acciones-inversion">

                                        <button
                                            type="button"
                                            title="Editar inversión"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                seleccionarInversion(inversion);
                                            }}
                                        >
                                            ✏️
                                        </button>

                                        {
                                            esSeguimientoPagos && (
                                                <button
                                                    type="button"
                                                    title="Registrar pago"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        abrirModalPago(inversion);
                                                    }}
                                                >
                                                    ➕
                                                </button>
                                            )
                                        }

                                        {
                                            esSeguimientoPagos && (
                                                <button
                                                    type="button"
                                                    title="Importar pagos desde imagen"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        abrirModalImportarPagos(inversion);
                                                    }}
                                                >
                                                    📷
                                                </button>
                                            )
                                        }

                                        {
                                            esSeguimientoPagos && (
                                                <button
                                                    type="button"
                                                    title="Ver pagos"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        abrirModalDetallePagos(inversion);
                                                    }}
                                                >
                                                    📋
                                                </button>
                                            )
                                        }

                                        <button
                                            type="button"
                                            title="Eliminar"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                const confirmar = window.confirm(`¿Eliminar la inversión "${inversion.nombre}"?`);
                                                if (!confirmar) {
                                                    return;
                                                }
                                                eliminarInversion(id, inversion.id);
                                            }}
                                        >
                                            🗑️
                                        </button>

                                    </div>
                                </div>
                            )
                        }
                        )
                    )}
                </div>
            )}
        </article>
    );
};

export default TarjetaInstitucion;

