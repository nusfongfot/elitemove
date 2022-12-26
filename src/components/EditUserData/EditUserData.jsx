/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Joi from 'joi';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';
import { useAuth } from '../../contexts/authContext';
import { useLoading } from '../../contexts/loadingContext';
import ButtonPurple from '../buttons/ButtonPurple';
import ButtonPurpleOutline from '../buttons/ButtonPurpleOutline';
import './EditUserData.css';

const formSchema = Joi.object({
  firstName: Joi.string().min(3).max(25).label('First Name')
    .required(),
  lastName: Joi.string().min(3).max(25).label('Last Name')
    .required(),
  bio: Joi.string().max(255).optional(),
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
  bio: '',
  birthDate: '',
  gender: 'default',
  height: '',
  weight: '',
  weeklyGoalCal: '',
};

function EditUserData() {
  const [userData, setUserData] = useState(defaultUserData);
  const { startLoading, stopLoading } = useLoading();
  const AUTH = useAuth();
  // console.log('line 47');
  // console.log(AUTH.user.birthDate);
  const birthDateFormatted = AUTH.user.birthDate.split('T')[0];
  // console.log(birthDateFormatted);

  useEffect(() => {
    setUserData({
      firstName: AUTH.user.firstName,
      lastName: AUTH.user.lastName,
      bio: AUTH.user.bio,
      birthDate: birthDateFormatted,
      gender: AUTH.user.gender,
      height: AUTH.user.height,
      weight: AUTH.user.weight,
      weeklyGoalCal: AUTH.user.weeklyGoalCal,
    });
  }, []);
  // setUserData(AUTH.user);
  const handleInputChange = (event) => {
    const formInputName = event.target.name;
    const formInputValue = event.target.value;
    // console.log(formInputName, formInputValue);
    const newUserData = { ...userData };
    newUserData[formInputName] = formInputValue;
    setUserData(newUserData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log('update data');
    const { value, error } = formSchema.validate(userData);
    if (error) {
      const fieldError = error.details.map((item) => alert(item.message));
    }
  };

  const updateUserData = async () => {
    // Send Request
    try {
      const editiedUserData = userData;
      // console.log(editiedUserData);
      const formData = new FormData();
      for (const key in editiedUserData) {
        formData.append(key, editiedUserData[key]);
        // console.log('Edok', key);
      }
      startLoading();
      await AUTH.updateUserProfile(editiedUserData);
      toast.success('UpdateProfile Succesfully!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      console.log(error);
    } finally {
      stopLoading();
    }
  };

  const handleOnClick = () => {
    updateUserData();
  };

  // render
  return (
    <Container>
      <Form className="user-data" onSubmit={handleFormSubmit}>
        <h2>Edit Profile</h2>
        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="firstNameInput"
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
            />
          </Col>
          <Col className="col-lg-6 col-12">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              id="lastNameInput"
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row className="row my-3">
          <Col>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              id="bioInput"
              type="text"
              name="bio"
              placeholder="say something about yourself"
              value={userData.bio}
              onChange={handleInputChange}
            />
          </Col>
        </Row>

        <h2 className="mt-5">Athlete information</h2>

        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control
              id="birthDateInput"
              type="date"
              name="birthDate"
              value={userData.birthDate}
              onChange={handleInputChange}
            />
          </Col>
          <Col className="col-lg-6 col-12">
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
          </Col>
        </Row>
        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>Height (cm)</Form.Label>
            <Form.Control
              id="heightInput"
              type="number"
              name="height"
              value={userData.height}
              onChange={handleInputChange}
            />
          </Col>
          <Col className="col-lg-6 col-12">
            <Form.Label>Weight (kg)</Form.Label>
            <Form.Control
              id="weightInput"
              type="number"
              name="weight"
              value={userData.weight}
              onChange={handleInputChange}
            />
          </Col>
        </Row>

        <h2 className="weekly-goal-title mt-5">Weekly Goal</h2>
        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>Weekly Calories to burn (Cal)</Form.Label>
            <Form.Control
              id="caloriesInput"
              type="number"
              name="weeklyGoalCal"
              placeholder="2,000"
              value={userData.weeklyGoalCal}
              onChange={handleInputChange}
            />
          </Col>
          <Col className="col-lg-3 col-12 mt-3 pt-3 text-center">
            <Link to="/dashboard" className="">
              <ButtonPurpleOutline
                className="btn-cancel-profile "
                text="Cancel"
                style={{ background: 'var(--black)' }}
              />
            </Link>
          </Col>
          <Col className="col-lg-3 col-12 mt-3 pt-3 d-flex justify-content-center">
            <ButtonPurple
              className="btn-update-profile"
              onClick={handleOnClick}
              text="Update Profile"
              type="submit"
            />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default EditUserData;
