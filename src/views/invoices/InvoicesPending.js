import { useContext } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InvoicesPendingCollection from "../../components/invoices/InvoicesPendingCollection";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import ContactSection from "../../components/layout/ContactSection";

const Invoice = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Header page="home" />
      <h1 className="title-center">Deuda de usuario {currentUser.user_name}</h1>
      <InvoicesPendingCollection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Invoice;
