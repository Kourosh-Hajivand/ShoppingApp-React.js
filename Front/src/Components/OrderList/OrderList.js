import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DeletOrder } from "../../App/OrderSlicer";

function OrderList(props) {
  const dispatch = useDispatch();
  const DeleteOrderHandler = (id) => {
    dispatch(DeletOrder(id));
  };
  return (
    <Row className="shadow mx-3 p-3 my-3 rounded flex-column flex-md-row align-items-center">
      <Col className="mb-3 mb-md-0">
        <Image src={props.image} fluid />
      </Col>
      <Col className="mb-3 mb-md-0">{props.content}</Col>
      <Col className="mb-3 mb-md-0">{props.price}</Col>
      <Col className="mb-3 mb-md-0">
        <Button
          onClick={() => DeleteOrderHandler(props.id)}
          className="btn-danger"
        >
          حذف
        </Button>
      </Col>
    </Row>
  );
}

export default OrderList;
