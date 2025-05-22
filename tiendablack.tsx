"use client";

import React, { useState } from "react";
import Checkout from "@/components/commerce/Checkout";

export default function CheckoutPage() {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  function handleConfirmOrder(data: {
    name: string;
    phone: string;
    deliveryMethod: string;
    paymentMethod: string;
    discountCode: string;
  }) {
    // For demo, just alert the order data and mark as confirmed
    alert(
      `Pedido confirmado para ${data.name} con teléfono ${data.phone}. Método de entrega: ${data.deliveryMethod}. Método de pago: ${data.paymentMethod}. Cupón: ${data.discountCode}`
    );
    setOrderConfirmed(true);
  }

  // For demo, total is fixed or could be passed from cart context
  const total = 10000;

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <h2 className="text-2xl font-bold">¡Gracias por tu pedido!</h2>
      </div>
    );
  }

  return <Checkout total={total} onConfirm={handleConfirmOrder} />;
}
