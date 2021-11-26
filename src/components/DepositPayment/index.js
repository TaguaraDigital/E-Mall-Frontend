import styled from "styled-components";

import { Formik, Form, Field, ErrorMessage } from "formik";

import InvoicesFinder from "../../services/apis/InvoicesFinder";
import { DepositSchema } from "./DepositValidation";

const DepositSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const RegisterTransfer = async (reference, invoicesToPay) => {
  try {
    const response = await InvoicesFinder.transfer(invoicesToPay, reference);

    if (response.success) {
      alert("ok");
    } else {
      alert("Error");
      // console.log('error', response.message)
    }
  } catch (err) {}
};

const DepositPayment = ({ invoicesToPay, amount }) => {
  const onSubmit = (values, { resetForm }) => {
    RegisterTransfer(values, invoicesToPay, amount);
    resetForm();
  };

  return (
    <DepositSection>
      <Formik
        initialValues={{
          bank: "",
          reference: "",
          date: "",
          amount: "",
        }}
        validationSchema={DepositSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors }) => (
          <Form>
            <h2> Introduzca los datos del deposito o transferencia</h2>

            <div>
              <label className="form__label">Banco </label>
              <Field name="bank" placeholder="Banco al cual hizo el deposito" />
              <ErrorMessage
                name="bank"
                component={() => <div className="error">{errors.bank}</div>}
              />
            </div>

            <div className="long-txt">
              <label className="form__label">Referencia </label>
              <Field
                name="reference"
                placeholder="Numero de deposito o referencia de la transferencia"
              />
              <ErrorMessage
                name="reference"
                component={() => (
                  <div className="error">{errors.reference}</div>
                )}
              />
            </div>

            <div className="long-txt">
              <label className="form__label">Fecha </label>
              <Field name="date" type="date" />
              <ErrorMessage
                name="date"
                component={() => <div className="error">{errors.date}</div>}
              />
            </div>
            <div className="long-txt">
              <label className="form__label">Monto </label>
              <Field name="amount" />
              <ErrorMessage
                name="amount"
                component={() => <div className="error">{errors.amount}</div>}
              />
            </div>
            <button type="submit"> Enviar</button>
            <button type="submit"> Reset</button>
          </Form>
        )}
      </Formik>
    </DepositSection>
  );
};

export default DepositPayment;
