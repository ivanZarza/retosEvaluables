import BookItem from '../components/BookItem'
import Heading from '../components/layouts/HeadingComponent'
import { Book } from '../configs/type' 
import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../contexts/UserProvider';


function BooksPage() {

  const [books, setBooks] = useState<Book[]>([])
  const { user } = useContext(UserContext);
  const urlBase = 'https://api-books-xi.vercel.app';




async function getBooks({ id_user = null, id_book = null } : {id_user?: string| null, id_book?: string| null }= {}) {
  const url = new URL(`${urlBase}/books`);
  try {
    if(id_user) {
    url.searchParams.append('id_user', id_user);
  }
  if(id_book) {
    url.searchParams.append('id_book', id_book);
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }
  const data = await response.json();
  console.log(response.status);
  setBooks(data.data) 
}
catch (error) {
  console.error('Error:',error);
}
}

useEffect(() => {
  getBooks({id_user: user?.id_user ? String(user.id_user) : null})
}, [user?.id_user])


  return (
    <div className='w-full flex flex-col items-center border-2'>
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

