import { useEffect, useContext } from "react";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import InvoicesFinder from "../../services/apis/InvoicesFinder";
import { FormatDecimal, FormatDate } from "../../services/utils/formats";

const InvoiceToConfirm = () => {
  const { checkAuthenticated, invoices, setInvoices } = useContext(AuthContext);

  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await InvoicesFinder.toConfirm();
        setInvoices(response.data.invoices);
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
        <caption>Recibos porConfirmar</caption>
        <thead>
          <tr>
            <th> Numero </th>
            <th> Socio </th>
            <th> Factura </th>
            <th> Fecha </th>
            <th> Referencia </th>
            <th> Monto US$ </th>
            <th> Monto Bs. </th>
            <th> Confirmar </th>
          </tr>
        </thead>
        <tbody>
          {invoices &&
            invoices.length > 0 &&
            invoices.map((invoice, i) => {
              return (
                <tr key={invoice.invoice_id}>
                  <td data-col-title="Numero"> {i + 1} </td>
                  <td data-col-title="Socio"> {invoice.client_code} </td>
                  <td data-col-title="Factura"> {invoice.invoice_id} </td>
                  <td data-col-title="Fecha">
                    {FormatDate(invoice.payment_date)}
                  </td>
                  <td data-col-title="Refencia">{invoice.payment_reference}</td>
                  <td data-col-title="Monto US$">
                    {FormatDecimal(invoice.invoice_amount)}
                  </td>
                  <td data-col-title="Monto Bs.">
                    {FormatDecimal(invoice.invoice_amount * 4.4)}
                  </td>
                  <td data-col-title="Pagar">
                    <input
                      type="checkbox"
                      checked={invoice.invoice_status === 1}
                      name={"check" + invoice.invoice_id}
                      id={"check" + invoice.invoice_id}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceToConfirm;
