import React from "react";
import Modal from "react-modal";

const ItemModal = ({ isOpen, createWord, toggleModal }) => (
  <Modal isOpen={isOpen}>
    <form className="new-word" onSubmit={createWord}>
      <div class="form-group">
        <label>Vocabulary</label>
        <input type="text" class="form-control" placeholder="Enter your word" />
      </div>
      <div class="form-group">
        <label>Pronunciation</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter word's pronunciation"
        />
      </div>
      <div class="form-group">
        <label>Meanings</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter word's meanings"
        />
      </div>
      <div class="form-group">
        <label>Similar Sound</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter word's similar sound"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
      <button onClick={toggleModal} type="button" class="btn btn-default">
        Cancel
      </button>
    </form>
  </Modal>
);

export default ItemModal;
