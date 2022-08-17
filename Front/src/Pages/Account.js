import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Account() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg={8}>
          <div className="shadow w-100 rounded p-5 mt-5">
            <h2 className="text-center mb-5">فرم ورود</h2>
            <Form className="d-flex justify-content-center align-items-center flex-column">
              <Form.Group className="mb-4 w-75">
                <Form.Label>ایمیل</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Exampel@gmail.com"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-4 w-75">
                <Form.Label>پسورد</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password..."
                ></Form.Control>
                <Link to={"/sign-in"}>
                  <p className=" mt-4">You do not have an account?</p>
                </Link>
                <Button className="w-100 mt-3">ورود</Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Account;
