import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MusicRow from "./MusicRow";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_SONGS1, GET_SONGS2, GET_SONGS3, getSongs } from "../redux/actions";

const MainSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs("queen", GET_SONGS1));
    dispatch(getSongs("katyperry", GET_SONGS2));
    dispatch(getSongs("eminem", GET_SONGS3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <Row className="mt-4">
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <MusicRow
        title="Rock Classics"
        artistName="queen"
        // fetchReference="getSongs1"
      />
      <MusicRow
        title="Pop Culture"
        artistName="katyperry"
        // fetchReference="getSongs2"
      />
      <MusicRow
        title="#HipHop"
        artistName="eminem"
        // fetchReference="getSongs3"
        setId="hiphopSection"
      />
    </Col>
  );
};

export default MainSection;
