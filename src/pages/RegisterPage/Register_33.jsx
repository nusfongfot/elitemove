/* eslint-disable no-else-return */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Joi from 'joi';
import {
  Col, Row, Container, Button, Form,
} from 'react-bootstrap';
import { useLoading } from '../../contexts/loadingContext';
import { useAuth } from '../../contexts/authContext';
import './register_33.css';
import Logo from '../../images/Logo.png';

const formSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(25)
    .label('First name')
    .required(),
  lastName: Joi.string().alphanum().min(3).max(25)
    .label('Last name')
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .label('Email')
    .required(),
  password: Joi.string()
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{6,20}$'))
    .label('Password')
    .required(),
  confirmPassword: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{6,20}$'))
    .label('Confirm password')
    .required(),
  birthDate: Joi.date().iso().label('Birthdate').required(),
  gender: Joi.string().valid('female', 'male', 'not-specified').label('Gender'),
  height: Joi.number().integer().min(1).required()
    .label('Height'),
  weight: Joi.number().integer().min(1).required()
    .label('Weight'),
  weeklyGoalCal: Joi.number().integer().min(1).optional()
    .label('Weekly Goal'),
});
const defaultUserData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  birthDate: '',
  gender: 'default',
  height: '',
  weight: '',
  weeklyGoalCal: '',
};

function RegisterPage() {
  const [userData, setUserData] = useState(defaultUserData);
  const { startLoading, stopLoading } = useLoading();
  const AUTH = useAuth();

  const handleInputChange = (event) => {
    const formInputName = event.target.name;
    const formInputValue = event.target.value;
    // console.log(formInputName, formInputValue);
    const newUserData = { ...userData };
    newUserData[formInputName] = formInputValue;
    setUserData(newUserData);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log('update data');
    const { value, error } = formSchema.validate(userData);
    if (error) {
      const e = Object.entries(error);
      const message = error?.details[0].message;
      console.log(error.details);
      if (message.toLowerCase().includes('password')) {
        return alert('password must be alphabet and number and length between 6-20');
      }
      const fieldError = error.details.map((item) => alert(item.message));
    } else {
      startLoading();
      await AUTH.register(userData);
      toast.success('Register Succesfully!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      stopLoading();
    }
    // try {
    //   startLoading(); // loading == true
    //   await AUTH.register(userData);
    // } catch (err) {
    //   // console.log(err);
    // } finally {
    //   stopLoading();
    //   console.log('finally register_33');
    // }
  };

  //   console.log(userData);

  return (
    <div className="Background-Register">
      <div className="Register">
        <Form noValidate onSubmit={handleFormSubmit} className="container-register">
          <img src={Logo} alt="register" width={100} className="mt-4 mb-2" />
          <h1
            className="mb-3"
            style={{
              fontSize: '3rem',
              fontWeight: 500,
            }}
          >
            Register
          </h1>
          <Container className="r-cotainer d-flex">
            <Row className="mb-3 ">
              <Col className="col-lg-6 col-12">
                <Form.Group>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className="r-input"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                    id="firstNameInput"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col}>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className="r-input"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleInputChange}
                    id="lastNameInput"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    className="r-mail r-input"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    id="emailInput"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Password (at least 6 characters, including letters and numbers )
                  </Form.Label>
                  <Form.Control
                    type="password"
                    required
                    className="r-input"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    id="passwordInput"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    className="r-input"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleInputChange}
                    id="confirmPasswordInput"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col className="col-lg-6 col-12">
                <Form.Group>
                  <Form.Label>Birth date</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    className=""
                    id="birthDateInput"
                    name="birthDate"
                    value={userData.birthDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col className="col-lg-6 col-12">
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    id="genderInput"
                    name="gender"
                    value={userData.gender}
                    onChange={handleInputChange}
                  >
                    <option value={defaultUserData.gender} disabled>
                      Select a gender
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="not-specified">Not-specified</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3 ">
              <Col className="col-lg-6 col-12">
                <Form.Group>
                  <Form.Label>Height (cm)</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    className="r-input"
                    name="height"
                    value={userData.height}
                    onChange={handleInputChange}
                    id="heightInput"
                  />
                </Form.Group>
              </Col>
              <Col className="col-lg-6 col-12">
                <Form.Group>
                  <Form.Label>Weight (kg)</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    className="r-input"
                    name="weight"
                    value={userData.weight}
                    onChange={handleInputChange}
                    id="weightInput"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Weekly Calories to burn (Cal)</Form.Label>
                  <Form.Control
                    type="number"
                    className="r-mail r-input"
                    name="weeklyGoalCal"
                    value={userData.weeklyGoalCal}
                    onChange={handleInputChange}
                    id="weeklyGoalCalInput"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" className="btn-Register mt-4 mx-auto">
              Submit
            </Button>
          </Container>
          <Link to="/" className="text-white">Back To Home</Link>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
