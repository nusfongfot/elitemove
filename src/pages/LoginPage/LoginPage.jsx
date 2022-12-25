/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import logoImg from '../../images/Logo.png';
import { useMyContext } from '../../Context/Context';

function LoginPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { setAuth } = useMyContext();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/auth/login', {
        password,
        email,
      });
      res.data && window.location.replace('/dashboard');
      setAuth(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <div className="container mt-3 p-4 text-white bg-black w-50">
        <form className="row g-3" onSubmit={handleFormSubmit}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={logoImg} className="img-fluid img-user" alt="logo" />
            <h2>
              Make Yourself
              <span className="title">Fit</span>
            </h2>
          </div>

          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <input
              type="email"
              className="form-control text-center w-75"
              id="inputAddress"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <input
              type="password"
              className="form-control text-center w-75"
              id="inputAddress2"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12  d-flex align-items-center justify-content-center">
            <button type="submit" className="btn-sign w-75 mt-3">
              Login
            </button>
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center">
            <h6>
              Need an account ?
              <Link to="/register" className="text-white"> Register</Link>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
