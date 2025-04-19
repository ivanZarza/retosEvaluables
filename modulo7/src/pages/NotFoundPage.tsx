
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function NotFoundPage() {

  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

useEffect(() => {

const idTimeout = setTimeout(() => {
  navigate("/");
}
, 5000);
 
// Para que el temporizador se actualice cada segundo
// y se actualice el estado del temporizador
//usar prvevTimer mejor que el estado directamente
// porque el estado no se actualiza inmediatamente
// meter en una constante el valor del temporizador 
// para despues pasarlo a clearInterval
const idInterval = setInterval(() => {
    setTimer((prevTimer) => prevTimer - 1);
  },1000);

  return () => {
    clearTimeout(idTimeout);// Para limpiar el timeout
    clearInterval(idInterval); // Para limpiar el intervalo
  }
},[navigate]);


  return (
    <div className=" w-full flex flex-col items-center justify-center h-200">
      <h1 className="text-8xl">404</h1>
      <p className="text-7xl" >Pagina no encontrada</p>
      <p className="text-5xl">Pincha <Link to={"/"}>Principal</Link> para ir a la pagina principal </p>
      <p className="text-5xl">Redireccionando a la pagina principal en {timer}...</p>
      
    </div>
  );
}

export default NotFoundPage;