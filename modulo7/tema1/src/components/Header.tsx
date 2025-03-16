import Logo from "./Logo";
import Menu from "./Menu";


function Header() {

  return (
    <>
      <header className="w-full flex justify-between bg-teal-300  items-center">
        <Logo />
        <Menu />
      </header>
    </>
  );
}

export default Header;