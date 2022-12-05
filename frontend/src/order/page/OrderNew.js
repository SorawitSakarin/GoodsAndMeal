import React, { useRef, useState } from "react";
import { Card, Button, Container, Col, Row, Figure } from "react-bootstrap";
import GMLogo from "../../../src/images/GMLogo.png";
import { NavLink } from "react-router-dom";

const OrderNew = () => {
  let DUMMY_DATE = new Date();
  DUMMY_DATE = DUMMY_DATE.toISOString().substring(0, 10);
  const DUMMY_DATA = [
    "ข้าวผัด 20 กล่อง",
    "ข้าวต้มปลา 35 กล่อง",
    "แซนด์วิชทูน่า 40 กล่อง",
  ];

  //   const qrCodeHandler = async () => {
  //     const result = await liff.scanCodeV2();
  //     setQrCode(result.value);
  //   };

  return (
    <Container className="text-center" style={{ width: "600px" }}>
      <Figure className="m-5">
        <Figure.Image width={200} alt="GoodsMealLogo" src={GMLogo} />
      </Figure>

      <Row>
        <Card className="text-center">
          <Card.Header as="h5">เมนูอาหารวันนี้ {DUMMY_DATE}</Card.Header>
          <Card.Body>
            <Card.Text>
              {DUMMY_DATA.map((item) => {
                return <p>{item}</p>;
              })}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <br />
      </Row>
      {/* <Button onClick={qrCodeHandler}>Scan QrCode</Button> */}
      <Row>
        <Button variant="warning" style={{ width: "200px" }}>
          <NavLink to="/qrcodereader">แสกน Qrcode</NavLink>
        </Button>
      </Row>
    </Container>
  );
};

export default OrderNew;
