import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Container>
        <Row>
          <SideBar />
          <MainSection />
        </Row>
      </Container>
      <Player />
    </>
  );
}

export default App;
