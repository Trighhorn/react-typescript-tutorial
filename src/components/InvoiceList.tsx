import React from "react";
import { IInvoiceListData  } from '../../types'



const InvoiceList = (props: IInvoiceListData) => {
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
              <div>{invoice.total} - {invoice.paymentStatus}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InvoiceList;
