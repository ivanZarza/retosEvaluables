import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

import { useNavigate } from "react-router-dom";

function Logout() {
  const { logOut } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    logOut();
    navigate("/login");
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">¡Hasta luego!</h1>
      <button
        onClick={handleLogout}
        className="bg-[#3640fd] text-white px-4 py-2 rounded mt-4"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Logout;