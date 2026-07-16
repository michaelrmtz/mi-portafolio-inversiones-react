import React, { useState } from "react";
import Tesseract from "tesseract.js";
import '../../../estilos/componentes/Genericos/importar-pagos-ocr/importar-pagos-ocr.css';

const ImportarPagosOCR = ({ institucionSeleccionada, inversion, editarInversion, onImportado }) => {

    const [pagos, setPagos] = useState([]);

    const obtenerPagos = (texto) => {

        const meses = {
            Ene: "01",
            Feb: "02",
            Mar: "03",
            Abr: "04",
            May: "05",
            Jun: "06",
            Jul: "07",
            Ago: "08",
            Sep: "09",
            Oct: "10",
            Nov: "11",
            Dic: "12"
        };

        const regex =
            /(\d{2})\s([A-Za-z]{3})\s(\d{4})\s\$([\d,]+\.\d{2})/g;

        const pagosDetectados = [];

        let match;

        while ((match = regex.exec(texto)) !== null) {

            const [
                ,
                dia,
                mes,
                anio,
                importe
            ] = match;

            pagosDetectados.push({
                id: Date.now() + pagosDetectados.length,
                fecha: `${anio}-${meses[mes]}-${dia}`,
                importe: Number(
                    importe.replace(/,/g, "")
                ),
                cobrado: false
            });
        }

        return pagosDetectados;
    };

    const procesarImagen = async (event) => {

        const archivo = event.target.files?.[0];

        if (!archivo) {
            return;
        }

        const resultado = await Tesseract.recognize(
            archivo,
            "spa"
        );

        const pagosEncontrados =
            obtenerPagos(
                resultado.data.text
            );

        setPagos(pagosEncontrados);

        console.log(pagosEncontrados);
    };

    return (
        <div className="importar-pagos">

            <label className="importar-pagos__selector">
                <input
                    type="file"
                    accept="image/*"
                    onChange={procesarImagen}
                />

                <span>
                    📷 Seleccionar captura
                </span>
            </label>

            {
                pagos.length > 0 && (
                    <>
                        <div className="importar-pagos__resumen">
                            ✅ {pagos.length} pagos detectados
                        </div>

                        <div className="importar-pagos__lista">

                            {
                                pagos.map((pago) => (
                                    <div
                                        key={pago.id}
                                        className="importar-pagos__item"
                                    >
                                        <span>
                                            {pago.fecha}
                                        </span>

                                        <strong>
                                            {pago.importe.toLocaleString(
                                                "es-MX",
                                                {
                                                    style: "currency",
                                                    currency: "MXN"
                                                }
                                            )}
                                        </strong>
                                    </div>
                                ))
                            }

                        </div>
                    </>
                )
            }

            <button
                type="button"
                className="importar-pagos__boton"
                disabled={pagos.length === 0}
                onClick={() => {

                    if (
                        !institucionSeleccionada ||
                        !inversion
                    ) {
                        return;
                    }

                    editarInversion(
                        institucionSeleccionada.id,
                        {
                            ...inversion,
                            pagos
                        }
                    );

                    onImportado?.();
                }}
            >
                Importar {pagos.length} pagos
            </button>

        </div>
    );
};

export default ImportarPagosOCR;
