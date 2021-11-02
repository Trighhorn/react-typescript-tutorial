import React from "react";

interface IInvoiceListProps {
  InvoiceData: {
    customerName: string;
    invoices: { id: number; name: string; total: string }[];
  };
  logo?: string;
}

const InvoiceList = (props: IInvoiceListProps) => {
  const { customerName, invoices } = props.InvoiceData;
  return (
    <div>
      <h1>{customerName}</h1>
      <hr />
      <div>
        {invoices.map((invoice) => {
          return (
            <div key={invoice.id} className="flex justify-between">
              <div>{invoice.name}</div>
              <div>{invoice.total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InvoiceList;
