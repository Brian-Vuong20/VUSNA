import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Container
        style={{
          width: "50vh",
          height: "50vh",
          display: "flex",
          marginTop: "6rem",
          border: "1px solid #D3D3D3",
          borderRadius: "10px",
          justifyContent: "center",
        }}
      >
        <Form
          style={{
            display: "flex",
            width: "30vh",
            margin: "2rem",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="d-flex justify-content-center">
            <h2>Login</h2>
          </div>
          <Form.Group className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="success" type="submit" className="mt-3">
            Login
          </Button>
          <div className="d-flex justify-content-center mt-3">
            <div>
              Not yet a VUSNA member ? <Link>Join now</Link>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
