import Logo from "./Logo";
import Menu from "./Menu";
import { useState } from "react";

function Header() {
  
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => setMostrarMenu(!mostrarMenu);

  return (
    <>
      <header className="w-full bg-teal-300  sticky top-0 
                          sm:flex sm:items-center sm:justify-between
                          ">
        <div className="flex justify-between">
          <Logo />
          <button onClick={toggleMenu} className="sm:hidden"><img src="" alt="" /></button>
        </div>
        <div className={`${mostrarMenu ? 'block' : 'hidden'}
                        sm:block
                      `}>
          <Menu />
        </div>
      </header>
    </>
  );
}

export default Header;