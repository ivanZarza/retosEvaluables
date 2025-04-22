// TODO LO COMENTADO ES LA SOLUCION DEL PROFESOR AL EJERCIO DEL TEMA 3

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import GreekComponent from "./GreekComponent";



type MenuProps = {
  closeMenu: () => void;
} 

function Menu(props:MenuProps) {

  const { closeMenu } = props;

  /* const commoclases = 'clases de tailwind comunes';
  const sideBarClasses = 'clases de tailwind para menu en sidebar';
  const headerClasses = 'clases de tailwind para menu en header';
  const clases = `${commoclases} ${isOpenSidebar ? sideBarClasses: headerClasses}` //TERNARIO PARA DECIDIR QUE CLASES SE PASAN */

  const { user } = useContext(UserContext);

  const ifUser = user

  return (
    <>
      <nav className="flex flex-col  justify-around items-center  text-2xl gap-2  w-full h-150 p-4  bg-gradient-to-b bg-teal-300/100 to-white/100 backdrop-blur-lg
                      md:text-2xl md:gap-5 md:justify-end md:flex-row md:m-2 md:w-full md:bg-none md:h-fit 
                      lg:text-4xl lg:gap-5" onClick={closeMenu}  /* {clases} */>
        <NavLink to="/" >Home</NavLink>
        {!ifUser && <NavLink to="/login" onClick={closeMenu} >Login</NavLink>}
        {!ifUser && <NavLink to="/register" onClick={closeMenu} >Register</NavLink>} 
        {ifUser && <NavLink to="/profile" onClick={closeMenu} >Profile</NavLink>}
        {ifUser && <NavLink to="/bookpage" onClick={closeMenu} >Libros</NavLink>}
        {ifUser && <NavLink to="/addbook" onClick={closeMenu} >Add Book</NavLink>}
        {ifUser && <NavLink to="/logout" onClick={closeMenu} >Logout</NavLink>}
        <Link to="/profile" onClick={closeMenu} >
        {user && <GreekComponent />}
        </Link>
      </nav>

    </>
  );
}

export default Menu;