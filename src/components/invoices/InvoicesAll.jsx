import { useEffect, useContext } from "react";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import InvoicesFinder from "../../services/apis/InvoicesFinder";

import { FormatDecimal, FormatDate } from "../../services/utils/formats";

const InvoicesAll = () => {
  const { currentUser, checkAuthenticated, invoicesAll, setInvoicesAll } =
    useContext(AuthContext);

  const cal_balance = (invoices) => {
    const rec = [];
    let balance = currentUser.user_initial_balance;

    invoices.map((invoice, i) => {
      if (invoice.invoice_status === 0) {
        balance = balance + invoice.invoice_amount;
      }
      rec.push({ ...invoice, balance });
      return rec;
    });
    return rec;
  };

  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await InvoicesFinder.all(currentUser.client_code);

        setInvoicesAll(cal_balance(response.data.invoices));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="list-group">
      <table className="smart-table">
        <caption>Estado Cuenta </caption>
        <thead>
          <tr>
            <th> Numero </th>
            <th> Factura </th>
            <th> Fecha </th>
            <th> Descripcion </th>
            <th> Monto USD </th>
            <th> Monto Bs. </th>
            <th> Status </th>
            <th> Fecha Pago </th>
            <th> Saldo </th>
          </tr>
        </thead>
        <tbody>
          {invoicesAll &&
            invoicesAll.length > 0 &&
            invoicesAll.map((invoice, i) => {
              return (
                <tr
                  // onClick={() => handleInvoicetSelect(invoice.invoice_id)}
                  key={invoice.invoice_id}
                >
                  <td data-col-title="Numero"> {i + 1} </td>
                  <td data-col-title="Factura"> {invoice.invoice_id} </td>
                  <td data-col-title="Fecha">{FormatDate(invoice.due_date)}</td>
                  <td data-col-title="Descripcion">
                    {invoice.invoice_description}
                  </td>
                  <td data-col-title="Monto USD">
                    {FormatDecimal(invoice.invoice_amount)}
                  </td>
                  <td data-col-title="Monto Bs.">
                    {FormatDecimal(invoice.invoice_amount * 4.4)}
                  </td>
                  {invoice.invoice_status === 2 ? (
                    <td data-col-title="Status"> Cancelado </td>
                  ) : invoice.invoice_status === 1 ? (
                    <td data-col-title="Status">{invoice.payment_reference}</td>
                  ) : (
                    <td data-col-title="Status"> Pendiente </td>
                  )}
                  {invoice.invoice_status !== 0 ? (
                    <td data-col-title="Fecha Pago">
                      {FormatDate(invoice.payment_date)}
                    </td>
                  ) : (
                    <td data-col-title="Fecha Pago"> - </td>
                  )}
                  <td data-col-title="Saldo">
                    {" "}
                    {FormatDecimal(invoice.balance)}{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesAll;
