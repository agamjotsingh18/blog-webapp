import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Blog.css"; // Your custom CSS file
import "font-awesome/css/font-awesome.css"; 

const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`https://blog-webapp-uohy.onrender.com/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };

  return (
    <div className="blog-card">
      {isUser && (
        <div className="edit-delete-icons">
          <button className="edit-icon" onClick={handleEdit}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button className="delete-icon" onClick={handleDelete}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      )}
      <div className="card-header">
        <span className="avatar">{userName ? userName.charAt(0) : ""}</span>
        <h5 className="card-title">{title}</h5>
      </div>
      <img className="card-image" src={imageURL} alt="Paella dish" />
      <div className="card-content">
        <hr />
        <br />
        <p>
          <b>{userName}</b>: {description}
        </p>
      </div>
    </div>
  );
};

export default Blog;