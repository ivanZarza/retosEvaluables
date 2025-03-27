import { Outlet, Navigate } from "react-router-dom"

function PublicRoutes() {

  const user = "ok"


if(!user) return <Outlet/>

return <Navigate to="/profile" />

}

export default PublicRoutes