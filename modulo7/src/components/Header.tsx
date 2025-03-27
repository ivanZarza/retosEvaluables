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
                          sm:flex sm:items-center sm:justify-between sm:bg-teal-300
                          ">
        <div className="flex justify-between bg-teal-300/90 backdrop-blur-lg">
          <Logo />
          <button onClick={() => setisOpenSidebar(!isOpenSidebar)} className="sm:hidden "><GiHamburgerMenu size={52}/>
          </button>
        </div>
        <div className="hidden sm:flex ">
          <Menu /* isOpenSidebar={isOpenSidebar} */ />
        </div>
        <div className="sm:hidden flex items-start ">
          {isOpenSidebar && <SideBar /* isOpenSidebar={isOpenSidebar}  *//>}
        </div>
      </header>
    </>
  );
}

export default Header;

