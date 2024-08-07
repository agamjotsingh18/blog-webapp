import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/HomePage.css"; 

const HomePage = () => {
  return (
    <Container className="home-page">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} className="text-center">
          <h1>   Welcome to Blog With Me</h1>
          <p>
                 Discover, create, and share your thoughts with a community of like-minded individuals.
            Join us today to start your blogging journey!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
