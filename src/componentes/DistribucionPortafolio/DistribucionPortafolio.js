import React from "react";
import "../../estilos/componentes/distribucion-portafolio.css";

const DistribucionPortafolio = ({ instituciones }) => {

    const totalCapital = instituciones.reduce(
        (total, institucion) =>
            total +
            institucion.inversiones.reduce(
                (suma, inversion) => suma + inversion.monto,
                0
            ),
        0
    );

    const distribucion = instituciones
        .map((institucion) => {

            const capitalInstitucion =
                institucion.inversiones.reduce(
                    (suma, inversion) => suma + inversion.monto,
                    0
                );

            const porcentaje =
                totalCapital > 0
                    ? (capitalInstitucion / totalCapital) * 100
                    : 0;

            return {
                nombre: institucion.nombre,
                capital: capitalInstitucion,
                porcentaje
            };
        })
        .filter((item) => item.capital > 0)
        .sort(
            (a, b) => b.capital - a.capital
        );

    return (
        <section className="contenedor-distribucion-portafolio">
            <div className="contenedor-titulo-distribucion">
                <h3>
                    📊 Diversificación
                </h3>
            </div>
            <div className="contenedor-lista-distribucion">
                {
                    distribucion.length === 0 ?
                        (<div className="contenedor-distribucion-vacia">
                            <h2>🌱 Tu patrimonio está creciendo</h2>
                            <p>
                                Agrega tu primera inversión para comenzar
                            </p>
                        </div>
                        ) : (
                            distribucion.map((elemento) => (
                                <div key={elemento.nombre} className="contenedor-elementos">
                                    <div className="contenedor-elemento-nombre">
                                        {elemento.nombre}
                                    </div>
                                    <div className="contenedor-elemento-porcentaje">
                                        {elemento.porcentaje.toFixed(1)}%
                                    </div>
                                </div>
                            ))
                        )
                }
            </div>
        </section>
    );
};

export default DistribucionPortafolio;
