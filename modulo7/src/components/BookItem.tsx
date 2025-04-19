import { Book } from '../configs/type'
import { TbTrashFilled } from "react-icons/tb";
import { RiEditLine } from "react-icons/ri";
import { Link } from 'react-router-dom';



type BookItemsProps={
  book: Book 
}

function BookItem(props: BookItemsProps) {

  const { book } = props;



  function handleDeleteBook() {
    console.log('Libro borrado');
  }

  return (
    <>
      <section className="w-full max-w-65 h-[550px]  flex flex-col justify-between items-center border-1 bg-indigo-100 mb-3 mt-10">
        <img src={book.photo} alt="" className=" h-[300px] w-full object-cover" />

          <div className="w-full flex items-start justify-start">
        <h1 className="text-2xl px-3  
        font-bold text-gray-700
                        ">{book.title}</h1>
        </div>
        <div className="w-full flex flex-col justify-start items-start px-2 gap-y-3">
          <h4 className=' text-xl

          '>{book.author}</h4>
          <p className="bg-blue-300 flex  px-3 py-1 rounded-full  font-semibold text-gray-700

          ">{book.type}</p>
        </div>
          <div className="w-full flex justify-between items-center p-2 text-lg">
          <p>{book.price}€</p>
            <div className="flex justify-between items-center gap-1" >
            <Link to={`/bookPage/books/${book.id_book}`}  state={book}  >
            <button  className='bg-indigo-700 text-emerald-800' ><RiEditLine size={15}/></button>
              </Link>
              <Link to={`/bookPage/books/delete/${book.id_book}`} state={book} >
            <button onClick={handleDeleteBook} className='bg-indigo-100 text-red-500'><TbTrashFilled size={15}/></button>
              </Link>
            </div>
          </div>
      </section>
    </>
  );
}

export default BookItem;