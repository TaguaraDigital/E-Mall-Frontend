import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { bankData } from "../../../data/bankData";
import InvoicesFinder from "../../../services/apis/InvoicesFinder";
import {
  DepositSection,
  FormField,
  RowBottons,
  Title,
} from "./DepositPayment.Style";
import { DepositSchema } from "./DepositValidation";

const DepositPayment = ({ invoicesToPay, amount }) => {
  const navigate = useNavigate();

  const RegisterTransfer = async (reference, invoicesToPay) => {
    try {
      const response = await InvoicesFinder.transfer(invoicesToPay, reference);

      if (response.success) {
        navigate("/clientes");
      } else {
        alert("Error");
        // console.log('error', response.message)
      }
    } catch (err) {}
  };

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
          <>
            <Title> Introduzca los datos del deposito o transferencia</Title>
            <Form>
              <FormField>
                <label className="form__label">Banco :</label>
                <Field name="bank" as="select" label="Seleccionar Banco">
                  {bankData.map((bank) => {
                    return (
                      <option key={bank.codigo} value={bank.codigo}>
                        {bank.nombre}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage
                  name="bank"
                  component={() => <div className="error">{errors.bank}</div>}
                />
              </FormField>
              <FormField>
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
              </FormField>
              <FormField>
                <label className="form__label">Fecha </label>
                <Field name="date" type="date" />
                <ErrorMessage
                  name="date"
                  component={() => <div className="error">{errors.date}</div>}
                />
              </FormField>
              <FormField>
                <label className="form__label">Monto </label>
                <Field name="amount" />
                <ErrorMessage
                  name="amount"
                  component={() => <div className="error">{errors.amount}</div>}
                />
              </FormField>
              <RowBottons>
                <button type="submit"> Enviar</button>
                <button type="submit"> Reset</button>
              </RowBottons>
            </Form>
          </>
        )}
      </Formik>
    </DepositSection>
  );
};

export default DepositPayment;
