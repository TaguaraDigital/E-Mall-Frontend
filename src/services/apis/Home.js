const HomeFinder = {};
// const URL = "http://localhost:3500/dashboard/";
const URL = "https://e-mall-backend.vercel.app/dashboard/";

HomeFinder.home = async (user) => {
  const response = await fetch(URL, {
    method: "GET",
    headers: { token: localStorage.token },
  });
  return await response.json();
};

export default HomeFinder;
