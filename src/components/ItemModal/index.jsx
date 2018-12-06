import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    left: "20%",
    right: "20%",
    bottom: "auto"
  }
};

const ItemModal = ({ isOpen, submit, toggleModal, changeInput }) => (
  <Modal isOpen={isOpen} style={customStyles}>
    <form className="new-word" onSubmit={submit}>
      <h2>Add your word</h2>
      <hr />
      <div className="form-group">
        <label>Vocabulary</label>
        <input
          name="vocabulary"
          type="text"
          className="form-control"
          onChange={changeInput}
          placeholder="Enter your word"
        />
      </div>
      <div className="form-group">
        <label>Pronunciation</label>
        <input
          name="pronunciation"
          type="text"
          className="form-control"
          onChange={changeInput}
          placeholder="Enter word's pronunciation"
        />
      </div>
      <div className="form-group">
        <label>Meanings</label>
        <input
          name="meanings"
          type="text"
          className="form-control"
          onChange={changeInput}
          placeholder="Enter word's meanings"
        />
      </div>
      <div className="form-group">
        <label>Similar Sound</label>
        <input
          name="similarSound"
          type="text"
          className="form-control"
          onChange={changeInput}
          placeholder="Enter word's similar sound"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button onClick={toggleModal} type="button" className="btn btn-default">
        Cancel
      </button>
    </form>
  </Modal>
);

export default ItemModal;
