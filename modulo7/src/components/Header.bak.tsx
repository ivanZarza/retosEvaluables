import Logo from "./Logo";
import Menu from "./Menu";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const cambiarMenu = () => setMostrarMenu(!mostrarMenu);

  return (
    <>
      <header className="w-full bg-teal-300  sticky top-0 
                          sm:flex sm:items-center sm:justify-between
                          ">
        <div className="flex justify-between">
          <Logo />
          <button onClick={cambiarMenu} className="sm:hidden"><GiHamburgerMenu size={52}/></button>
        </div>
        <div className={`${mostrarMenu ? 'block' : 'hidden'}
                        sm:block
                      `}>
          <Menu closeMenu={() => setMostrarMenu(false)}  />
        </div>
      </header>
    </>
  );
}

export default Header;