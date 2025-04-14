import BookItem from '../components/BookItem'
import Heading from '../components/layouts/HeadingComponent'
import { useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserProvider';
 import { BooksContext } from '../contexts/BooksProvider'; 


function BooksPage() {


  const { user } = useContext(UserContext);
  const { books, getBooks } = useContext(BooksContext); 



useEffect(() => {
  getBooks({id_user: user?.id_user })
}, [user, getBooks]);


  return (
    <div className='w-full flex flex-col items-center border-y-2'>
      <Heading level='h1' title='TUS LIBROS'/>
      <ul className='flex flex-col gap-6 justify-center items-center
                      sm:grid sm:grid-cols-1 sm:gap-8
                      md:grid-cols-2 md:gap-12
                      lg:gap-18 lg:grid-cols-3 '>
        {books.map(libro =>
          <li key={libro.id_book}>
            <BookItem book={libro} />
          </li>
        )}
      </ul>
    </div>
  );
}
export default BooksPage

