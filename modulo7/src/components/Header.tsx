import Logo from "./Logo";
import Menu from "./Menu";
import SideBar from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";

function Header() {

  const [isOpenSidebar, setisOpenSidebar] = useState(false);



  return (
    <>
      <header className="w-full  sticky top-0 
                          sm:flex sm:items-center sm:justify-between sm:bg-teal-300
                          ">
        <div className="flex justify-between bg-teal-300">
          <Logo />
          <button onClick={() => setisOpenSidebar(!isOpenSidebar)} className="sm:hidden "><GiHamburgerMenu size={52}/>
          </button>
        </div>
        <div className="hidden sm:flex ">
          <Menu />
        </div>
        <div className="sm:hidden flex items-start ">
          {isOpenSidebar && <SideBar />}
        </div>
      </header>
    </>
  );
}

export default Header;

