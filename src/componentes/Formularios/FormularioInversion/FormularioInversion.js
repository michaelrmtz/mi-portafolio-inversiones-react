import React, { useEffect, useState } from "react";
import '../../../estilos/componentes/formulario-inversion.css';

const FormularioInversion = ({ institucionSeleccionada, agregarInversion, inversionSeleccionada, editarInversion, alGuardar }) => {

    const [nombreInversion, setNombreInversion] = useState("");
    const [tipoInversion, setTipoInversion] = useState("");
    const [montoInversion, setMontoInversion] = useState("");
    const [tasaInversion, setTasaInversion] = useState("");
    const [fechaVencimiento, setFechaVencimiento] = useState("");
    const [frecuenciaRendimiento, setFrecuenciaRendimiento] = useState("");
    const [tipoSeguimiento, setTipoSeguimiento] = useState("");

    const guardarInversion = () => {
        if (!nombreInversion || !tipoInversion || !montoInversion || !tipoSeguimiento) {
            return;
        }

        if (tipoSeguimiento === "pagos" && !frecuenciaRendimiento) {
            return;
        }

        if (tipoInversion === "plazo" && !fechaVencimiento) {
            return;
        }

        if (inversionSeleccionada) {
            editarInversion(
                institucionSeleccionada.id,
                {
                    ...inversionSeleccionada,
                    nombre: nombreInversion,
                    tipo: tipoInversion,
                    tipoSeguimiento,
                    frecuenciaRendimiento,
                    fechaVencimiento,
                    monto: Number(montoInversion),
                    tasa: Number(tasaInversion),
                }
            );
            alGuardar?.();
            return;
        }

        const nuevaInversion = {
            id: Date.now(),
            nombre: nombreInversion,
            tipo: tipoInversion,
            tipoSeguimiento,
            frecuenciaRendimiento,
            fechaVencimiento,
            monto: Number(montoInversion),
            tasa: Number(tasaInversion),
            pagos: [],
            fechaCreacion: new Date().toLocaleDateString("en-CA"),
        };

        agregarInversion(
            institucionSeleccionada.id,
            nuevaInversion
        );
        alGuardar?.();
    };

    const inversiones = institucionSeleccionada?.inversiones || [];

    useEffect(() => {
        if (!inversionSeleccionada) {
            return;
        }
        setNombreInversion(inversionSeleccionada.nombre);
        setTipoInversion(inversionSeleccionada.tipo);
        setMontoInversion(inversionSeleccionada.monto);
        setTasaInversion(inversionSeleccionada.tasa ?? "");
        setFrecuenciaRendimiento(inversionSeleccionada.frecuenciaRendimiento ?? "");
        setFechaVencimiento(inversionSeleccionada.fechaVencimiento ?? "");
        setTipoSeguimiento(inversionSeleccionada.tipoSeguimiento ?? "");
    }, [inversionSeleccionada]);

    return (
        <div className="formulario-inversion">
            <div className="formulario-inversion__grupo">
                <label className="formulario-inversion__label">
                    Nombre de la inversión:
                </label>

                <input
                    type="text"
                    placeholder="Ej. Cajita Nu"
                    className="formulario-inversion__input"
                    value={nombreInversion}
                    onChange={(event) =>
                        setNombreInversion(event.target.value)
                    }
                />
            </div>

            <div className="formulario-inversion__grupo">
                <label className="formulario-inversion__label">
                    Tipo de inversión:
                </label>

                <div className="formulario-inversion__tipos">
                    <label className="formulario-inversion__tipo-card">
                        <input
                            type="radio"
                            name="tipo"
                            value="vista"
                            checked={tipoInversion === "vista"}
                            onChange={(event) => {
                                setTipoInversion(event.target.value);
                                setFrecuenciaRendimiento("");
                            }}
                        />

                        👁️ Cuenta a la vista
                    </label>

                    <label className="formulario-inversion__tipo-card">
                        <input
                            type="radio"
                            name="tipo"
                            value="plazo"
                            checked={tipoInversion === "plazo"}
                            onChange={(event) => {
                                setTipoInversion(event.target.value);
                                setFrecuenciaRendimiento("");
                            }}
                        />

                        🔒 Cuenta a plazo
                    </label>
                </div>
            </div>

            {
                tipoInversion && (
                    <div className="formulario-inversion__grupo">

                        <label className="formulario-inversion__label">
                            ¿Cómo deseas dar seguimiento?
                        </label>

                        <div className="formulario-inversion__tipos">

                            <label className="formulario-inversion__tipo-card">
                                <input
                                    type="radio"
                                    name="seguimiento"
                                    value="automatico"
                                    checked={
                                        tipoSeguimiento === "automatico"
                                    }
                                    onChange={(event) => {
                                        setTipoSeguimiento(event.target.value);
                                        setFrecuenciaRendimiento("");
                                        setFechaVencimiento("");
                                    }}
                                />

                                🤖 Automático
                            </label>

                            <label className="formulario-inversion__tipo-card">
                                <input
                                    type="radio"
                                    name="seguimiento"
                                    value="pagos"
                                    checked={
                                        tipoSeguimiento === "pagos"
                                    }
                                    onChange={(event) => {
                                        setTipoSeguimiento(event.target.value);
                                        setFrecuenciaRendimiento("");
                                        setFechaVencimiento("");
                                    }}
                                />

                                📝 Registrar pagos
                            </label>

                            <label className="formulario-inversion__tipo-card">
                                <input
                                    type="radio"
                                    name="seguimiento"
                                    value="saldo"
                                    checked={
                                        tipoSeguimiento === "saldo"
                                    }
                                    onChange={(event) => {
                                        setTipoSeguimiento(event.target.value);
                                        setFrecuenciaRendimiento("");
                                        setFechaVencimiento("");
                                    }}
                                />

                                💰 Sólo controlar saldo
                            </label>

                        </div>

                    </div>
                )
            }
            {
                tipoSeguimiento === "pagos" &&
                (<div className="formulario-inversion__grupo">
                    <label className="formulario-inversion__label">
                        ¿Cuándo recibes tus rendimientos?
                    </label>

                    <div className="formulario-inversion__tipos">

                        {
                            tipoSeguimiento === "automatico" && tipoInversion === "vista" && (
                                <label className="formulario-inversion__tipo-card">
                                    <input
                                        type="radio"
                                        name="frecuencia"
                                        value="diario"
                                        checked={
                                            frecuenciaRendimiento === "diario"
                                        }
                                        onChange={(event) =>
                                            setFrecuenciaRendimiento(
                                                event.target.value
                                            )
                                        }
                                    />

                                    📈 Diario
                                </label>
                            )
                        }

                        <label className="formulario-inversion__tipo-card">
                            <input
                                type="radio"
                                name="frecuencia"
                                value="mensual"
                                checked={
                                    frecuenciaRendimiento === "mensual"
                                }
                                onChange={(event) =>
                                    setFrecuenciaRendimiento(
                                        event.target.value
                                    )
                                }
                            />

                            📅 Mensual
                        </label>

                        {
                            tipoInversion === "plazo" && (
                                <label className="formulario-inversion__tipo-card">
                                    <input
                                        type="radio"
                                        name="frecuencia"
                                        value="vencimiento"
                                        checked={
                                            frecuenciaRendimiento === "vencimiento"
                                        }
                                        onChange={(event) =>
                                            setFrecuenciaRendimiento(
                                                event.target.value
                                            )
                                        }
                                    />

                                    🏁 Al vencimiento
                                </label>
                            )
                        }

                    </div>
                </div>)
            }

            {
                tipoSeguimiento === "pagos" &&
                tipoInversion === "plazo" && (
                    <div className="formulario-inversion__grupo">

                        <label className="formulario-inversion__label">
                            ¿Cuándo termina la inversión?
                        </label>

                        <input
                            type="date"
                            className="formulario-inversion__input"
                            value={fechaVencimiento}
                            onChange={(event) =>
                                setFechaVencimiento(
                                    event.target.value
                                )
                            }
                        />

                    </div>
                )
            }

            <div className="formulario-inversion__grupo">
                <label className="formulario-inversion__label">
                    Monto invertido:
                </label>

                <input
                    type="number"
                    placeholder="Ej. 25000"
                    className="formulario-inversion__input"
                    value={montoInversion}
                    onChange={(event) =>
                        setMontoInversion(event.target.value)
                    }
                />
            </div>

            {
                tipoSeguimiento !== "saldo" && (
                    <div className="formulario-inversion__grupo">
                        <label className="formulario-inversion__label">
                            Tasa anual (%):
                        </label>

                        <input
                            type="number"
                            step="0.01"
                            placeholder="Ej. 14.00"
                            className="formulario-inversion__input"
                            value={tasaInversion}
                            onChange={(event) =>
                                setTasaInversion(event.target.value)
                            }
                        />
                    </div>
                )
            }

            <button
                type="button"
                className="formulario-inversion__boton"
                onClick={guardarInversion}
            >
                {
                    inversionSeleccionada
                        ? "💾 Actualizar inversión"
                        : "💾 Guardar inversión"
                }
            </button>

        </div>
    );
};

export default FormularioInversion;