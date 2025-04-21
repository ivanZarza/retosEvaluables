import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BooksContext } from "../contexts/BooksProvider";
import { UserContext } from "../contexts/UserProvider";

function DeleteBookPage() {

  const params = useParams();
  console.log(params);
  const { id_book } = params;
  const { deleteBook } = useContext(BooksContext);
  const { user } = useContext(UserContext);
  console.log(user?.id_user);

  const navigate = useNavigate();
  const handleDeleteBook = async () => {
    try {
      if (!user) {
        toast.error('Usuario no autenticado');
        return;
      }
      const response = await deleteBook(Number(id_book), user.id_user);
      if (response.ok) {
        toast.success('Libro borrado correctamente');
        navigate('/bookPage');
      } else {
        toast.error('Error al borrar el libro');
      }
    } catch (error) {
      console.error('Error al borrar el libro:', error);
      toast.error('Error al borrar el libro');
    }
  };

  const handleCancel = () => {
    navigate('/bookPage');
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold
                      md:text-6xl
                      lg:text-7xl
                      text-gray-700" >Borrar libro</h1>
      <p className="text-2xl 
                      lg:text-5xl
                      text-gray-700">¿Estas seguro?</p>
      <button onClick={handleDeleteBook} className="bg-[#3640fd] text-white  px-4 py-2 rounded mt-4">BORRAR</button>
      <button onClick={handleCancel} className="bg-[#3640fd] text-white px-4 py-2 rounded mt-4">VOLVER ATRAS</button>
    </div>
  );
}

export default DeleteBookPage;