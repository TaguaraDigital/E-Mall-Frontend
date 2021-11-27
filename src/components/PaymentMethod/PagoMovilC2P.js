const request = require("request");

const options = {
  method: "POST",
  url: "https://apimbu.mercantilbanco.com/mercantil-banco/prod/v1/payment/c2p",
  headers: {
    "X-IBM-Client-Id": "REPLACE_THIS_KEY",
    "content-type": "application/json",
    accept: "application/json",
  },
  body: {
    merchant_identify: {
      integratorId: "1",
      merchantId: "150332",
      terminalId: "1",
    },
    client_identify: {
      ipaddress: "10.0.0.1",
      browser_agent: "Chrome 18.1.3",
      mobile: {
        manufacturer: "Samsung",
        model: "S9",
        os_version: "Oreo 9.1",
        location: { lat: 37.422476, lng: 122.08425 },
      },
    },
    transaction_c2p: {
      trx_type: "compra",
      payment_method: "c2p",
      destination_id: "AcTQ7V1gfkkhWIk0bT+Y+w==",
      invoice_number: "3564544",
      currency: "VES",
      amount: 2525.33,
      destination_bank_id: "0105",
      destination_mobile_number: "Hii5FFH00E9bpVHpvQA0HA==",
      payment_reference: "0057718281656",
      origin_mobile_number: "0RPdh6FxGFFcio2P8uxNxg==",
      twofactor_auth: "pUlaFdz3PTvDK9wbl7W3Rw==",
    },
  },
  json: true,
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
