import React from 'react'


import InvoiceList from './InvoiceList'

const App = () => {
  const data = {
    customerName: 'Google',
    invoices: [
      {id: 123, name: 'Dev work', total: '20.00'},
      {id: 456, name: 'More Dev work', total: '50.00'},
      {id: 789, name: 'Even more dev work', total: '600.00'},
    ]
  }

  return (
    <div>
      <InvoiceList InvoiceData={data} />
    </div>
  );
};

export default App;
