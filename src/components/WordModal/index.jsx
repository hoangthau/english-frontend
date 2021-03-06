import React from "react";
import Modal from "react-modal";

import "./styles.css";

Modal.setAppElement("#root");

const WordModal = ({ isOpen, submit, toggleModal, changeInput, auth }) => {
  const { isAuthenticated } = auth;
  return (
    <Modal
      className="modal-add-word"
      isOpen={isOpen}
      onRequestClose={toggleModal}
      shouldCloseOnOverlayClick={true}
    >
      {isAuthenticated() ? (
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
            <label>Example</label>
            <input
              name="example"
              type="text"
              className="form-control"
              onChange={changeInput}
              placeholder="Enter the example related to your life"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            onClick={toggleModal}
            type="button"
            className="btn btn-default"
          >
            Cancel
          </button>
        </form>
      ) : (
        <p>You need to login first</p>
      )}
    </Modal>
  );
};

export default WordModal;
