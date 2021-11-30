import { useContext } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InvoicesAll from "../../components/invoices/InvoicesAll";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import ContactSection from "../../components/layout/ContactSection";

const Invoice = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Header page="home" />
      <h1 className="title-center">
        Estado de cuenta del usuario {currentUser.user_name}
      </h1>
      <InvoicesAll />
      <ContactSection />

      <Footer />
    </>
  );
};

export default Invoice;
