import Heading from "../components/layouts/HeadingComponent";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-500 via-blue-300 to-blue-500 animated-gradient flex flex-col justify-center items-center text-white">
      <Heading level="h1" title="Bienvenido a tu Biblioteca Virtual" />
      <p className="text-md mt-4 text-center sm:text-lg md:text-xl">
        Aquí puedes gestionar tus libros favoritos, explorar nuevas lecturas y organizar tu colección personal.
      </p>
      <ul className="mt-6 space-y-4 text-center sm:space-y-2 md:space-y-4">
        <li className="text-md sm:text-lg md:text-xl">📚 Explora y visualiza todos tus libros.</li>
        <li className="text-md sm:text-lg md:text-xl">❤️ Marca tus libros favoritos.</li>
        <li className="text-md sm:text-lg md:text-xl">✏️ Edita la información de tus libros.</li>
        <li className="text-md sm:text-lg md:text-xl">🗑️ Elimina libros que ya no necesitas.</li>
        <li className="text-md sm:text-lg md:text-xl">➕ Agrega nuevos libros a tu colección.</li>
      </ul>
      <div className="mt-8 flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-2 md:gap-4">
        <Link to="/bookpage">
          <button className="px-6 py-2 bg-blue-700 hover:bg-blue-800 rounded text-white sm:px-4 sm:py-1 md:px-6 md:py-2">
            Ver mis libros
          </button>
        </Link>
        <Link to="/addbook">
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white sm:px-4 sm:py-1 md:px-6 md:py-2">
            Agregar un libro
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
