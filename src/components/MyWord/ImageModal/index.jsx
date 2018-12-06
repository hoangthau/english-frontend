import React from "react";
import Modal from "react-modal";

import "./styles.css";

Modal.setAppElement("#root");
const ImageModal = ({ isOpenModal, closeModal, imageUrl }) => {
  return (
    <Modal isOpen={isOpenModal}>
      <div>
        <button className="float-right" onClick={closeModal}>
          Close
        </button>
      </div>
      <img className="modal-img-word" alt="modal-img" src={imageUrl} />
    </Modal>
  );
};

export default ImageModal;
