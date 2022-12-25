/* eslint-disable prefer-regex-literals */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from 'react';
import Joi from 'joi';
import BackgroundImage from '../../assets/bg-1.png';
import Logo from '../../assets/login-logo.png';

const formSchema = Joi.object({
  firstName: Joi.string().alphanum().min(6).max(20)
    .required(),
  lastName: Joi.string().alphanum().min(6).max(20)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{8,20}$')).required(),
  confirmPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,20}$')).required(),
});
const initialInfo = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
function RegisterPage() {
  const [formInfo, setFormInfo] = useState(initialInfo);
  const [errorFormInfo, setErrorFormInfo] = useState(initialInfo);
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    width: '100vw',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  //  some change
  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const newInfo = { ...formInfo };
    newInfo[fieldName] = event.target.value; // {newInfo["email"] = "test7@gmail.com"}
    setFormInfo(newInfo);
    setErrorFormInfo(initialInfo);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const { value, error } = formSchema.validate(formInfo);
    if (error) {
      const filedError = error.details[0].context.key;
      const filedLen = filedError.length + 2;
      const errorMessage = error.details[0].message.slice(filedLen);
      const errorObject = { ...errorFormInfo };
      errorObject[filedError] = errorMessage;
      setErrorFormInfo(errorObject);
      return;
    }

    // AUTH.register(value)
    console.log(value);
  };
  return (
    <div className="flex justify-center items-center" style={backgroundStyle}>
      <div className="w-[90%] min-w-[360px] lg:max-w-[921px] h-[780px] rounded-[10px] bg-gray-primary px-[10%] semi-lg:px-[100px] flex flex-col">
        {/* Profile Image */}
        <div className="mx-auto text-center pt-8">
          <div className="mb-1 flex mx-auto">
            <img src={Logo} alt="logo-auth" width={100} className="flex mx-auto" />
          </div>
          <h3 className="font-thin text-[40px] text-white">Register</h3>
        </div>

        <form
          className="h-full py-4 semi-lg:py-8 flex flex-col justify-around "
          onSubmit={handleSubmitForm}
        >
          {/* Mobile : FirstName & LastName */}
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={formInfo.firstName}
            onChange={handleInputChange}
            className="semi-lg:hidden  input-primary"
          />
          {errorFormInfo.firstName && (
            <p className="semi-lg:hidden text-red-500">{errorFormInfo.firstName}</p>
          )}
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={formInfo.lastName}
            onChange={handleInputChange}
            className="semi-lg:hidden  input-primary"
          />

          {/* Desktop : FirstName & LastName */}
          <div className="hidden semi-lg:flex justify-between gap-8 ">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={formInfo.firstName}
              onChange={handleInputChange}
              className="input-primary flex-1"
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formInfo.lastName}
              onChange={handleInputChange}
              className="input-primary flex-1"
            />
          </div>

          {/* Another Input */}
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formInfo.email}
            onChange={handleInputChange}
            className="input-primary"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formInfo.password}
            onChange={handleInputChange}
            className="input-primary"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formInfo.confirmPassword}
            onChange={handleInputChange}
            className="input-primary"
          />
          <button type="submit" className="btn-primary self-center ">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
