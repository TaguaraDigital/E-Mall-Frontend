import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import InvoicesFinder from "../../../services/apis/InvoicesFinder";
import {
  FormField,
  RowBottons,
  Title,
  ZelleSection,
} from "./ZellePaymen.Style";
import { ZelleSchema } from "./ZelleValidation";

const ZellePayment = ({ invoicesToPay, amount }) => {
  const navigate = useNavigate();

  const RegisterZelle = async (reference, invoicesToPay) => {
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
    RegisterZelle(values, invoicesToPay, amount);
    resetForm();
  };

  return (
    <ZelleSection>
      <Formik
        initialValues={{
          reference: "",
          date: "",
          amount: "",
        }}
        validationSchema={ZelleSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors }) => (
          <>
            <Title> Introduzca los datos del Zelle</Title>
            <Form>
              <FormField>
                <label className="form__label">Referencia </label>
                <Field name="reference" placeholder="Referencia del Zelle" />
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
    </ZelleSection>
  );
};

export default ZellePayment;
