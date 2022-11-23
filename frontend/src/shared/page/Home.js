import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AuthContext } from "../context/auth-context";

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
            <h4 className="m-5">คุณยังไม่ได้ทำการลงทะเบียน</h4>
            <h6> โปรดทำการลงทะเบียนก่อน</h6>
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
                  <Button variant="outline-warning">
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
    </div>
  );
};

export default Home;
