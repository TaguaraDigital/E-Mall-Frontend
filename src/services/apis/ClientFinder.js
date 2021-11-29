const ClientFinder = {};
const URL = process.env.REACT_APP_URL_SERVER + "client/";
// const URL = "http://localhost:3500/client/";

ClientFinder.byId = async (user_id) => {
  const response = await fetch(`${URL}${user_id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", token: localStorage.token },
  });
  return await response.json();
};

ClientFinder.update = async (user_id, user) => {
  const response = await fetch(`${URL}${user_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", token: localStorage.token },
    body: JSON.stringify({ user }),
  });
  return await response.json();
};

ClientFinder.all = async (user) => {
  const response = await fetch(URL + "all", {
    method: "GET",
    headers: { "Content-Type": "application/json", token: localStorage.token },
  });

  return await response.json();
};

export default ClientFinder;
