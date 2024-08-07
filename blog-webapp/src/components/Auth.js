import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import "./styles/Auth.css";
import axios from "axios";

const Auth = ({ isSignup }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormSubmitting) return; // Prevent double submission

    setIsFormSubmitting(true); // Set loading state

    try {
      const type = isSignup ? "signup" : "login";
      const res = await axios.post(`https://blog-webapp-r9hs.onrender.com/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });

      const data = res.data;
      localStorage.setItem("userId", data.user._id);
      dispatch(authActions.login());
      navigate("/blogs");
    } catch (error) {
      console.log(error);
    } finally {
      setIsFormSubmitting(false); // Reset loading state
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit} className="auth-form">
          <h2 className="text-center">{isSignup ? "Signup" : "Login"}</h2>
          {isSignup && (
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={inputs.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" variant="warning" block disabled={isFormSubmitting}>
            {isFormSubmitting ? "Submitting..." : "Submit"}
          </Button>
          <Button
            type="button"
            onClick={() => navigate(isSignup ? "/login" : "/signup")}
            variant="link"
            className="mt-3"
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Auth;
