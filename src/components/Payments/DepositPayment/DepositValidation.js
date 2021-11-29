import * as Yup from "yup";

export const DepositSchema = Yup.object().shape({
  bank: Yup.string().required("Required"),
  reference: Yup.string().required("Requerido"),
  date: Yup.date().typeError("fecha invalida").required("Required"),
  amount: Yup.number().typeError("Monto invalido").required("Required"),
});
