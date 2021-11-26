import * as Yup from "yup";

export const DepositSchema = Yup.object().shape({
  bank: Yup.string().required("Required"),
  reference: Yup.string().required("Requerido"),
  date: Yup.date().required("Required"),
  amount: Yup.number("monto invalido").required("Required"),
});
