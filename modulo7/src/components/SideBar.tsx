// TODO LO COMENTADO ES LA SOLUCION DEL PROFESOR AL EJERCIO DEL TEMA 3

import Menu from "./Menu";

/* type MenuProps = {
  isOpenSidebar: boolean;
} 
 */
function SideBar(/* props: MenuProps */) {

/*   const { isOpenSidebar } = props; */

  return <>
  <div className="fixed top-24 right-0 w-full z-50 ">
<Menu /* isOpenSidebar={isOpenSidebar} */ />
</div>
</>
}


export default SideBar;