// TODO LO COMENTADO ES LA SOLUCION DEL PROFESOR AL EJERCIO DEL TEMA 3
import Logo from "./Logo";
import Menu from "./Menu";
import SideBar from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


function Header() {

  const [isOpenSidebar, setisOpenSidebar] = useState(false);



  return (
    <>
      <header className="w-full  sticky top-0 bg-transparent
                          md:flex md:items-center md:justify-between md:bg-teal-300
                          z-10
                          ">
        <div className="flex justify-between items-center bg-teal-300/100 backdrop-blur-lg">
          <Logo />
          <button onClick={() => setisOpenSidebar(!isOpenSidebar)} className="md:hidden h-20  rounded-b-full rounded-t-full  hover:bg-gray-100  transition duration-300 desplegable"><GiHamburgerMenu size={40}/>
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <Menu closeMenu={() => setisOpenSidebar(false)}   />
          <div className="hidden md:flex ">
        </div>
        </div>
        <div className="md:hidden ">
          {isOpenSidebar && <SideBar closeMenu={() => setisOpenSidebar(false)} />}
        </div>
      </header>
    </>
  );
}

export default Header;

