import React from "react"

import "./modal.style.css"

const Modal = ({ title, children, onClose }) => (
  <div className="Modal modal is-active">
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button onClick={onClose} className="delete" aria-label="close" />
      </header>
      <section className="modal-card-body">{children}</section>
      <footer className="modal-card-foot">
        <button onClick={onClose} className="button">
          Cerrar
        </button>
      </footer>
    </div>
  </div>
)

export default Modal
