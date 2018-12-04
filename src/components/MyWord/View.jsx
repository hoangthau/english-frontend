import React from "react";

import "./styles.css";

const View = ({ words }) => (
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
        </tr>
      </thead>
      <tbody>
        {words.map(item => {
          return (
            <tr>
              <td>{item.vocabulary}</td>
              <td>{item.pronunciation}</td>
              <td>{item.meanings}</td>
              <td>{item.similarSound}</td>
              <td>
                <img className="img-voca" alt="img-voca" src={item.imageUrl} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default View;
