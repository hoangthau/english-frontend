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
        <div className="form-group">
          <label>Title:</label>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={changeEmail}
            required
          />
        </div>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            className="form-control"
            type="text"
            value={fullName}
            onChange={changeFullName}
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            className="form-control"
            type="file"
            onChange={changeImage}
            required
          />
        </div>
        <div className="image-preview">
          <img alt="" src={image ? URL.createObjectURL(image) : ""} />
        </div>
        {loading ? (
          <button>Loading ...</button>
        ) : (
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        )}
      </form>
    </div>
  );
};

export default NewItem;
