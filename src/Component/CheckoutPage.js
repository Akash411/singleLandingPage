import React from "react";
import "./CheckoutPage.css";
import LogoHeader from "./LogoHeader";
import { Link } from "react-router-dom";

function CheckoutPage() {
  return (
    <div className="checkout">
      <LogoHeader />
      <h1>Hello I'm on Checkoutpage</h1>
    </div>
  );
}

export default CheckoutPage;
