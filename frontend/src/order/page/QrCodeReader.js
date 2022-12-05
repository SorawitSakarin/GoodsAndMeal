import React, { useRef, useState } from "react";
import { Card, Button, Container, Col, Row, Modal } from "react-bootstrap";
import { QrReader } from "react-qr-reader";
import { NavLink } from "react-router-dom";

const QrCodeReader = () => {
  const [qrCode, setQrCode] = useState([]);
  const [qrCodeNow, setQrCodeNow] = useState("");
  const qrRef = useRef(null);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleSave = () => {
    setShow(false);
    setQrCode((current) => [...current, qrCodeNow]);
  };
  const submitHandler = () => {
    console.log(qrCode);
    console.log(qrCodeNow);
  };
  const clearDataHandler =() =>{
    setQrCode([]);
    setQrCodeNow("");
  };

  //   const qrCodeHandler = async () => {
  //     const result = await liff.scanCodeV2();
  //     setQrCode(result.value);
  //   };

  return (
    <div>
      <Container>
        <Row className="m-5">
          <Col>
            <h1>จำนวน {qrCode.length}</h1>
          </Col>
          <Col>
            <h6>QrCode:</h6>
            <p>{qrCode}</p>
          </Col>
        </Row>
      </Container>
      <Card style={{ textAlign: "center" }}>
        <Card style={{ width: "100%" }}>
          <QrReader
            ref={qrRef}
            delay={500}
            constraints={{
              facingMode: "environment",
            }}
            style={{ width: "100%" }}
            onResult={(result, error) => {
              if (!!result) {
                handleShow();
                setQrCodeNow(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
          />
        </Card>
        <Card style={{ textAlign: "center" }}>
          <Container>
            <Row>
              <Col>
                <Button variant="danger" onClick={clearDataHandler}>
                  ยกเลิก
                </Button>
              </Col>
              <Col>
                <Button variant="warning" onClick={submitHandler}>
                  <NavLink to="/">ยืนยัน</NavLink>
                </Button>
              </Col>
            </Row>
          </Container>
        </Card>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>QrReader</Modal.Title>
        </Modal.Header>
        <Modal.Body>คุณได้ทำการแสกนรหัส {qrCodeNow} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ปิด
          </Button>
          <Button variant="primary" onClick={handleSave}>
            ยืนยัน
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default QrCodeReader;
