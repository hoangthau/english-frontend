import React from "react";
import Modal from "react-modal";

import "./styles.css";

Modal.setAppElement("#root");
const ImageModal = ({ isOpenModal, closeModal, imageUrl }) => {
  return (
    <Modal isOpen={isOpenModal}>
      <div>
        <button className="btn btn-default float-right" onClick={closeModal}>
          Close
        </button>
      </div>
      <div
        className="modal-img-word"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </Modal>
  );
};

export default ImageModal;
