import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import OrderList from "../Components/OrderList/OrderList";
import { useDispatch, useSelector } from "react-redux";
import { FinalOrder } from "../App/OrderSlicer";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isVisibale, SetVisibale] = useState(false);
  const dispatch = useDispatch();
  const OrderLists = useSelector((state) => state.Order.value);
  let prices = [0];
  OrderLists.map((item) => {
    let newprice = item.price.slice(0, -1);
    return prices.push(Number(newprice));
  });
  const totalprice = prices.reduce((total, item) => {
    return total + item;
  });
  const buyBtnHandler = () => {
    SetVisibale(true);
    setTimeout(() => {
      dispatch(FinalOrder());
    }, 600);
    setTimeout(() => {
      SetVisibale(false);
    }, 3000);
  };
  return (
    <Container>
      <Row className="mt-5 mb-5 justify-content-center flex-column flex-md-row shadow p-3">
        <Col
          md={4}
          className=" p-5 text-center border-end flex-column d-flex justify-content-between"
        >
          <div>
            <h1 className="mb-4 text-muted">سبدخرید</h1>
          </div>
          <div>
            {OrderLists.length <= 0 ? (
              <Button className="btn-primary disabled w-100">خرید نهایی</Button>
            ) : (
              <div>
                <span className="bg-light p-0 p-md-2 w-100 text-nowrap rounded mb-3">
                  مجموع قیمت : {"$ " + totalprice}
                </span>
                <Button
                  onClick={() => buyBtnHandler()}
                  className="btn-primary mt-5 w-100"
                >
                  خرید نهایی
                </Button>
              </div>
            )}
          </div>
        </Col>

        <Col
          style={{ height: "500px" }}
          className="text-center overflow-scroll"
        >
          {OrderLists.length <= 0 ? (
            <h3
              style={{ marginTop: "200px" }}
              className="d-inline-block text-muted"
            >
              ! سبد خرید شما خالی است
            </h3>
          ) : (
            OrderLists.map((item, index) => {
              return (
                <OrderList
                  key={index}
                  image={item.image}
                  content={item.description}
                  price={item.price}
                  id={item._id}
                />
              );
            })
          )}
        </Col>
      </Row>
      {isVisibale ? (
        <Alert className="w-25" variant={"success"}>
          با تشکر از خرید شما
        </Alert>
      ) : null}
    </Container>
  );
}

export default Cart;
