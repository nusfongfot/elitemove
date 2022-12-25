/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './register.css';
import User from '../../images/user-Reg.png';

function Register1() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="Background-Register">
      <div className="Register">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="container-register "
        >
          <img src={User} alt="register" />
          <h1>Register</h1>
          <Container className="r-cotainer">
            <Container>
              <Row className="mb-3 ">
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Control required type="text" placeholder="First name" className="r-input" />
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Control required type="text" placeholder="Last name" className="r-input" />
                </Form.Group>
              </Row>
            </Container>

            <Container>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  className="r-mail r-input"
                />
              </Form.Group>
            </Container>

            <Container>
              <Form.Group controlId="validationCustom03" className="mb-3">
                <Form.Control type="password" placeholder="Password" required className="r-input" />
              </Form.Group>
            </Container>

            <Container>
              <Form.Group controlId="validationCustom04" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  required
                  className="r-input"
                />
              </Form.Group>
            </Container>

            <Container>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>Birth date</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle className="r-dropdown r-input" id="dropdown-basic">
                      DD/MM/YYYY
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">10-20</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">20-30</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">30-40</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>Gender</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle className="r-dropdown r-input" id="dropdown-basic">
                      Gender
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Not specified</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Row>
            </Container>

            <Container>
              <Row className="mb-3 ">
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>Height(cm)</Form.Label>
                  <Form.Control required type="text" placeholder="Height" className="r-input" />
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Label>Weight(kg)</Form.Label>
                  <Form.Control required type="text" placeholder="Weight" className="r-input" />
                </Form.Group>
              </Row>
            </Container>

            <Container>
              <Form.Label>weekly goal calories</Form.Label>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Calories"
                  required
                  className="r-mail r-input"
                />
              </Form.Group>
            </Container>
            <Button type="submit" className="btn-Register">
              Submit
            </Button>
          </Container>
        </Form>
      </div>
    </div>
  );
}

export default Register1;
