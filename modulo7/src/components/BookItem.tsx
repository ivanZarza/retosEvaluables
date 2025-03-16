import { Book } from '../config/type'
import { TbTrashFilled } from "react-icons/tb";
import { RiEditLine } from "react-icons/ri";

type BookItemsProps={
  book: Book 
}

function BookItem(props: BookItemsProps) {

  const { book } = props;

  function handleEditBook() {
    console.log('Libro editado');
  }

  function handleDeleteBook() {
    console.log('Libro borrado');
  }

  return (
    <>
      <section className="w-full flex flex-col gap-4 items-center border-1 bg-indigo-100">
        <img src={book.photo} alt="Portada del libro El Hobbit" className="size w-65" />

          <div className="w-full flex items-start justify-start">
        <h1 className="text-3xl px-3">{book.title}</h1>
        </div>
        <div className="w-full flex justify-between items-center p-2">
          <h4 className='text-[1.3rem]'>{book.author}</h4>
          <p className='bg-blue-300 px-3 py-1 rounded-full'>{book.type}</p>
        </div>
          <div className="w-full flex justify-between items-center p-2 text-[1rem]">
          <p>{book.price}€</p>
            <div className="flex justify-between items-center gap-1" >
            <button onClick={handleEditBook} className='bg-indigo-700 text-emerald-800' ><RiEditLine size={11}/></button>
            <button onClick={handleDeleteBook} className='bg-indigo-100 text-red-500'><TbTrashFilled size={11}/></button>
            </div>
          </div>
      </section>
    </>
  );
}

export default BookItem;