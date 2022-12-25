/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import { useState } from 'react';
import './style.css';
import { Slide } from 'react-reveal';
import sectionImg from '../../images/section.jpg';

function SectionBMI() {
  const [weigth, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault();
    const result = (weigth / (height / 100) ** 2).toFixed(2);
    setBmi(result);
    const status = getBmi(result);
    setStatus(status);
    setHeight('');
    setWeight('');
  };

  const getBmi = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    }
    if (bmi <= 18.5 || bmi <= 22.9) {
      return 'Normal weight';
    }
    if (bmi <= 25 || bmi <= 29.9) {
      return 'Overweight';
    }
    return 'Obesity';
  };

  return (
    <div>
      <div className="container-fluid overflow-hidden">
        <div className="row">
          <div
            className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center align-items-center gap-3"
            id="text_bmi"
          >
            <Slide left>
              <div className="text-center">
                {/* <h1>ADVANCE CALCULATOR</h1> */}
                <h2 style={{ fontWeight: 400 }}>Calculate Your BMI</h2>
              </div>
              <div>
                <form>
                  <input
                    type="number"
                    onChange={(e) => setWeight(e.target.value)}
                    value={weigth}
                    placeholder="weight (kg)"
                    className="shadow appearance-none d-flex justify-content-center d-xl-flex d-md-flex align-items-md-center d-xxl-inline-block   w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <input
                    type="number"
                    onChange={(e) => setHeight(e.target.value)}
                    value={height}
                    placeholder="height (cm)"
                    className="shadow appearance-none d-flex justify-content-center d-md-flex align-items-md-center d-xxl-inline-block  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </form>
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    onClick={weigth === '' || height === '' ? null : calculateBmi}
                    className="btn-start d-flex align-items-center justify-content-center "
                    type="submit"
                  >
                    Calculate
                  </button>
                </div>
              </div>
              {bmi === null ? (
                ''
              ) : (
                <div className="text-center mb-3" id="result_bmi">
                  <h3>{bmi}</h3>
                  <h3>{status}</h3>
                </div>
              )}
            </Slide>
          </div>

          <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-end  p-0">
            <Slide right>
              <img src={sectionImg} className="bmi_img d-flex justify-content-start-100" alt="" />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBMI;
