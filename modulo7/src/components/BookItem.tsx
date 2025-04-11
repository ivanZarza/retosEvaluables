import { Book } from '../configs/type'
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
      <section className="w-full max-w-65 h-[550px]  flex flex-col justify-between items-center border-1 bg-indigo-100 mb-3 mt-10">
        <img src={book.photo} alt="Portada del libro El Hobbit" className=" h-[300px] w-full object-cover" />

          <div className="w-full flex items-start justify-start">
        <h1 className="text-3xl px-3  text-[1.5rem] 
        font-bold text-gray-700
                        ">{book.title}</h1>
        </div>
        <div className="w-full flex justify-between items-center p-2">
          <h4 className=' text-[1.4rem]

          '>{book.author}</h4>
          <p className="bg-blue-300 flex  px-3 py-1 rounded-full text-[1rem]

          ">{book.type}</p>
        </div>
          <div className="w-full flex justify-between items-center p-2 text-[1.2rem]">
          <p>{book.price}€</p>
            <div className="flex justify-between items-center gap-1" >
            <button onClick={handleEditBook} className='bg-indigo-700 text-emerald-800' ><RiEditLine size={15}/></button>
            <button onClick={handleDeleteBook} className='bg-indigo-100 text-red-500'><TbTrashFilled size={15}/></button>
            </div>
          </div>
      </section>
    </>
  );
}

export default BookItem;