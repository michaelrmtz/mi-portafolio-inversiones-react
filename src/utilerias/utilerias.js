export const formatearMoneda = (cantidad) => {
    return `$${cantidad.toLocaleString(
        "en-US",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    )}`;
};

export const obtenerDiasTranscurridos = (
    fecha
) => {

    const hoy = new Date();

    hoy.setHours(
        0,
        0,
        0,
        0
    );

    const [anio, mes, dia] =
        fecha.split("-").map(Number);

    const fechaCreacion =
        new Date(
            anio,
            mes - 1,
            dia
        );

    fechaCreacion.setHours(
        0,
        0,
        0,
        0
    );

    return Math.floor(
        (
            hoy -
            fechaCreacion
        ) /
        (
            1000 *
            60 *
            60 *
            24
        )
    );
};