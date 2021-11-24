import { GlobalStyle } from "./globalStyles";
import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthContext } from "./hooks/contexts/AuthContext";

import "./App.css";

import Landing from "./views/Landing";
import Login from "./views/Access/Login";
import Register from "./views/Access/Register";

import InvoicePending from "./views/invoices/InvoicesPending";
import InvoiceBalance from "./views/invoices/InvoicesBalance";
import InvoiceAdmin from "./views/invoices/InvoiceAdmin";
import Client from "./views/Clients/";
import Dashboard from "./views/Dashboard";
import InvoicePayments from "./views/invoices/InvoicesPayments";
import PaymentSuccess from "./components/invoices/PaymentSuccess";
import PaymentCancel from "./components/invoices/PaymentCancel";

const App = () => {
  const { isAuthenticated, checkAuthenticated, currentUser } =
    useContext(AuthContext);

  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <Dashboard />
            ) : (
              <Client />
            )
          }
        />

        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login />
            ) : currentUser.user_role === "AD" ? (
              <Dashboard />
            ) : (
              <Client />
            )
          }
        />

        <Route
          path="/register"
          element={
            !isAuthenticated ? (
              <Register />
            ) : currentUser.user_role === "AD" ? (
              <Dashboard />
            ) : (
              <Client />
            )
          }
        />

        <Route
          path="/client"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <Dashboard />
            ) : (
              <Client />
            )
          }
        />

        <Route
          path="/invoice"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <InvoiceAdmin />
            ) : (
              <InvoicePending />
            )
          }
        />

        <Route
          path="/invoicebalance"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <InvoiceAdmin />
            ) : (
              <InvoiceBalance />
            )
          }
        />

        <Route
          path="/payment"
          element={!isAuthenticated ? <Landing /> : <InvoicePayments />}
        />
        <Route path="/success" component={PaymentSuccess} exact></Route>
        <Route path="/cancel" component={PaymentCancel} exact></Route>

        <Route
          path="/*"
          element={
            !isAuthenticated ? (
              <Landing />
            ) : currentUser.user_role === "AD" ? (
              <Dashboard />
            ) : (
              <Client />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
