import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import { FormatDecimal } from "../../services/utils/formats";

import {
  PayMethodButtons,
  PayMethodContainer,
  PayMethodSummary,
} from "./InvoicesPayMethod.Styles";

const InvoicesPayMethod = ({ amountToPay }) => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [totalToPay, setTotalToPay] = useState(amountToPay);
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handlePagarStripe = () => {
    // e.preventDefault();
    setCurrentUser((user) => {
      return { ...user, payment_amount: totalToPay };
    });
    navigate("/payment"); // Go to <InvoicePayments /> from "./views/invoices/InvoicesPayments"
  };

  const handlePagarPayPal = async () => {
    // e.preventDefault();
    alert(`Se va a pagar con PayPal`);
    // await InvoicesFinder.paymentsPayPal(1, currentUser, amountToPay);
    // setCurrentUser((user) => {
    //   return { ...user, payment_amount: amountToPay };
    // });
  };

  const handlePagarDebito = () => {
    // e.preventDefault();
    alert(`Se va a pagar con Transferencia o Deposito`);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    setTotalToPay((pre) => {
      return (amountToPay * 1.05 * 1.16).toFixed(2);
    });

    switch (paymentMethod) {
      case "PayPal":
        handlePagarPayPal();
        break;
      case "transfer":
        handlePagarDebito();
        break;
      case "stripe":
        handlePagarStripe();
        break;

      default:
        break;
    }
  };

  return (
    <>
      <PayMethodContainer>
        <PayMethodSummary>
          <div>
            <span>Subtotal :</span>
            <span>{FormatDecimal(amountToPay)}</span>
          </div>
          <div>
            <span>Taquilla Virtual :</span>
            <span>{FormatDecimal(amountToPay * 0.05)}</span>
          </div>
          <div>
            <span>Total :</span>
            <span>{FormatDecimal(amountToPay * 1.05)}</span>
          </div>
          <div>
            <span>16% IVA :</span>
            <span>{FormatDecimal(amountToPay * 1.05 * 0.16)}</span>
          </div>
          <div>
            <span>Total General: </span>
            <span>{FormatDecimal(amountToPay * 1.05 * 1.16)}</span>
          </div>
        </PayMethodSummary>
        <PayMethodButtons onSubmit={handlerSubmit}>
          <h2> Metodo de Pago</h2>
          <div>
            <div className="radio-button">
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="payment-method"
                required
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>
          <div>
            <div className="radio-button">
              <input
                type="radio"
                id="transfer"
                value="transfer"
                name="payment-method"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="transfer">Transferencia o Deposito </label>
            </div>
          </div>
          <div>
            <div className="radio-button">
              <input
                type="radio"
                id="stripe"
                value="stripe"
                name="payment-method"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="stripe">Stripe</label>
            </div>
          </div>
          <div>
            <button className="primary" type="submit">
              Pagar
            </button>
          </div>

          {/* <PayButton onClick={handlePagarStripe}>
            <FaCreditCard /> TDC
          </PayButton>
          <PayButton onClick={handlePagarPayPal} bgClr={"#FCB001"}>
            <FaPaypal /> PayPal
          </PayButton>
          <PayButton onClick={handlePagarDebito}>
            <FaRegCreditCard /> Debito
          </PayButton> */}
        </PayMethodButtons>
      </PayMethodContainer>
    </>
  );
};

export default InvoicesPayMethod;
