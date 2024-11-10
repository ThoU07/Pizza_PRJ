import React from "react";
import "../Form/ModalForm.css";

const OrderForm = () => {
  return (
    <form className="login-form" action="/submit-login" method="POST">
      <h2>Order Pizza</h2>
      <label>
        Pizza Type:
        <input type="text" name="pizzaType" required />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" required />
      </label>
      <button className="formbtn" type="submit">
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
