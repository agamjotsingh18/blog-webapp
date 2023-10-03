import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import "./styles/Auth.css";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    const type = isSignup ? "signup" : "login";
    sendRequest(type);
  };

  const sendRequest = async (type) => {
    try {
      const res = await axios.post(`https://blog-webapp-uohy.onrender.com/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });

      const data = res.data;
      console.log(data);

      localStorage.setItem("userId", data.user._id);
      dispatch(authActions.login());
      navigate("/blogs");
    } catch (error) {
      console.log(error);
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
          <Button type="submit" variant="warning" block>
            Submit
          </Button>
          <Button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
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
