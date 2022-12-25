/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable semi */
/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ButtonPurple from './ButtonPurple';

// eslint-disable-next-line react/function-component-definition
const ButtonPurpleUpLoad = ({
  text,
  file,
  onChangeFile,
  onSaveFile,
  onCanCelFile,
  inputFileRef,
}) => {
  const [isHover, setIsHover] = useState(false);

  const purple = 'hsla(266, 99%, 56%, 1)';
  const yellow = 'hsla(36, 96%, 71%, 1)';
  const white = 'hsla(0, 0%, 100%, 1)';
  // const black = `hsla(0, 0%, 8%, 1)`;
  const gradient = `linear-gradient(65deg, ${purple} 35%, ${yellow})`;

  const styles = {
    padding: '0.5rem 1.5rem',
    width: 'auto',
    height: 'auto',
    border: 'none',
    outline: 'none',
    borderRadius: 'none',
    fontSize: '1rem',
    fontWeight: '400',
    letterSpacing: '0.5px',
    curser: 'pointer',
    scale: isHover ? '0.95' : '1',
    background: isHover ? gradient : purple,
    color: isHover ? white : white,
  };

  return (
    <>
      {!file ? (
        <label style={styles}>
          <input type="file" onChange={onChangeFile} ref={inputFileRef} />
          {text}
        </label>
      ) : (
        <div className="flex gap-3">
          <ButtonPurple text="Save" onClick={onSaveFile} />
          <ButtonPurple text="Cancel" onClick={onCanCelFile} />
        </div>
      )}
    </>
  );
};

export default ButtonPurpleUpLoad;
