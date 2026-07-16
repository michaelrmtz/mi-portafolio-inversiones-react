import React from 'react';
import "../../estilos/componentes/menu-principal.css";

const MenuPrincipal = () => {
    return (
        <header className="menu-principal">

            <div className="menu-principal__contenido">

                <h1 className="menu-principal__logo">
                   📈 Portafolio
                </h1>

                <nav className="menu-principal__navegacion">

                    <button
                        className="
                            menu-principal__enlace
                            menu-principal__enlace--activo
                        "
                    >
                        📊 Portafolio
                    </button>

                    <button className="menu-principal__enlace">
                        💸 Gastos
                    </button>

                    <button className="menu-principal__enlace">
                        💵 Ingresos
                    </button>

                    <button className="menu-principal__enlace">
                        📊 Balance
                    </button>

                </nav>

            </div>

        </header>
    );
};

export default MenuPrincipal;
