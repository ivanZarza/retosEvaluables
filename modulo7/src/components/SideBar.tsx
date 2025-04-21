// TODO LO COMENTADO ES LA SOLUCION DEL PROFESOR AL EJERCIO DEL TEMA 3

import Menu from "./Menu";


type MenuProps = {
  closeMenu: () => void;
} 

function SideBar(props: MenuProps) {
  const { closeMenu } = props;

  return <>
  <div className="fixed top-24 right-0 w-full z-50 ">
<Menu closeMenu={closeMenu} />
</div>
</>
}


export default SideBar;