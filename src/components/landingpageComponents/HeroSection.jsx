/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { Slide } from 'react-reveal';
import headerImg from '../../images/header.jpg';
import './style.css';

function HeroSection() {
  return (
    <div id="home">
      <div className="container-fluid overflow-hidden">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-start p-0">
            <Slide left>
              <img src={headerImg} alt="" className="img-hero" />
            </Slide>
          </div>
          <div
            className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center gap-4"
            id="text_hero"
          >
            <Slide right>
              <div>
                <h1 className="title_hero text-center mt-1">EliteMove</h1>
              </div>
              <div>
                <span className="span_hero">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt, corporis
                  at sint modi earum, atque maiores, fugit id debitis numquam enim ducimus quibusdam
                  velit consequuntur doloribus. Tempora, doloremque labore.
                </span>
                <span className="span_hero m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt, corporis
                  at sint modi earum, atque maiores, fugit id debitis numquam enim ducimus quibusdam
                  velit consequuntur doloribus. Tempora, doloremque labore.
                </span>
              </div>
              <div className="btn-group mb-5">
                <Link to="/register">
                  <button type="button" className="btn-start">
                    Get Start Now
                  </button>
                </Link>
                <Link to="/login">
                  <button type="button" className="btn-login">
                    Login
                  </button>
                </Link>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
