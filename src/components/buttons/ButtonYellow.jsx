/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";

function ButtonYellow({ text, onClick }) {
  const [isHover, setIsHover] = useState(false);
  const handleOnClick = () => {
    onClick();
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const purple = `hsla(266, 99%, 56%, 1)`;
  const yellow = `hsla(36, 96%, 71%, 1)`;
  const white = `hsla(0, 0%, 100%, 1)`;
  const black = `hsla(0, 0%, 8%, 1)`;
  const gradient = `linear-gradient(65deg, ${yellow} 35%, ${purple})`;

  const styles = {
    padding: "0.5rem 1.5rem",
    width: "auto",
    height: "auto",
    border: "none",
    outline: "none",
    borderRadius: "none",
    fontSize: "1rem",
    fontWeight: "400",
    letterSpacing: "0.5px",
    cursor: "pointer",
    scale: isHover ? "0.95" : "1",
    background: isHover ? gradient : yellow,
    color: isHover ? white : black,
  };

  return (
		<button
			style={styles}
			onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
		>
			{text}
		</button>
  );
}

export default ButtonYellow;
