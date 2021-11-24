import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Clients from "../../components/UpdateClient/ClientUpdate";
import ContactSection from "../../components/layout/ContactSection";

const ClientUpdate = () => {
  return (
    <>
      <Header page="home" />
      <Clients />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ClientUpdate;
