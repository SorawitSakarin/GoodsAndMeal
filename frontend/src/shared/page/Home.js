import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Col, Container, Row, Figure } from "react-bootstrap";
import { AuthContext } from "../context/auth-context";
import GMLogo from "../../images/GMLogo.png";

const Home = () => {
  const auth = useContext(AuthContext);
  // const liff = window.liff;
  //const liffid = "1657554488-4q7a7Olo";
  // const [profile, setProfile] = useState({
  //   userId: "",
  //   displayName: "",
  //   statusMessage: "",
  //   email:""
  // });
  // useEffect(() => {
  //   const getUserProfile = async () => {
  //     const userLineProfile = await liff.getProfile();
  //     setProfile({
  //       ...profile,
  //       userId: userLineProfile.userId,
  //       displayName: userLineProfile.displayName,
  //       statusMessage: userLineProfile.statusMessage,
  //       email: liff.getDecodedIDToken().email
  //     });
  //   };
  //   getUserProfile();
  // }, []);
  return (
    <div>
      Home Jaaaaa
      <Card>
        <ul>
          <li>
            <NavLink to="/order">Order</NavLink>
          </li>
        </ul>
      </Card>
      <div>
        <Card>
          <p>userId:{auth.userId}</p>
          <p>displayName: {auth.displayName}</p>
          <p>statusMessage: {auth.statusMessage}</p>
          <p>email: {auth.email}</p>
        </Card>
      </div>
      <br></br>
      <div>
        {auth.position && <p>You have a position</p>}
        {!auth.position && (
          <Card style={{ textAlign: "center" }}>
            <Figure className="m-5">
              <Figure.Image width={200} alt="GoodsMealLogo" src={GMLogo} />
            </Figure>
            <h4 className="mb-1">คุณยังไม่ได้ทำการลงทะเบียน</h4>
            <h4> โปรดทำการลงทะเบียนก่อน</h4>
            <Container>
              <Row>
                <Col>
                  <Button variant="warning">
                    <NavLink to="/arealeaderregistration">
                      ลงทะเบียนเป็น Area leader
                    </NavLink>
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-warning" disabled={false}>
                    <NavLink to="/riderregistration">
                      ลงทะเบียนเป็นคนขับ Rider
                    </NavLink>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card>
        )}
      </div>
      <div>
        <Card style={{ textAlign: "center" }}>
          <Container>
            <Row>
              <Col>
                <Button variant="warning">
                  <NavLink to="/order">ดู Order รายวัน</NavLink>
                </Button>
              </Col>
              <Col>
                <Button variant="outline-warning">
                  <NavLink to="/qrcodeReader">Scan QrCode</NavLink>
                </Button>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    </div>
  );
};

export default Home;
