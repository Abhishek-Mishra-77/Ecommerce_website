import React from "react";
import "./PaymentDone.css";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PaymentDone = () => {
  const paymentInfo = JSON.parse(localStorage.getItem("paymentInfo"));
  const amount = JSON.parse(localStorage.getItem("amount"));
  const navigate = useNavigate();
  const moveToShopHandler = () => {
    navigate("/");
    localStorage.removeItem("paymentInfo");
  };

  const handlePrint = async () => {
    const element = document.documentElement;

    const canvas = await html2canvas(element, {
      scale: 2,
      scrollX: 0,
      scrollY: 0,
      width: element.scrollWidth,
      height: element.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = imgWidth / imgHeight;
    let newWidth = pdfWidth;
    let newHeight = pdfWidth / ratio;

    if (newHeight > pdfHeight) {
      newHeight = pdfHeight;
      newWidth = pdfHeight * ratio;
    }

    pdf.addImage(imgData, "PNG", 0, 0, newWidth, newHeight);

    let heightLeft = imgHeight - newHeight;
    let position = 0;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, newWidth, newHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save("download.pdf");
  };

  console.log(paymentInfo);

  return (
    <div className="payment-page">
      <div className="payment-inner">
        <div className="payment-left">
          <h1>✅</h1>
          <h2>Payment succesful</h2>
        </div>
        <div className="payment-middle">
          <div className="payment-info-left">
            <p>Payment type</p>
            <p>userName</p>
            <p>UPIA</p>
            <p>Email</p>
            <p>Address</p>
            <p>Amount Paid</p>
            <p>Transaction id</p>
          </div>
          <div className="payment-info-right">
            <p>ATM Card</p>
            <p>{paymentInfo.card?.name}</p>
            <p>{paymentInfo.created}</p>
            <p>{paymentInfo.email}</p>
            <p>{paymentInfo.card.address_city}</p>
            <p>{amount} Rs</p>
            <p>{paymentInfo.id}</p>
          </div>
        </div>
        <div className="payment-bottom">
          <button onClick={handlePrint}>PRINT</button>
          <button onClick={moveToShopHandler}>CLOSE</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDone;
