import React, { useMemo } from "react";

export default function CartSummary(props) {
  const taxRate = 0.05;
  const taxAmount = useMemo(() => {
    console.log("Calculating tax amount");
    return taxRate * props.totalPrice;
  }, [props.totalPrice]);

  return (
    <ul className="cart-summary">
      <li>Total: ${props.totalPrice}</li>
      <li>Tax: ${taxAmount}</li>
      <li>Grand Total: ${props.totalPrice + taxAmount}</li>
      <button>Proceed to Checkout</button>
    </ul>
  );
}
