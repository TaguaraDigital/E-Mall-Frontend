import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import InvoicesFinder from "../../services/apis/InvoicesFinder";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import Header from "../../components/layout/Header";
import ContactSection from "../../components/layout/ContactSection";
import Footer from "../../components/layout/Footer";

const stripePromise = loadStripe(
  "pk_test_51IH9hULbPZwPVRy0NM7zPUokRw3cGYLK3c15uSAkK21EIUxGCw7N9rCvDlFIpfgBun50VbzuB4Qr52Pe7UdJmMTs00mmWHZ3W0"
);

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
        <div className="tarjeta">
          <h1>{currentUser.email}</h1>
          <h2>Monto a Pagar {currentUser.payment_amount}</h2>
          {isError ? (
            <h3>{errorMsg}</h3>
          ) : (
            <h3>Intorduzca los datos para cancelar</h3>
          )}
          <Elements stripe={stripePromise}>
            <CheckoutForm
              invoicesToPay={invoicesToPay}
              setIsError={setIsError}
              setErrorMsg={setErrorMsg}
            />
          </Elements>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Payments;
