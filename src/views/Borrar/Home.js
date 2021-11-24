import { useContext, useEffect } from "react";
import Header from "../../components/layout/Header";
import { AuthContext } from "../../hooks/contexts/AuthContext";

import HeroSection from "../../components/layout/HeroSection";
import ContactSection from "../../components/layout/ContactSection";
import Footer from "../../components/layout/Footer";
const Home = () => {
  const { checkAuthenticated, currentUser } = useContext(AuthContext);
  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header page={currentUser.user_role === "AD" ? "homeAdmin" : "home"} />
      <HeroSection bgImg={currentUser.user_role === "AD" ? "Admin" : ""} />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
