import { useCallback } from "react";

const usePagos = (instituciones, setInstituciones) => {

    const agregarPago = (institucionId, inversionId, pago) => {
        setInstituciones(
            instituciones.map(
                (institucion) => {
                    if (institucion.id !== institucionId) {
                        return institucion;
                    }

                    return {
                        ...institucion,
                        inversiones:
                            institucion.inversiones.map(
                                (inversion) => {
                                    if (inversion.id !== inversionId) {
                                        return inversion;
                                    }

                                    return {
                                        ...inversion,
                                        pagos: [
                                            ...(inversion.pagos || []),
                                            pago
                                        ]
                                    };
                                }
                            )
                    };
                }
            )
        );
    };

    const marcarPagoComoCobrado = (institucionId, inversionId, pagoId) => {
        setInstituciones(
            instituciones.map((institucion) => {

                if (institucion.id !== institucionId) {
                    return institucion;
                }

                return {
                    ...institucion,
                    inversiones:
                        institucion.inversiones.map(
                            (inversion) => {

                                if (
                                    inversion.id !== inversionId
                                ) {
                                    return inversion;
                                }

                                return {
                                    ...inversion,
                                    pagos: inversion.pagos.map(
                                        (pago) => {

                                            if (
                                                pago.id !== pagoId
                                            ) {
                                                return pago;
                                            }

                                            return {
                                                ...pago,
                                                pagado:
                                                    !pago.pagado
                                            };
                                        }
                                    )
                                };
                            }
                        )
                };
            })
        );
    };

    const eliminarPago = (
        institucionId,
        inversionId,
        pagoId
    ) => {

        setInstituciones(
            instituciones.map(
                (institucion) => {

                    if (
                        institucion.id !== institucionId
                    ) {
                        return institucion;
                    }

                    return {
                        ...institucion,
                        inversiones:
                            institucion.inversiones.map(
                                (inversion) => {

                                    if (
                                        inversion.id !== inversionId
                                    ) {
                                        return inversion;
                                    }

                                    return {
                                        ...inversion,
                                        pagos:
                                            inversion.pagos.filter(
                                                (pago) =>
                                                    pago.id !== pagoId
                                            )
                                    };
                                }
                            )
                    };
                }
            )
        );
    };

    const editarPago = (
        institucionId,
        inversionId,
        pagoActualizado
    ) => {

        setInstituciones(
            instituciones.map(
                (institucion) => {

                    if (
                        institucion.id !== institucionId
                    ) {
                        return institucion;
                    }

                    return {
                        ...institucion,
                        inversiones:
                            institucion.inversiones.map(
                                (inversion) => {

                                    if (
                                        inversion.id !== inversionId
                                    ) {
                                        return inversion;
                                    }

                                    return {
                                        ...inversion,
                                        pagos:
                                            inversion.pagos.map(
                                                (pago) => {

                                                    if (
                                                        pago.id !==
                                                        pagoActualizado.id
                                                    ) {
                                                        return pago;
                                                    }

                                                    return pagoActualizado;

                                                }
                                            )
                                    };

                                }
                            )
                    };

                }
            )
        );
    };

    return {
        agregarPago,
        marcarPagoComoCobrado,
        eliminarPago,
        editarPago,
    };
};

export default usePagos;
