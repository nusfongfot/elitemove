/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import './Motivation.css';

const quotes = require('./quotes');

function Motivation() {
  const random = Math.floor(Math.random() * quotes.length);

  return (
    <div className="motivation-box">
      <h2 className="motivated motivation-msg">{`"${quotes[random].msg}"`}</h2>
      <h3 className="motivated motivation-author">{` -- ${quotes[random].author}`}</h3>
    </div>
  );
}

export default Motivation;
