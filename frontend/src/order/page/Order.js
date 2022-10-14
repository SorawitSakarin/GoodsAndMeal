import React ,{useState}from "react";
import Card from '../../shared/components/UIElements/Card';
import Button from'../../shared/components/FormElements/Button';

const Order =()=>{
    const [qrCode, setQrCode] = useState('')
    const liff = window.liff;
    if (!liff.isLoggedIn()) {
        liff.login();
      }

    const qrCodeHandler = async() =>{
        const result = await liff.scanCodeV2();
        setQrCode(result.value);
    };

    return(
        <Card>
        <div>
            Order here!!
            <div>
                qrCode = {qrCode}
            </div>
        </div>
        <Button onClick = {qrCodeHandler}>
            Scan QrCode
        </Button>
        </Card>
    )
};


export default Order;