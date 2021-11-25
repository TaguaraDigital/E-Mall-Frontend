import * as Yup from "yup";

export const ClientSchema = Yup.object().shape({
  client_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  client_CI: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  client_type: Yup.string(),
  client_phone1: Yup.string().required("Requerido"),
  client_phone2: Yup.string().required("Requerido"),
  client_phone3: Yup.string().required("Requerido"),
  client_date_birth: Yup.date().required("Required"),
  client_email: Yup.string().email("Invalid email").required("Required"),
});
