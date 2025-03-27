// TODO LO COMENTADO ES LA SOLUCION DEL PROFESOR AL EJERCIO DEL TEMA 3

import {  NavLink } from "react-router-dom";




/* type MenuProps = {
  isOpenSidebar: boolean;
}  */

function Menu(/* props:MenuProps */) {

  /* const { isOpenSidebar } = props; */

  /* const commoclases = 'clases de tailwind comunes';
  const sideBarClasses = 'clases de tailwind para menu en sidebar';
  const headerClasses = 'clases de tailwind para menu en header';
  const clases = `${commoclases} ${isOpenSidebar ? sideBarClasses: headerClasses}` //TERNARIO PARA DECIDIR QUE CLASES SE PASAN */

const user = "ok"

  return (
    <>
      <nav className="flex flex-col  justify-around items-center  text-4xl gap-2  w-full  p-4 h-200 bg-gradient-to-b bg-teal-300/90 to-white/90 backdrop-blur-lg
                      sm:text-2xl sm:gap-4 sm:justify-end sm:flex-row sm:m-2 sm:w-full sm:bg-none sm:h-fit
                      md:text-3xl md:gap-6
                      lg:text-4xl lg:gap-8" /* {clases} */>
        <NavLink to="/" >Home</NavLink>
        {!user  && <NavLink to="/login" >Login</NavLink>}
        {!user && <NavLink to="/register" >Register</NavLink>}
        { user &&<NavLink to="/profile" >Profile</NavLink>}
        { user &&<NavLink to="/BookPage" >Libros</NavLink>}
        { user &&<NavLink to="/addbook" >Add Book</NavLink>}
        { user &&<NavLink to="/editbook" >Edit Book</NavLink>}
      </nav>
    </>
  );
}

export default Menu;