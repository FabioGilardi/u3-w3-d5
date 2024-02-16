import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

// ANCHE QUI HO CREATO UN LOCAL STORAGE CHE TIENE IN MEMORIA LE CANZONI AGGIUNTE ALLA PLAYLIST (NON E' IN QUESTO COMPONENTE)

const PersonalPlaylist = () => {
  const playlistSong = useSelector((state) => state.playlist.playlistSong);

  return (
    <Container fluid>
      <Row>
        <Col className="text-white">
          <h6>
            <i className="bi bi-music-note-beamed"></i> Personal Playlist:
          </h6>
          <ul className="text-white list-unstyled">
            {playlistSong.length === 0 && <li>Add something now...</li>}
            {playlistSong.length !== 0 &&
              playlistSong.map((song, i) => {
                return <li key={i}>{song}</li>;
              })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalPlaylist;
