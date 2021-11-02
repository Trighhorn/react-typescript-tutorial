export interface IInvoiceListData {
  InvoiceData: InvoiceDataType;
  logo?: string;
}

export type InvoiceDataType = {
  customerName: string;
  invoices: InvoiceType[];
};

export type InvoiceType = {
  id: number;
  name: string;
  total: string;
  paymentStatus: PaymentStatusType;
};

export type PaymentStatusType = "paid" | "pending" | "late";
