import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/contexts/AuthContext";

const InvoicesPayMethod = ({ amountToPay }) => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handlePagar = (e) => {
    e.preventDefault();
    setCurrentUser((user) => {
      return { ...user, payment_amount: amountToPay };
    });
    navigate("/payment");
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#f3f6fa",
          width: "50%",
          margin: "2rem 25%",
          border: "1px solid #5ca0c3",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1>
          Total a pagar : <span>{amountToPay}</span>
        </h1>
        <button onClick={handlePagar}> PAGAR</button>
      </div>
    </>
  );
};

export default InvoicesPayMethod;
