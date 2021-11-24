import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ClientTable from "../../components/UpdateClient/ClientTable";

const ClientUpdate = () => {
  return (
    <>
      <Header page="home" />

      <ClientTable />
      <Footer id="footer" />
    </>
  );
};

export default ClientUpdate;
