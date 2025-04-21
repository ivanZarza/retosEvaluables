import BookItem from '../components/BookItem'
import Heading from '../components/layouts/HeadingComponent'
import { useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserProvider';
import { BooksContext } from '../contexts/BooksProvider';
import { FavoriteContext } from '../contexts/FavoriteProvider';
import { Link, useLocation } from 'react-router-dom';


function BooksPage() {

  const { user } = useContext(UserContext);
  const { books, getBooks } = useContext(BooksContext);
  const { changeFavorite } = useContext(FavoriteContext);

  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  const favorite = searchParams.get('favorite');

  const filteredBooks = !favorite ? books : books.filter((book) => book.favorite === 1);

  const buttonFavorite = favorite === '1' ? "/bookPage" : "/bookPage?favorite=1";

  const buttonText = favorite === '1' ? "Ver todos" : "Ver favoritos";

  function handleFavorite(id_book: number | undefined) {
    console.log(id_book);
    console.log(user?.id_user);
    changeFavorite(user?.id_user as number, id_book as number)
  }

  useEffect(() => {
    getBooks({ id_user: user?.id_user })
  }, [user, getBooks, books]);


  return (
    <div className='w-full flex flex-col items-center border-y-2'>
      <Heading level='h1' title='TUS LIBROS' />
      <Link to={buttonFavorite} >
        <button>{buttonText}</button>
      </Link>
      <ul className='flex flex-col gap-6 justify-center items-center
                      sm:grid sm:grid-cols-1 sm:gap-8
                      md:grid-cols-2 md:gap-12
                      lg:gap-18 lg:grid-cols-3 '>
        {filteredBooks.map(libro =>
          <li key={libro.id_book}>
            <BookItem book={libro}
              handleFavorite={handleFavorite}
            />
          </li>
        )}
      </ul>
    </div>
  );
}
export default BooksPage

