import { useEffect, useState } from "react";
import { formatearMoneda, obtenerDiasTranscurridos } from "../utilerias/utilerias";

const useInstituciones = () => {

    const obtenerInstitucionesIniciales = () => {
        const institucionesGuardadas = localStorage.getItem("instituciones");

        if (institucionesGuardadas) {
            return JSON.parse(institucionesGuardadas);
        }

        return [];
    };

    const [nombreInstitucion, setNombreInstitucion] = useState("");
    const [instituciones, setInstituciones] = useState(obtenerInstitucionesIniciales);

    const agregarInversion = (institucionId, inversion) => {
        setInstituciones(
            instituciones.map((institucion) => {
                if (institucion.id !== institucionId) {
                    return institucion;
                }

                return {
                    ...institucion,
                    inversiones: [
                        ...institucion.inversiones,
                        inversion
                    ]
                };
            })
        );
    };

    const editarInversion = (institucionId, inversionActualizada) => {
        setInstituciones(
            instituciones.map((institucion) => {
                if (institucion.id !== institucionId) {
                    return institucion;
                }

                return {
                    ...institucion,
                    inversiones:
                        institucion.inversiones.map(
                            (inversion) =>
                                inversion.id ===
                                    inversionActualizada.id
                                    ? inversionActualizada
                                    : inversion
                        )
                };
            })
        );
    };

    const eliminarInversion = (
        institucionId,
        inversionId
    ) => {
        setInstituciones(
            instituciones.map((institucion) => {
                if (
                    institucion.id !== institucionId
                ) {
                    return institucion;
                }

                return {
                    ...institucion,
                    inversiones:
                        institucion.inversiones.filter(
                            (inversion) =>
                                inversion.id !== inversionId
                        )
                };
            })
        );
    };

    const agregarInstitucion = () => {
        if (!nombreInstitucion.trim()) {
            return;
        }

        const nuevaInstitucion = {
            id: Date.now(),
            nombre: nombreInstitucion,
            color: "#6366f1",
            inversiones: []
        };

        setInstituciones([
            ...instituciones,
            nuevaInstitucion
        ]);

        setNombreInstitucion("");
    };

    const eliminarInstitucion = (id) => {
        setInstituciones(
            instituciones.filter(
                (institucion) =>
                    institucion.id !== id
            )
        );
    };

    const editarInstitucion = (id, nuevoNombre) => {

        if (!nuevoNombre.trim()) {
            return;
        }

        setInstituciones(
            instituciones.map((institucion) =>
                institucion.id === id
                    ? {
                        ...institucion,
                        nombre: nuevoNombre
                    }
                    : institucion
            )
        );
    };

    const capitalTotal = instituciones.reduce(
        (totalInstituciones, institucion) => {

            const inversiones =
                Array.isArray(
                    institucion.inversiones
                )
                    ? institucion.inversiones
                    : [];

            const totalInversiones =
                inversiones.reduce(
                    (total, inversion) => {

                        const esNu =
                            institucion.nombre
                                .toLowerCase() ===
                            "nu";

                        if (
                            esNu &&
                            inversion.fechaCreacion
                        ) {

                            const diasTranscurridos = obtenerDiasTranscurridos(inversion.fechaCreacion);

                            const rendimientoDiario =
                                (
                                    inversion.monto *
                                    (inversion.tasa || 0)
                                ) / 100 / 365;

                            const rendimientoAcumulado =
                                rendimientoDiario *
                                diasTranscurridos;

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

            return (
                totalInstituciones +
                totalInversiones
            );
        },
        0
    );

    const capitalTotalFormateado = formatearMoneda(capitalTotal);

    useEffect(() => {
        localStorage.setItem("instituciones", JSON.stringify(instituciones));
    }, [instituciones]);

    return {
        instituciones,
        nombreInstitucion,
        setNombreInstitucion,
        agregarInstitucion,
        eliminarInstitucion,
        capitalTotalFormateado,
        editarInstitucion,
        agregarInversion,
        editarInversion,
        eliminarInversion,
        setInstituciones,
        capitalTotal,
    };
};

export default useInstituciones;
