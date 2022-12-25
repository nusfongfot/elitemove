import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import './style.css';

function Contact() {
  return (
    <div>
      <div className="container-fluid mt-5" id="box_call">
        <div className="row">
          <Slide bottom>
            <div
              className="col d-flex flex-column justify-content-center align-items-center"
              id="text_contact"
            >
              <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                <h5 className="head_call ">CALL US TODAY</h5>
                <h2>089 965 7542</h2>
                <div className="text_call">
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente
                    ipsam ullam numquam aspernatur soluta impedit atque laboriosam iusto, dolores
                    quia quibusdam optio quidem, harum consectetur? Magnam libero sint quasi.
                  </div>
                </div>
                <div className="p-4">
                  <Link to="/register">
                    <button className="btn-start" type="submit">
                      Get Start Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Contact;
