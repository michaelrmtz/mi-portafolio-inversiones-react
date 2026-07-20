import React, { useState, useEffect } from "react";
import EncabezadoPortafolio from "../../componentes/EncabezadoPortafolio/EncabezadoPortafolio";
import TarjetaInstitucion from "../../componentes/TarjetaInstitucion/TarjetaInstitucion";
import Modal from "../../componentes/Modales/Modal/Modal";
import FormularioInstitucion from "../../componentes/Formularios/FormularioInstitucion/FormularioInstitucion";
import FormularioInversion from "../../componentes/Formularios/FormularioInversion/FormularioInversion";
import FormularioPago from "../../componentes/Formularios/FormularioPago/FormularioPago";
import FormularioEditarInstitucion from "../../componentes/Formularios/FormularioEditarInstitucion/FormularioEditarInstitucion";
import ConfirmarEliminarInstitucion from "../../componentes/Formularios/ConfirmarEliminarInstitucion/ConfirmarEliminarInstitucion";
import useInstituciones from "../../hooks/useInstituciones";
import usePagos from "../../hooks/usePagos";
import DetallePagos from "../../componentes/DetallePagos/Detallepagos";
import MundoPatrimonial from "../../componentes/MundoPatrimonial/MundoPatrimonial";
import ImportarPagosOCR from "../../componentes/Genericos/ImportarPagosOCR/ImportarPagosOCR";
import DistribucionPortafolio from "../../componentes/DistribucionPortafolio/DistribucionPortafolio";
import "../../estilos/paginas/portafolio.css";
import TarjetaProximosPagos from "../../componentes/TarjetaProximosPagos/TarjetaProximosPagos";

const Portafolio = () => {
    const { instituciones, nombreInstitucion, setNombreInstitucion, agregarInstitucion, eliminarInstitucion, editarInstitucion,
        capitalTotalFormateado, agregarInversion, editarInversion, eliminarInversion, setInstituciones, capitalTotal } = useInstituciones();

    const { agregarPago, marcarPagoComoCobrado, eliminarPago, editarPago } = usePagos(instituciones, setInstituciones);

    const [modalAbierto, setModalAbierto] = useState(false);
    const [institucionSeleccionada, setInstitucionSeleccionada] = useState(null);
    const [inversionSeleccionada, setInversionSeleccionada] = useState(null);
    const [modalEditarInversionAbierto, setModalEditarInversionAbierto] = useState(false);

    const [modalPagoAbierto, setModalPagoAbierto] = useState(false);
    const [inversionPagoSeleccionada, setInversionPagoSeleccionada] = useState(null);

    const [modalDetallePagosAbierto, setModalDetallePagosAbierto] = useState(false);
    const [inversionDetallePagosSeleccionada, setInversionDetallePagosSeleccionada] = useState(null);

    const [modalEditarInstitucionAbierto, setModalEditarInstitucionAbierto] = useState(false);
    const [institucionEditar, setInstitucionEditar] = useState(null);

    const [modalEliminarInstitucionAbierto, setModalEliminarInstitucionAbierto] = useState(false);
    const [institucionEliminar, setInstitucionEliminar] = useState(null);

    const [modalImportarPagosAbierto, setModalImportarPagosAbierto] = useState(false);

    const [inversionImportarPagos, setInversionImportarPagos] = useState(null);

    const [modalEditarPagoAbierto, setModalEditarPagoAbierto] = useState(false);
    const [pagoSeleccionado, setPagoSeleccionado] = useState(null);


    const abrirModal = (institucion) => {
        setInstitucionSeleccionada(institucion);
        setModalAbierto(true);
    };

    const seleccionarInversion = (institucion, inversion) => {
        setInstitucionSeleccionada(institucion);
        setInversionSeleccionada(inversion);
        setModalEditarInversionAbierto(true);
    };

    const abrirModalPago = (institucion, inversion) => {
        setInstitucionSeleccionada(institucion);
        setInversionPagoSeleccionada(inversion);
        setModalPagoAbierto(true);
    };

    const abrirModalDetallePagos = (institucion, inversion) => {
        setInstitucionSeleccionada(institucion);
        setInversionDetallePagosSeleccionada(inversion);
        setModalDetallePagosAbierto(true);
    };

    const abrirModalEditarInstitucion = (institucion) => {
        setInstitucionEditar(institucion);
        setModalEditarInstitucionAbierto(true);
    };

    const abrirModalEliminarInstitucion = (institucion) => {
        setInstitucionEliminar(institucion);
        setModalEliminarInstitucionAbierto(true);
    };

    const abrirModalImportarPagos = (institucion, inversion) => {
        setInstitucionSeleccionada(institucion);
        setInversionImportarPagos(inversion);
        setModalImportarPagosAbierto(true);
    };

    const abrirModalEditarPago = (pago) => {
        setPagoSeleccionado(pago);
        setModalEditarPagoAbierto(true);
    };

    useEffect(() => {
        if (!inversionDetallePagosSeleccionada) {
            return;
        }
        const institucionActual = instituciones.find((institucion) => institucion.id === institucionSeleccionada?.id);
        const inversionActual = institucionActual?.inversiones.find((inversion) => inversion.id === inversionDetallePagosSeleccionada.id);
        if (inversionActual) {
            setInversionDetallePagosSeleccionada(
                inversionActual
            );
        }
    }, [instituciones, institucionSeleccionada, inversionDetallePagosSeleccionada]);

    return (
        <div className="contenedor-portafolio">

            {/* Encabezado */}
            <EncabezadoPortafolio
                capitalTotal={capitalTotalFormateado}
                totalInstituciones={instituciones.length}
            />

            {/* Panel patrimonial */}

            <div className="panel-patrimonial">
                {/* Tarjeta mundo patrimonial */}
                <MundoPatrimonial
                    capital={capitalTotal}
                />
                {/* DistribuicionPortafolio */}
                <DistribucionPortafolio
                    instituciones={instituciones}
                />
            </div>

            <TarjetaProximosPagos
                instituciones={instituciones}
            />

            {/* Formulario agregar institución */}
            <FormularioInstitucion
                nombreInstitucion={nombreInstitucion}
                setNombreInstitucion={setNombreInstitucion}
                agregarInstitucion={agregarInstitucion}
            />

            {/* Lista de tarjetas de instituciones */}
            <section className="portafolio__instituciones">
                {instituciones.map((institucion) => (
                    <TarjetaInstitucion
                        key={institucion.id}
                        id={institucion.id}
                        nombre={institucion.nombre}
                        color={institucion.color}
                        inversiones={institucion.inversiones}
                        eliminarInstitucion={() => abrirModalEliminarInstitucion(institucion)}
                        abrirModal={() => abrirModal(institucion)}
                        seleccionarInversion={(inversion) => seleccionarInversion(institucion, inversion)}
                        eliminarInversion={eliminarInversion}
                        abrirModalPago={(inversion) => abrirModalPago(institucion, inversion)}
                        abrirModalDetallePagos={(inversion) => abrirModalDetallePagos(institucion, inversion)}
                        editarInstitucion={() => { abrirModalEditarInstitucion(institucion) }}
                        abrirModalImportarPagos={(inversion) => { abrirModalImportarPagos(institucion, inversion) }}
                    />
                ))}
            </section>



            {/* Modales */}
            <Modal
                abierto={modalAbierto}
                titulo="Nueva inversión"
                institucion={institucionSeleccionada}
                onClose={() => {
                    setModalAbierto(false);
                    setInstitucionSeleccionada(null);
                }}
            >
                <FormularioInversion
                    nombreInstitucion={nombreInstitucion}
                    institucionSeleccionada={institucionSeleccionada}
                    agregarInversion={agregarInversion}
                    inversionSeleccionada={inversionSeleccionada}
                    editarInversion={editarInversion}
                    alGuardar={() => {
                        setModalAbierto(false);
                        setInversionSeleccionada(null);
                    }}
                />
            </Modal>
            <Modal
                abierto={modalEditarInversionAbierto}
                titulo="Editar inversión"
                institucion={institucionSeleccionada}
                onClose={() => {
                    setModalEditarInversionAbierto(false);
                    setInversionSeleccionada(null);
                }}
            >
                <FormularioInversion
                    institucionSeleccionada={institucionSeleccionada}
                    inversionSeleccionada={inversionSeleccionada}
                    editarInversion={editarInversion}
                    alGuardar={() => {
                        setModalEditarInversionAbierto(false);
                        setInversionSeleccionada(null);
                    }}
                />
            </Modal>
            <Modal
                abierto={modalPagoAbierto}
                titulo="Registrar pago"
                onClose={() => {
                    setModalPagoAbierto(false);
                    setInversionPagoSeleccionada(null);
                }}
            >
                <FormularioPago
                    institucionSeleccionada={institucionSeleccionada}
                    inversionPagoSeleccionada={inversionPagoSeleccionada}
                    agregarPago={agregarPago}
                />
            </Modal>
            <Modal
                abierto={modalDetallePagosAbierto}
                titulo="Pagos"
                onClose={() => {
                    setModalDetallePagosAbierto(false);
                    setInversionDetallePagosSeleccionada(null);
                }}
            >
                <DetallePagos
                    inversionPagosSeleccionada={inversionDetallePagosSeleccionada}
                    institucionSeleccionada={institucionSeleccionada}
                    marcarPagoComoCobrado={marcarPagoComoCobrado}
                    eliminarPago={eliminarPago}
                    abrirModalEditarPago={abrirModalEditarPago}
                />
            </Modal>

            <Modal
                abierto={modalEditarInstitucionAbierto}
                titulo="Editar institución"
                onClose={() => {
                    setModalEditarInstitucionAbierto(false);
                    setInstitucionEditar(null);
                }}
            >
                <FormularioEditarInstitucion
                    institucion={institucionEditar}
                    actualizarNombre={editarInstitucion}
                    alGuardar={() => {
                        setModalEditarInstitucionAbierto(false);
                        setInstitucionEditar(null);
                    }}
                    alCancelar={() => {
                        setModalEditarInstitucionAbierto(false);
                        setInstitucionEditar(null);
                    }}
                />

            </Modal>

            <Modal
                abierto={modalEliminarInstitucionAbierto}
                titulo="Eliminar institución"
                onClose={() => {
                    setModalEliminarInstitucionAbierto(false);
                    setInstitucionEliminar(null);
                }}
            >
                <ConfirmarEliminarInstitucion
                    institucion={institucionEliminar}
                    alCancelar={() => {
                        setModalEliminarInstitucionAbierto(false);
                        setInstitucionEliminar(null);
                    }}
                    alConfirmar={() => {
                        eliminarInstitucion(
                            institucionEliminar.id
                        );
                        setModalEliminarInstitucionAbierto(false);
                        setInstitucionEliminar(null);
                    }}
                />
            </Modal>

            <Modal
                abierto={modalImportarPagosAbierto}
                titulo="Importar pagos"
                onClose={() => {
                    setModalImportarPagosAbierto(false);
                    setInversionImportarPagos(null);
                }}
            >
                <ImportarPagosOCR
                    institucionSeleccionada={institucionSeleccionada}
                    inversion={inversionImportarPagos}
                    editarInversion={editarInversion}
                    onImportado={() => {
                        setModalImportarPagosAbierto(false);
                        setInversionImportarPagos(null);
                    }}
                />
            </Modal>

            <Modal
                abierto={modalEditarPagoAbierto}
                titulo="Editar pago"
                onClose={() => {

                    setModalEditarPagoAbierto(false);

                    setPagoSeleccionado(null);

                }}
            >
                <FormularioPago
                    institucionSeleccionada={
                        institucionSeleccionada
                    }
                    inversionPagoSeleccionada={
                        inversionDetallePagosSeleccionada
                    }
                    editarPago={editarPago}
                    pagoSeleccionado={pagoSeleccionado}
                    alGuardar={() => {

                        setModalEditarPagoAbierto(false);

                        setPagoSeleccionado(null);

                    }}
                />
            </Modal>
        </div>

    );
};

export default Portafolio;
