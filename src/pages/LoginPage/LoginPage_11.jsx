/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable prefer-regex-literals */
import { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Joi from 'joi';
import BackgroundImage from '../../assets/bg-1.png';
import LoginLogo from '../../assets/login-logo.png';

// import GmailLogo from '../../assets/gmail.png';
// import FacebookLogo from '../../assets/facebook.png';
import { AuthContext } from '../../contexts/authContext';
import { useLoading } from '../../contexts/loadingContext';

const formSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .label('Email')
    .required(),

  password: Joi.string().label('Password').required(),
});

function LoginPage() {
  const AUTH = useContext(AuthContext);
  const { startLoading, stopLoading } = useLoading();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitLogin = async (event) => {
    event.preventDefault(); // กัน Default Action Form
    // console.log('TRY TO SUBMIT');
    // Validate FrontEnd
    const { error } = formSchema.validate({ email, password });
    if (error) {
      error.details.map((item) => alert(item.message));
      // alert('Please enter a valid email address and password');
      // console.error(error.details);
    }

    try {
      if (email !== '' && password !== '') {
        startLoading(); // loading == true
        const login = await AUTH.login({ email, password });
        if (login) {
          navigate('/dashboard');
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <div className="flex justify-center items-center" style={backgroundStyle}>
      <div className="w-[60%] min-w-[360px] lg:max-w-[921px] h-[780px] rounded-[10px] bg-gray-primary   px-[10%] semi-lg:px-[100px] flex flex-col">
        {/* Profile Image */}
        <div className="mx-auto text-center pt-8">
          <div className="flex mb-1 mx-auto">
            <img src={LoginLogo} alt="login-logo" className="w-[130px] mx-auto" />
          </div>
          <h3 className="font-thin text-[40px] text-white">EliteMove</h3>
        </div>
        {/* Desktop : Email & Password */}
        <form
          className="h-full py-8 semi-lg:py-4 flex flex-col justify-around "
          onSubmit={submitLogin}
        >
          <input
            type="text"
            placeholder="Enter your Email"
            name="Email"
            className="input-primary"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            className="input-primary"
            value={password}
            onChange={onChangePassword}
          />
          <button type="submit" className="btn-primary self-center ">
            Login
          </button>
          <p className="text-white text-[24px] self-center">OR</p>
          {/* social login */}
          {/* <div className="flex justify-center gap-10">
            <a href="facebook.com">
              <img src={FacebookLogo} alt="facebook-logo" className="w-[60px] h-[60px]" />
            </a>
            <a href="gmail.com">
              <img src={GmailLogo} alt="Gmail-logo" className="w-[60px] h-[60px]" />
            </a>
          </div> */}
          {/* <p className="text-white text-[28px] self-center">
            Need an account ? Register
          </p> */}
          <Link to="/register" className="text-white font - thin text-[32px] self-center">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
