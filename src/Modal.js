import React from "react";


const Modal = ({ setShowModal }) => {
  return (
    <div className="si">
      <div className="notification">
        <main>
          <div className="card-2">
            <img src="https://images.unsplash.com/photo-1661435804987-a8aff5752018?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="card-content">
              <h2>Netflix</h2>
              <p>Gore.crime</p>
              <a href="#" className="button">
                <span className="material-symbols-outlined">
                 sex
                </span>
              </a>
            </div>
          </div>
        </main>
        <div className="view-all" onClick={() => setShowModal(false)}>
          <div className="view-all-btn">LOG OUT</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
