import React from "react";

const OrderForm = () => {
  return (
    <form>
      <h2>Order Pizza</h2>
      <label>
        Pizza Type:
        <input type="text" name="pizzaType" required />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" required />
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
