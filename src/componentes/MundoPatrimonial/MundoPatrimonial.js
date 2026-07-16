import React from "react";
import "./mundo-patrimonial.css";

const MundoPatrimonial = ({ capital }) => {

    const obtenerEscenario = () => {

        if (capital <= 0) {
            return {
                ojos: true
            };
        }

        if (capital <= 2500) {
            return {
                personaje: "🧍"
            };
        }

        if (capital <= 5000) {
            return {
                personaje: "🚶",
                caminando: true
            };
        }

        if (capital <= 10000) {
            return {
                personaje: "🚶",
                mochila: true,
                planta: true,
            };
        }

        if (capital <= 20000) {
            return {
                personaje: "🚶",
                portafolio: true,
                planta: true
            };
        }

        if (capital <= 35000) {
            return {
                personaje: "🚲",
                planta: true
            };
        }

        if (capital <= 50000) {
            return {
                personaje: "🚲",
                planta: true,
                flores: true
            };
        }

        if (capital <= 75000) {
            return {
                personaje: "🚲",
                planta: true,
                flores: true,
                arbol: true
            };
        }

        if (capital <= 100000) {
            return {
                personaje: "🛵",
                flores: true
            };
        }

        if (capital <= 150000) {
            return {
                personaje: "🛵",
                planta: true,
                flores: true
            };
        }

        if (capital <= 250000) {
            return {
                personaje: "🛵",
                planta: true,
                flores: true,
                arbol: true
            };
        }

        if (capital <= 400000) {
            return {
                personaje: "🚗"
            };
        }

        if (capital <= 500000) {
            return {
                personaje: "🚗",
                planta: true
            };
        }

        if (capital <= 600000) {
            return {
                personaje: "🚗",
                planta: true,
                flores: true
            };
        }

        if (capital <= 900000) {
            return {
                personaje: "🚗",
                planta: true,
                flores: true,
                arbol: true
            };
        }

        if (capital <= 1000000) {
            return {
                personaje: "🚗",
                casa: "🏠",
                arbol: true
            };
        }

        if (capital <= 1250000) {
            return {
                personaje: "🚗",
                casa: "🏠",
                arbol: true
            };
        }

        if (capital <= 1500000) {
            return {
                personaje: "🚗",
                casa: "🏠",
                arbol: true,
                flores: true
            };
        }

        if (capital <= 1750000) {
            return {
                personaje: "🚗",
                casa: "🏠",
                arbol: true,
                flores: true,
                planta: true
            };
        }

        if (capital <= 2000000) {
            return {
                personaje: "🚗",
                casa: "🏡",
                arbol: true
            };
        }

        if (capital <= 2250000) {
            return {
                personaje: "🚙",
                casa: "🏡",
                arbol: true
            };
        }

        if (capital <= 2500000) {
            return {
                personaje: "🚙",
                casa: "🏡",
                arbol: true,
                flores: true
            };
        }

        if (capital <= 2750000) {
            return {
                personaje: "🚙",
                casa: "🏡",
                arbol: true,
                flores: true,
                planta: true
            };
        }

        if (capital <= 3000000) {
            return {
                personaje: "🚙",
                casa: "🏡",
                arbol: true,
                alberca: true
            };
        }

        if (capital <= 4000000) {
            return {
                personaje: "🚙",
                casa: "🏡",
                arbol: true,
                alberca: true,
                palmera: true
            };
        }

        if (capital <= 5000000) {
            return {
                personaje: "🚙",
                casa: "🏘️",
                arbol: true,
                alberca: true,
                palmera: true
            };
        }

        if (capital <= 7500000) {
            return {
                personaje: "🚙",
                casa: "🏘️",
                arbol: true,
                alberca: true,
                palmera: true,
                avion: true
            };
        }

        if (capital <= 10000000) {
            return {
                personaje: "🚙",
                casa: "🏘️",
                arbol: true,
                alberca: true,
                palmera: true,
                avion: true,
                playa: true
            };
        }

        return {
            personaje: "🚙",
            casa: "🏘️",
            arbol: true,
            alberca: true,
            palmera: true,
            avion: true,
            playa: true,
            helicoptero: true
        };
    };

    const escenario = obtenerEscenario();

    return (
        <section className="mundo-patrimonial">

            <div className="mundo-patrimonial__encabezado">
                <span className="mundo-patrimonial__badge">
                    🌎 Mundo Patrimonial
                </span>
            </div>

            <div className="mundo-patrimonial__escenario">

                <div className="mundo-patrimonial__nube">
                    ☁️
                </div>

                {escenario.ojos && (
                    <div className="mundo-patrimonial__ojos">
                        👀
                    </div>
                )}

                {escenario.casa && (
                    <div className="mundo-patrimonial__casa">
                        {escenario.casa}
                    </div>
                )}

                {escenario.planta && (
                    <div className="mundo-patrimonial__planta">
                        🌱
                    </div>
                )}

                {escenario.flores && (
                    <div className="mundo-patrimonial__flores">
                        🌷
                    </div>
                )}

                {escenario.arbol && (
                    <div className="mundo-patrimonial__arbol">
                        🌳
                    </div>
                )}

                {escenario.mochila && (
                    <div className="mundo-patrimonial__mochila">
                        🎒
                    </div>
                )}

                {escenario.portafolio && (
                    <div className="mundo-patrimonial__portafolio">
                        💼
                    </div>
                )}

                {escenario.alberca && (
                    <div className="mundo-patrimonial__alberca">
                        🏊
                    </div>
                )}

                {escenario.palmera && (
                    <div className="mundo-patrimonial__palmera">
                        🌴
                    </div>
                )}

                {escenario.playa && (
                    <div className="mundo-patrimonial__playa">
                        🏖️
                    </div>
                )}

                {escenario.avion && (
                    <div className="mundo-patrimonial__avion">
                        ✈️
                    </div>
                )}

                {escenario.helicoptero && (
                    <div className="mundo-patrimonial__helicoptero">
                        🚁
                    </div>
                )}

                {escenario.personaje && (
                    <div
                        className={[
                            "mundo-patrimonial__personaje",
                            escenario.caminando
                                ? "mundo-patrimonial__personaje--caminando"
                                : "",
                            escenario.casa
                                ? "mundo-patrimonial__personaje--con-casa"
                                : ""
                        ].join(" ")}
                    >
                        {escenario.personaje}
                    </div>
                )}

            </div>

        </section>
    );
};

export default MundoPatrimonial;
