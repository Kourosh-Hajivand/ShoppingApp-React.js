import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footers.css";
function Footers() {
  return (
    <footer id="Main-Footer">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <a
              target={"_blank"}
              rel="noreferrer noopener"
              href="https://github.com/Kourosh-Hajivand"
            >
              <div className="footer-logo"></div>
            </a>
          </Col>
          <Col>
            <p className="Titel-Custom">This site made with :</p>
          </Col>
          <Col>
            <p className="list">Html 5</p>
            <p className="list">Css 3</p>
            <p className="list">Javascript</p>
          </Col>
          <Col>
            <p className="list">React</p>
            <p className="list">Redux</p>
            <p className="list">React-Router</p>
          </Col>
          <Col>
            <p className="list">Bootstrap</p>
            <p className="list">Bootstrap-React</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footers;
