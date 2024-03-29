import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MusicRow from "./MusicRow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_SONGS1,
  GET_SONGS2,
  GET_SONGS3,
  IS_LOADING1,
  IS_LOADING2,
  IS_LOADING3,
  getSongs,
} from "../redux/actions";
import LoadingSpinner from "./LoadingSpinner";

const MainSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs("queen", GET_SONGS1, IS_LOADING1));
    dispatch(getSongs("katyperry", GET_SONGS2, IS_LOADING2));
    dispatch(getSongs("eminem", GET_SONGS3, IS_LOADING3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoading1 = useSelector((state) => state.fetch.isLoading1);
  const isLoading2 = useSelector((state) => state.fetch.isLoading2);
  const isLoading3 = useSelector((state) => state.fetch.isLoading3);

  // console.log(isLoading1);
  // console.log(isLoading2);
  // console.log(isLoading3);

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
      {isLoading1 ? (
        <LoadingSpinner />
      ) : (
        <MusicRow
          title="Rock Classics"
          artistName="queen"
          fetchReference="getSongs1"
        />
      )}
      {isLoading2 ? (
        <LoadingSpinner />
      ) : (
        <MusicRow
          title="Pop Culture"
          artistName="katyperry"
          fetchReference="getSongs2"
        />
      )}
      {isLoading3 ? (
        <LoadingSpinner />
      ) : (
        <MusicRow
          title="#HipHop"
          artistName="eminem"
          fetchReference="getSongs3"
          setId="hiphopSection"
        />
      )}
    </Col>
  );
};

export default MainSection;
