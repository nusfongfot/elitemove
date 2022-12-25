import Slide from 'react-reveal/Slide';
import AliceCarousel from 'react-alice-carousel';
import ptImg from '../../images/pt.jpg';
import pt1Img from '../../images/pt1.png';
import pt2Img from '../../images/pt2.jpg';
import pt3Img from '../../images/pt3.jpg';
import p4Img from '../../images/p4.jpg';
import './style.css';

function Ourteams() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <img className="img-fluid img_container" data-value="1" src={ptImg} alt="" />,
    <img className="img-fluid img_container" data-value="2" src={pt1Img} alt="" />,
    <img className="img-fluid img_container" data-value="3" src={pt2Img} alt="" />,
    <img className="img-fluid img_container" data-value="4" src={pt3Img} alt="" />,
    <img className="img-fluid img_container" data-value="5" src={p4Img} alt="" />,
  ];

  return (
    <div className="container">
      <div className="row">
        <div
          className="col  d-flex flex-column justify-content-center align-items-center "
          id="text_team"
        >
          <Slide bottom>
            <h2>Our Team</h2>
            <div className=" d-flex  w-100 align-items-center justify-content-center">
              <div className="img_team ">
                <AliceCarousel
                  mouseTracking
                  items={items}
                  responsive={responsive}
                  controlsStrategy="alternate"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Ourteams;
