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
    <div>
      <h1>Borrar libro</h1>
      <p>Vas a borrar el libro, ¿Estas seguro?</p>
      <button onClick={handleDeleteBook} >Delete</button>
      <button onClick={handleCancel} >Cancelar</button>
    </div>
  );
}

export default DeleteBookPage;