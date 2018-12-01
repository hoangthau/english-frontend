import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const NewItem = ({
  title,
  fullName,
  image,
  submit,
  changeEmail,
  changeFullName,
  changeImage,
  loading
}) => {
  return (
    <div className="new-item">
      <Link className="hover" to="/">
        &larr; Back
      </Link>
      <form onSubmit={submit}>
        <h2>Create new item</h2>
        <div className="input-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={changeEmail} required />
        </div>
        <div className="input-group">
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={changeFullName}
            required
          />
        </div>
        <div className="input-group">
          <label>Image:</label>
          <input type="file" onChange={changeImage} required />
        </div>
        <div className="image-preview">
          <img alt="" src={image ? URL.createObjectURL(image) : ""} />
        </div>
        {loading ? (
          <button>Loading ...</button>
        ) : (
          <button type="submit">Create</button>
        )}
      </form>
    </div>
  );
};

export default NewItem;
