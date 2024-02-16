import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionAddToFavourite,
  actionAddToPlaylist,
  actionPlaySong,
  actionRemoveFromFavuorite,
  actionRemoveFromPlaylist,
} from "../redux/actions";

// L'onCLick è stato messo sull' img in modo da non interferire con il click per aggiungere ai preferiti

// eslint-disable-next-line react/prop-types
const MusicRow = ({ title, artistName, setId }) => {
  const [songs, setSongs] = useState([]);

  const dispatch = useDispatch();

  const favouriteSongs = useSelector((state) => state.favourite.likedSongs);
  const playlistSong = useSelector((state) => state.playlist.playlistSong);

  const getSongs = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        const data = await response.json();
        const newData = data.data.slice(0, 4);
        console.log(newData);
        setSongs(newData);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   AGGIORNA IL LOCAL STORAGE AD OGNI AGGIUNTA DI UN LIKE ALLE CANZONI (O DISLIKE)
  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(favouriteSongs));
  }, [favouriteSongs]);

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlistSong));
  }, [playlistSong]);

  return (
    <Row>
      <Col xs={10}>
        <div id="rock">
          <h2>{title}</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id={setId}>
            {songs.map((song, i) => {
              return (
                <Col key={i} className="text-center">
                  <img
                    className="img-fluid"
                    src={song.album.cover_medium}
                    alt="track"
                    onClick={() => {
                      dispatch(actionPlaySong(songs[i]));
                    }}
                  ></img>
                  <p className="mb-0 pb-0">Track: {song.title}</p>
                  <p className="py-0 my-0">Artist: {song.artist.name}</p>
                  <p>
                    {!favouriteSongs.includes(song.title) ? (
                      <i
                        className="bi bi-heart text-white fs-4 me-3"
                        onClick={() => {
                          dispatch(actionAddToFavourite(song.title));
                        }}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-heart-fill text-white fs-4 me-3"
                        onClick={() => {
                          dispatch(actionRemoveFromFavuorite(song.title));
                        }}
                      ></i>
                    )}
                    {!playlistSong.includes(song.title) ? (
                      <i
                        className="bi bi-plus-circle text-white fs-4"
                        onClick={() => {
                          dispatch(actionAddToPlaylist(song.title));
                        }}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-check2 text-warning fs-4"
                        onClick={() => {
                          dispatch(actionRemoveFromPlaylist(song.title));
                        }}
                      ></i>
                    )}
                  </p>
                </Col>
              );
            })}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default MusicRow;
