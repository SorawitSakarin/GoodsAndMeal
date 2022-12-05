import React, { useEffect, useRef, useState } from "react";
import LogoBanner from "../images/LogoBanner.png";
import {
  Card,
  Col,
  Container,
  Figure,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Wrapper, Status} from '@googlemaps/react-wrapper';

const ALRegistration = () => {
 
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      sex: "",
      DOB: "",
      mainJob: "",
      secJob: "",
      salary: "",
      tel: "",
      vehicle: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("โปรดระบุชื่อจริง"),
      lastName: Yup.string().required("โปรดระบุนามสกุล"),
      sex: Yup.string().required("โปรดระบุ"),
      tel: Yup.string()
        .required("โปรดระบุเบอร์โทร")
        .length(10, "โปรดระบุตัวเลข 10 หลัก"),
      mainJob: Yup.string().required(
        "โปรดระบุอาชีพ หากไม่มีโปรดพิมพ์คำว่า ไม่มี"
      ),
      secJob: Yup.string(),
      salary: Yup.string().required("โปรดระบุเงินเดือน"),
      DOB: Yup.date().required("โปรดระบุวันเกิด"),
      vehicle: Yup.string().required("โปรดระบุยานพาหนะ"),
    }),
    onSubmit: (values) => {
      console.log({rider: values});
    },
  });


//   const render = (status: Status) => {
//     return <h1>{status}</h1>;
//   };

//   const Map: FC<{}> = () => {}; 

const ref = useRef(null);
const [map,setMap] = useState();
useEffect(()=>{
if(ref.current &&!map){
    setMap(new window.google.maps.Map(ref.current,{}));
}
},[ref,map])

  return (
    <Container className="text-center" style={{ width: "600px" }}>
      <Col>
        <Row className="m-3">
          <Figure>
            <Figure.Image width={600} alt="GoodsMealBanner" src={LogoBanner} />
          </Figure>
        </Row>
        <Row className="m-3">
          <h4>
            แบบสอบถามสำหรับผู้ที่สนใจเป็นตำแหน่ง Rider กับ Goodsmeal{" "}
          </h4>
        </Row>
        <Row className="m-3">
          <h6>
            ข้อมูลที่ทาง Goodsmeal ทำการสอบถามจะถูกเป็นความลับกับบริษัท
            ไม่มีการเปิดเผยข้อมูลต่อบุคคลภายนอก ตามกฏหมาย PDPA
            บัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.2562
          </h6>
          <br />
        </Row>
        <Row className="m-3">
          <Card className="shadow">
            <Form noValidation onSubmit={formik.handleSubmit}>
              <Container>
                <Row>
                  <Col>
                    <Form.Group className="p-2">
                      <Form.Label>ชื่อ*</Form.Label>
                      <Form.Control
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="ชื่อจริง"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <p className="text-danger">{formik.errors.firstName}</p>
                    ) : null}
                  </Col>
                  <Col>
                    <Form.Group className="p-2">
                      <Form.Label>นามสกุล*</Form.Label>
                      <Form.Control
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="นามสกุล"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <p className="text-danger">{formik.errors.lastName}</p>
                    ) : null}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="p-2">
                      <Form.Label>เพศ*</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        id="sex"
                        name="sex"
                        type="text"
                        placeholder="ชื่อจริง"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.sex}
                      >
                        <option>กรุณาระบุเพศ</option>
                        <option value="ชาย / Male">ชาย / Male</option>
                        <option value="หญิง / Female">หญิง / Female</option>
                        <option value="เพศทางเลือก / LGBTQIA+">
                          เพศทางเลือก / LGBTQIA+
                        </option>
                        <option value="ไม่ต้องการระบุ">ไม่ต้องการระบุ</option>
                      </Form.Select>
                    </Form.Group>
                    {formik.touched.sex && formik.errors.sex ? (
                      <p className="text-danger">{formik.errors.sex}</p>
                    ) : null}
                  </Col>
                  <Col>
                    <Form.Group className="p-2">
                      <Form.Label>เบอร์โทรติดต่อ*</Form.Label>
                      <Form.Control
                        id="tel"
                        name="tel"
                        type="text"
                        placeholder="0812345678"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tel}
                      />
                    </Form.Group>
                    {formik.touched.tel && formik.errors.tel ? (
                      <p className="text-danger">{formik.errors.tel}</p>
                    ) : null}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="p-2">
                      <Form.Label>วันเกิด*</Form.Label>
                      <Form.Control
                        id="DOB"
                        name="DOB"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DOB}
                      />
                    </Form.Group>
                    {formik.touched.DOB && formik.errors.DOB ? (
                      <p className="text-danger">{formik.errors.DOB}</p>
                    ) : null}
                  </Col>
                  <Col>
                    <Form.Group className="p-2">
                      <Form.Label>ยานพาหนะ*</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        id="vehicle"
                        name="vehicle"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.vehicle}
                      >
                        {[
                        "กรุณาระบุยานพาหนะ",
                        "รถยนต์",
                        "จักรยานยนต์",
                        "จักรยาน",
                        "ไม่มี"
                      ].map((item) => {
                         return (<option value={item}>{item}</option>);
                      })}
                        
                      </Form.Select>
                    </Form.Group>
                    {formik.touched.vehicle && formik.errors.vehicle ? (
                      <p className="text-danger">{formik.errors.vehicle}</p>
                    ) : null}
                  </Col>
                </Row>
                <Row>
                  <Form.Group className="p-2">
                    <Form.Label>อาชีพหลัก*</Form.Label>
                    <Form.Control
                      id="mainJob"
                      name="mainJob"
                      type="text"
                      placeholder="พนักงานบริษัท/Officer"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mainJob}
                    />
                  </Form.Group>
                  {formik.touched.mainJob && formik.errors.mainJob ? (
                    <p className="text-danger">{formik.errors.mainJob}</p>
                  ) : null}
                </Row>
                <Row>
                  <Form.Group className="p-2">
                    <Form.Label>อาชีพรอง</Form.Label>
                    <Form.Control
                      id="secJob"
                      name="secJob"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.secJob}
                    />
                  </Form.Group>
                  {formik.touched.secJob && formik.errors.secJob ? (
                    <p className="text-danger">{formik.errors.secJob}</p>
                  ) : null}
                </Row>
                <Row>
                  <Form.Group className="p-2">
                    <Form.Label>รายได้ปัจจุบันต่อเดือน*</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      id="salary"
                      name="salary"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.salary}
                    >
                      {["กรุณาระบุรายได้",
                        "น้อยกว่า 5,000",
                        "5,000-10,000",
                        "10,000-15,000",
                        "15,000-20,000",
                        "20,000-25,000",
                        "25,000-30,000",
                        "มากกว่า 30,000",
                      ].map((item) => {
                       return (<option value={item}>{item}</option>);
                      })}
                    </Form.Select>
                  </Form.Group>
                  {formik.touched.salary && formik.errors.salary ? (
                    <p className="text-danger">{formik.errors.salary}</p>
                  ) : null}
                </Row>
              </Container>
              <Button variant="warning" type="submit" className="m-3">
                {" "}
                submit{" "}
              </Button>
            </Form>
          </Card>
        </Row>
      </Col>
    </Container>
  );
};

export default ALRegistration;
