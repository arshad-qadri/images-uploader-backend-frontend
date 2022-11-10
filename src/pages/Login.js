import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/reducers/login";
import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";

const Login = () => {
  const nevigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ formData, push: nevigate }));
  };
  return (
    <>
      <div className="h-100 ">
        <Row className="h-100 py-5 justify-content-center align-items-center">
          <Col lg={6} sm={12} className="mx-auto ">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter password please1"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit" variant="dark" className="fw-bold">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
