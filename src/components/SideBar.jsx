import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo/logo.png";
import { useState } from "react";
import PersonalPlaylist from "./PersonalPlaylist";

const SideBar = () => {
  // AGGIUNGO IL CONTROLLO DEL FORM
  const [search, setSearch] = useState("");

  return (
    <Col>
      <Navbar
        expand="md"
        className="fixed-left justify-content-between"
        id="sidebar"
      >
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></Navbar.Toggle>
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="d-flex flex-column">
              <Nav.Link className="d-flex align-items-center" href="#home">
                <i className="bi bi-house-door-fill"></i>&nbsp; Home
              </Nav.Link>
              <Nav.Link className="d-flex align-items-center" href="#library">
                <i className="bi bi-book-fill"></i>&nbsp; Your Library
              </Nav.Link>
              <Nav.Link>
                <Form className="input-group">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  <div className="input-group-append">
                    <Button
                      variant="black"
                      className="btn btn-outline-secondary btn-sm h-100"
                    >
                      GO
                    </Button>
                  </div>
                </Form>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <PersonalPlaylist />
        <div className="nav-btn">
          <Button
            variant="info"
            className="rounded-pill signup-btn"
            type="button"
          >
            Sign Up
          </Button>
          <Button
            variant="black"
            className="rounded-pill btn login-btn text-white border-white"
            type="button"
          >
            Login
          </Button>
          <p className="mb-0">
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </p>
        </div>
      </Navbar>
    </Col>
  );
};

export default SideBar;
