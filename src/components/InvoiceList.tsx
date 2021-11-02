import React from "react";

interface IInvoiceListProps {
  InvoiceData: {
    customerName: string;
    invoices: { id: number; name: string; total: string }[];
  };
  logo?: string;
}

const InvoiceList = (props: IInvoiceListProps) => {
    const {customerName, invoices} = props.InvoiceData
  return (
    <div>
      <h1>{customerName}</h1>
      <h1>{invoices}</h1>
    </div>
  );
};

export default InvoiceList;
