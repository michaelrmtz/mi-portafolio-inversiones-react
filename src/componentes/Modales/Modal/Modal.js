import React from "react";
import "./modal.css";

const Modal = ({ abierto, titulo, institucion, children, onClose }) => {
    if (!abierto) {
        return null;
    }

    return (
        <div className="modal__overlay">
            <div className="modal">
                <div className="modal__header">
                    <div>
                        <h2>{titulo}</h2>

                        {institucion && (
                            <p className="modal__subtitle">
                                {institucion.nombre}
                            </p>
                        )}
                    </div>

                    <button
                        type="button"
                        className="modal__close"
                        onClick={onClose}
                    >
                        ✖
                    </button>
                </div>

                <div className="modal__body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
