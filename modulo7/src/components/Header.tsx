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
                          ">
        <div className="flex justify-between bg-teal-300/90 backdrop-blur-lg">
          <Logo />
          <button onClick={() => setisOpenSidebar(!isOpenSidebar)} className="md:hidden "><GiHamburgerMenu size={52}/>
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <Menu /* isOpenSidebar={isOpenSidebar} */ />
          <div className="hidden md:flex ">
        </div>
        </div>
        <div className="md:hidden ">
          {isOpenSidebar && <SideBar /* isOpenSidebar={isOpenSidebar}  *//>}
        </div>
      </header>
    </>
  );
}

export default Header;

