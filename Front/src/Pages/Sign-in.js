import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Singin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Row className="justify-content-center mt-5 mb-5 mb-md-0">
        <Col sm={12} lg={8} className="shadow  p-5 roundedsad">
          <Row className="mb-5">
            <Col className="text-center">
              <h2>فرم ثبت نام</h2>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col sm={12} md={6} className="mb-4">
              <Form.Group>
                <Form.Label>نام</Form.Label>
                <Form.Control placeholder="First Name..." />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control placeholder="Last Name..." />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-4">
              <Form.Group>
                <Form.Label>ایمیل</Form.Label>
                <Form.Control placeholder="Exampel@gmail.com" type="email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>شماره تلفن </Form.Label>
                <Form.Control placeholder="0912345678" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>پسورد</Form.Label>
                <Form.Control placeholder="Password..." type="password" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to={"/Profile"}>
                <p className=" mt-4">Already have an account?</p>
              </Link>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Button className="w-25">ثبت نام </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Singin;
