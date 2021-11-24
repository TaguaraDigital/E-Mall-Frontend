import { useContext } from "react";
import Header from "../../components/layout/Header";
import ContactSection from "../../components/layout/ContactSection";
import Footer from "../../components/layout/Footer";
import { AuthContext } from "../../hooks/contexts/AuthContext";

const Invoice = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Header page="home" />
      <h1>
        Aqui se debe mostrar las cuentas para el {currentUser.user_name} que es
        adminitrador
      </h1>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Invoice;
