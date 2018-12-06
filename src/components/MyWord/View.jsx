import React from "react";
import ImageModal from "./ImageModal";

import "./styles.css";

const View = ({
  words,
  deleteWord,
  openModal,
  imageUrl,
  isOpenModal,
  closeModal
}) => (
  <div>
    <h2>My Words</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Words</th>
          <th>Pronunciation</th>
          <th>Meanings</th>
          <th>Similar Sound</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {words.map(item => {
          return (
            <tr key={item._id}>
              <td>{item.vocabulary}</td>
              <td>{item.pronunciation}</td>
              <td>{item.meanings}</td>
              <td>{item.similarSound}</td>
              <td>
                <img
                  onClick={e => openModal(item.imageUrl)}
                  className="img-voca"
                  alt="img-voca"
                  src={item.imageUrl}
                />
              </td>
              <td>
                <button onClick={e => deleteWord(item._id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <ImageModal
      isOpenModal={isOpenModal}
      closeModal={closeModal}
      imageUrl={imageUrl}
    />
  </div>
);

export default View;