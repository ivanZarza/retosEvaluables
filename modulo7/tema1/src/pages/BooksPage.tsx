import BookItem from '../components/BookItem'
import { Book } from '../config/type' 

function BooksPage() {

  const book: Book = {
    id_book:  1,
    id_user: 1,
    title:  'El Hobbitoooo',
    author: 'J.R.R. Tolkien',
    photo: 'https://m.media-amazon.com/images/I/914VEoNzIPL._SL1500_.jpg',
    price: 19.90,
    type: 'Tapa blanda' 
  } 
  const book2: Book = {
    id_book:  1,
    id_user: 1,
    title:  'El Hobbit',
    author: 'J.R.R. Tolkien',
    photo: 'https://m.media-amazon.com/images/I/914VEoNzIPL._SL1500_.jpg',
    price: 19.90,
    type: 'Tapa blanda' 
  } 
  const book3: Book = {
    id_book:  1,
    id_user: 1,
    title:  'El Hobbitooon',
    author: 'J.R.R. Tolkien',
    photo: 'https://m.media-amazon.com/images/I/914VEoNzIPL._SL1500_.jpg',
    price: 19.90,
    type: 'Tapa blanda' 
  } 

  const listBooks = [book,book2,book3]
  const painList = listBooks.map(libro => <li><BookItem book={libro}/></li>)
  return (
    <div className='w-full flex flex-col items-center justify-center h-screen border-2 '>
      <div className="min-h-40 max-h-60">
      <h1 className='text-7xl'>Books</h1>
      </div>
      <ul className='flex gap-24 '>
      {painList}
      </ul>
    </div>
  );
}
export default BooksPage

