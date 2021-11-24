const InvoicesFinder = {};
// const URL = "http://localhost:3500/invoices/";
const URL = "https://e-mall-backend.vercel.app/invoices/";

InvoicesFinder.pending = async (user) => {
  //  const response = await fetch(URL + "pending", {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", token: localStorage.token },
    body: JSON.stringify({ client_code: user }),
  });
  return await response.json();
};

InvoicesFinder.payments = async (paymentMethod, invoices) => {
  const response = await fetch(URL + "payment", {
    method: "PUT",
    headers: { "Content-Type": "application/json", token: localStorage.token },
    body: JSON.stringify({ paymentMethod, invoices }),
  });
  return await response.json();
};

InvoicesFinder.paymentsStripe = async (paymentMethod, invoices) => {
  const response = await fetch(URL + "payment/stripe", {
    method: "PUT",
    headers: { "Content-Type": "application/json", token: localStorage.token },
    body: JSON.stringify({ paymentMethod, invoices }),
  });
  return await response.json();
};

InvoicesFinder.paymentsPayPal = async (val, paymentMethod, invoices) => {
  const apiSetQrcode = process.env.REACT_APP_URL1 + "/api/paypal/payment";
  let value = val;

  try {
    //llama a paypal para que se realice el cobro
    const response = await fetch(apiSetQrcode, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value,
      }),
    });

    if (response.ok) {
      const json = await response.json();
      window.location.assign(json.link);

      const responseBackend = await fetch(URL + "payment/paypal", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
        body: JSON.stringify({ paymentMethod, invoices }),
      });
      return await responseBackend.json();
    }
  } catch (err) {
    console.error(err);
  }
};

InvoicesFinder.allById = async (user) => {
  const response = await fetch(URL + "pending", {
    method: "POST",
    headers: { "Content-Type": "application/json", token: localStorage.token },
    body: JSON.stringify({ ...user }),
  });
  return await response.json();
};

InvoicesFinder.all = async (user) => {
  const response = await fetch(URL + "all", {
    method: "POST",
    headers: { "Content-Type": "application/json", token: localStorage.token },
    body: JSON.stringify({ client_code: user }),
  });
  return await response.json();
};

export default InvoicesFinder;
