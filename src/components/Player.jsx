import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const Player = () => {
  const activeSong = useSelector((state) => state.playing.activeSong);

  console.log(activeSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              {/* <div className="text-white text-center">
                <p></p>
              </div> */}
              {activeSong !== null && (
                <>
                  <p className="mb-0 mx-auto text-center text-white fs-6">
                    {activeSong.title_short} - {activeSong.artist.name}{" "}
                  </p>
                </>
              )}
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div
                className={
                  activeSong === null ? "progress mt-3" : "progress mt-2"
                }
              >
                <div role="progressbar"></div>
                <span className="text-white mb-4"></span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
