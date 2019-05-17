import React from "react";
import ImageModal from "../../components/ImageModal";

import "./styles.css";

const View = ({
  words,
  deleteWord,
  openModal,
  imageUrl,
  isOpenModal,
  closeModal
}) => (
  <div className="my-words">
    <h2>My Words</h2>
    {words.length > 0 ? (
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Words</th>
            <th>Pronunciation</th>
            <th>Meanings</th>
            <th>Example</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {words.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.vocabulary}</td>
                <td>{item.pronunciation}</td>
                <td>{item.meanings}</td>
                <td>{item.example}</td>
                <td>
                  <img
                    onClick={e => openModal(item.imageUrl)}
                    className="img-voca"
                    alt="img-voca"
                    src={item.imageUrl}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-default"
                    onClick={e => deleteWord(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : (
      <p>You don't have any words</p>
    )}
    <ImageModal
      isOpenModal={isOpenModal}
      closeModal={closeModal}
      imageUrl={imageUrl}
    />
  </div>
);

export default View;
