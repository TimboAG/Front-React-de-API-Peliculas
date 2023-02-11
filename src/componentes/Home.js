import React, { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";

const Home = () => {
  const { isAuth, user } = useContext(AuthContext);
  return (
    <div>
      <h1>Bienvenido {isAuth ? user.username : "Invitado"}</h1>
      <h3>{isAuth ? "Aunteticado" : "No autenticado"}</h3>
    </div>
  );
};

export default Home;
