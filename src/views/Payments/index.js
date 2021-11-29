import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { FormatDecimal } from "../../services/utils/formats";

import InvoicesFinder from "../../services/apis/InvoicesFinder";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import Header from "../../components/layout/Header";
import ContactSection from "../../components/layout/ContactSection";
import Footer from "../../components/layout/Footer";
import DepositPayment from "../../components/Payments/DepositPayment";
import ZellePayment from "../../components/Payments/ZellePayments";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CLIENT_ID);

const CheckoutForm = ({ invoicesToPay, setIsError, setErrorMsg }) => {
  const navigate = useNavigate();

  const stripe = useStripe();
  const element = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: element.getElement(CardElement),
    });

    if (!error) {
      try {
        const response = await InvoicesFinder.payments(
          paymentMethod,
          invoicesToPay
        );

        // console.log(response)
        if (response.success) {
          // console.log('transaccion exitosa')
          navigate("/invoice");
        } else {
          // console.log('error', response.message)
          setErrorMsg(error.message);
          setIsError(true);
        }
      } catch (err) {}
    } else {
      setErrorMsg(error.message);
      console.log(error);
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container-tarjeta">
      <div className="datos-tarjeta">
        <CardElement />
      </div>
      <button>Pagar Recibos</button>
    </form>
  );
};

const Payments = () => {
  const { invoices, currentUser } = useContext(AuthContext);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const invoicesToPay = invoices.filter(
    (invoice) => invoice.invoice_status === 1
  );

  return (
    <>
      <Header page="home" />
      <div className="pago-container">
        {currentUser.paymentMethod === "transfer" ? (
          <>
            <DepositPayment
              invoicesToPay={invoicesToPay}
              amount={currentUser.payment_amount_USD}
            />
          </>
        ) : currentUser.paymentMethod === "zelle" ? (
          <>
            <ZellePayment
              invoicesToPay={invoicesToPay}
              amount={currentUser.payment_amount_USD}
            />
          </>
        ) : (
          <div className="tarjeta">
            <p>Monto a Pagar {FormatDecimal(currentUser.payment_amount)}</p>
            {isError ? (
              <h3>{errorMsg}</h3>
            ) : (
              <p> Favor introducir los datos para cancelar</p>
            )}
            <Elements stripe={stripePromise}>
              <CheckoutForm
                invoicesToPay={invoicesToPay}
                setIsError={setIsError}
                setErrorMsg={setErrorMsg}
              />
            </Elements>
          </div>
        )}
      </div>

      <ContactSection />
      <Footer />
    </>
  );
};

export default Payments;
