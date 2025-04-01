import { Outlet, Navigate } from "react-router-dom"

function PublicRoutes() {

  const user = ""


if(!user) return <Outlet/>

return <Navigate to="/profile" />

}

export default PublicRoutes