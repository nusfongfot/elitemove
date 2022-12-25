/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EditAvatar from '../EditAvatar/EditAvatar';
import EditUserData from '../EditUserData/EditUserData';
import './EditProfile.css';

function EditProfile() {
  return (
    <Container className="edit-profile">
      <Container>
        <Container className="mx-auto edit-profile-card">
          <Row>
            <Col className="col-lg-3 p-3 col-12 mt-5">
              <EditAvatar />
            </Col>
            <Col className="col-lg-9 p-3 col-12">
              <EditUserData />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default EditProfile;
