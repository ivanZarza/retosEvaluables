

import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const user = "ok"

  if(user ) return <Outlet/>

return <Navigate to="/login" />
}


export default PrivateRoutes;