import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/BlogDetail.css";


const BlogDetail = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const id = useParams().id;
  const [inputs, setInputs] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchDetails = async () => {
    try {
      const response = await axios.get(`https://blog-webapp-r9hs.onrender.com/api/blog/${id}`);
      setBlog(response.data.blog);
      setInputs({
        title: response.data.blog.title,
        description: response.data.blog.description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  const sendRequest = async () => {
    try {
      await axios.put(`https://blog-webapp-r9hs.onrender.com/api/blog/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
      });
      navigate("/myBlogs");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
  };  

  
    return (
      <div className="blog-detail-container">
        {blog && (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="description"
                value={inputs.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="warning" type="submit" className="button">
              Submit
            </Button>
          </Form>
        )}
      </div>
    );
  };
  
  export default BlogDetail;
  