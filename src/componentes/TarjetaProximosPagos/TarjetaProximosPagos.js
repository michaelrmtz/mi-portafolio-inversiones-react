import React from "react";
import { formatearMoneda } from "../../utilerias/utilerias";
import "../../estilos/componentes/tarjeta-proximos-pagos.css";

const TarjetaProximosPagos = ({ instituciones }) => {

    const obtenerDiasRestantes = (fecha) => {

        const hoy = new Date();

        const hoySinHora = new Date(
            hoy.getFullYear(),
            hoy.getMonth(),
            hoy.getDate()
        );

        const fechaPago = new Date(
            `${fecha}T00:00:00`
        );

        const diferencia =
            fechaPago.getTime() -
            hoySinHora.getTime();

        return Math.ceil(
            diferencia /
            (1000 * 60 * 60 * 24)
        );
    };

    const obtenerTextoDiasRestantes = (fecha) => {

        const dias =
            obtenerDiasRestantes(fecha);

        if (dias < 0) {
            return "🔴 Pendiente";
        }

        if (dias === 0) {
            return "🟢 Hoy";
        }

        if (dias === 1) {
            return "🟠 Mañana";
        }

        return `⏳ En ${dias} días`;
    };

    const formatearFecha = (fecha) => {

        return new Date(
            `${fecha}T00:00:00`
        ).toLocaleDateString(
            "es-MX",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );
    };

    const proximosPagos = instituciones
        .flatMap((institucion) =>
            institucion.inversiones
                .filter(
                    (inversion) =>
                        inversion.tipoSeguimiento === "pagos"
                )
                .flatMap((inversion) =>
                    (inversion.pagos || [])
                        .filter(
                            (pago) => !pago.pagado
                        )
                        .map((pago) => ({
                            ...pago,
                            institucion:
                                institucion.nombre,
                            inversion:
                                inversion.nombre
                        }))
                )
        )
        .sort(
            (a, b) =>
                new Date(a.fecha) -
                new Date(b.fecha)
        )
        .slice(0, 8);

    return (
        <section className="tarjeta-proximos-pagos">

            <h3 className="tarjeta-proximos-pagos__titulo">
                🔔 Próximos pagos
            </h3>

            {
                proximosPagos.length === 0 ? (
                    <p className="tarjeta-proximos-pagos__vacio">
                        No hay pagos pendientes.
                    </p>
                ) : (

                    <div className="tarjeta-proximos-pagos__lista">

                        {
                            proximosPagos.map((pago) => (

                                <article
                                    key={pago.id}
                                    className="tarjeta-proximos-pagos__item"
                                >

                                    <div className="tarjeta-proximos-pagos__institucion">
                                        {pago.institucion}
                                    </div>

                                    <div className="tarjeta-proximos-pagos__inversion">
                                        {pago.inversion}
                                    </div>

                                    <div className="tarjeta-proximos-pagos__fecha">
                                        📅 {formatearFecha(
                                            pago.fecha
                                        )}
                                    </div>

                                    <div className="tarjeta-proximos-pagos__importe">
                                        💰 {
                                            formatearMoneda(
                                                pago.importe
                                            )
                                        }
                                    </div>

                                    <div className="tarjeta-proximos-pagos__dias">
                                        {
                                            obtenerTextoDiasRestantes(
                                                pago.fecha
                                            )
                                        }
                                    </div>

                                </article>

                            ))
                        }

                    </div>

                )
            }

        </section>
    );
};

export default TarjetaProximosPagos;
