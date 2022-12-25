/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable import/order */
import trainImg from '../../images/train.jpg';
import train2 from '../../images/train2.jpg';
import train3 from '../../images/train3.jpg';
import { useState } from 'react';
import { Slide } from 'react-reveal';
import './style.css';

function AboutUs() {
  const imgs = [
    { id: 0, value: trainImg },
    { id: 1, value: train2 },
    { id: 2, value: train3 },
  ];
  const [slider, setSlider] = useState(imgs[0]);

  const handleClick = (index) => {
    const slider = imgs[index];
    setSlider(slider);
  };

  return (
    <div id="aboutus">
      <div className="container-fluid overflow-hidden p-0">
        <div className="row d-md-flex flex-md-column d-lg-flex flex-lg-row d-flex flex-column mt-3">
          <div className="col  text-center">
            <Slide left>
              <div>
                <img src={slider.value} alt="" className="img_train mt-md-3" />
              </div>
              <div className="d-flex gap-2 mt-2">
                {imgs.map((data, i) => (
                  <div key={data.id}>
                    <img
                      src={data.value}
                      key={data.id}
                      onClick={() => handleClick(i)}
                      className="img_small"
                      alt="img"
                    />
                  </div>
                ))}
              </div>
            </Slide>
          </div>

          <div
            className="col d-flex flex-column align-items-center justify-content-center mt-5 mt-md-3 mb-md-3"
            id="text_about"
          >
            <div className="d-flex flex-column align-items-center gap-2">
              <Slide right>
                <div>
                  <h2 style={{ fontWeight: 400, fontSize: '2rem' }}>
                    About
                    {' '}
                    <span style={{ color: 'var(--purple)', fontWeight: 700, fontStyle: 'italic' }}>
                      EliteMove
                    </span>
                  </h2>
                  {/* <h2>Welcome to Us</h2>
                  <hr /> */}
                </div>
                {/* <span className="about_span_1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quidem cupiditate
                  vitae aliquid, ullam eveniet libero fuga qui rem cumque officiis ducimus ratione
                  ipsam omnis est blanditiis inventore quae amet.
                </span> */}
                <span className="about_span">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quidem cupiditate
                  vitae aliquid, ullam eveniet libero fuga qui rem cumque officiis ducimus ratione
                  ipsam omnis est blanditiis quae amet.
                  <span className="read_more">Read More</span>
                </span>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
