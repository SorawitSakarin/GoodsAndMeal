import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

const Order = () => {
  const [qrCode, setQrCode] = useState("");
  const liff = window.liff;
  if (!liff.isLoggedIn()) {
    liff.login();
  }

  const qrCodeHandler = async () => {
    const result = await liff.scanCodeV2();
    setQrCode(result.value);
  };

  return (
    <Card>
      <div>
        <Card>Order here!!</Card>
        <Card>
            <div>
                ข้าวผัด 20 กล่อง
            </div>
            <div>
                ข้าวต้มปลา 35 กล่อง
            </div>
            <div>
                แซนด์วิชทูน่า 40 กล่อง
            </div>
        </Card>
        <br/>
        <div>qrCode = {qrCode}</div>
        <br/>
      </div>
      <Button onClick={qrCodeHandler}>Scan QrCode</Button>
    </Card>
  );
};

export default Order;
