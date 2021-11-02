import React from "react";

import InvoiceList from "./InvoiceList";
import { InvoiceDataType } from '../../types'


const App = () => {
  const data: InvoiceDataType = {
    customerName: "Google",
    invoices: [
      { id: 123, name: "Dev work", total: "20.00", paymentStatus: "paid" },
      { id: 456, name: "More Dev work", total: "50.00", paymentStatus: "pending" },
      { id: 789, name: "Even more dev work", total: "600.00", paymentStatus: "late" },
    ],
  };

  return (
    <div>
      <InvoiceList InvoiceData={data} />
    </div>
  );
};

export default App;
