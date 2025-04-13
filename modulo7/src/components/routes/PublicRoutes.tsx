import { Outlet, Navigate } from "react-router-dom"

import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";

function PublicRoutes() {
  const { user } = useContext(UserContext)


if(!user) return <Outlet/>

return <Navigate to="/profile" />

}

export default PublicRoutes