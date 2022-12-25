import Slide from 'react-reveal/Slide';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './style.css';

function Footer() {
  return (
    <div id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col" />
          <div className="col-12  col-md-12 col-lg-5 col-xxl-3 text-white  d-flex flex-column align-items-center justify-content-center mt-5">
            <Slide left>
              <h3 className="contact_info">
                <span style={{ color: 'var(--white)', fontSize: '2rem' }}>EliteMove</span>
              </h3>
              <span className="title_footer">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque praesentium
                consequatur, aliquid, molestiae optio, ullam odit accusamus atque porro quibusdam
                quaerat? Voluptatum sunt maiores suscipit. Optio sunt ipsa pariatur ab.
              </span>
            </Slide>
          </div>
          <div className="col-12 col-md-12 col-lg-5 col-xxl-3 text-white d-flex flex-column align-items-center gap-2 mt-5">
            <Slide right>
              <h3>Quick Contact</h3>
              <div>
                <ul className="contact_info">
                  <li>
                    <FaEnvelope />
                    elitemove@gmail.com
                  </li>
                  <li>
                    <FaMapMarkerAlt />
                    Lake Isabella Blvd Lake Isabella, California(CA), 93240
                  </li>
                  <li>
                    <FaPhoneAlt />
                    089 965 7542
                  </li>
                </ul>
              </div>
            </Slide>
          </div>
          <div className="col" />
          <div className="tab">
            <Slide bottom>
              <ul className="tab-info">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#aboutus">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Slide>
          </div>
          <div className="copyright mt-3 mb-3">
            <Slide bottom>
              <h6 className="text-white text-center">&#169;COPYRIGHT 2022 ALL RIGHT RESERVED</h6>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
