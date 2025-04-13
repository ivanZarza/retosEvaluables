import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";

import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const { user } = useContext(UserContext)

  if( user ) return <Outlet/>

return <Navigate to="/login" />
}


export default PrivateRoutes;