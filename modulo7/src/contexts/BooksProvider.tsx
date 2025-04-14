
import { createContext, useState } from "react";
import { Book } from '../configs/type'

type BookContextType = {
  books: Book[];
  getBooks: ({ id_user, id_book }: { id_user?: number | null; id_book?: number | null; }) => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addBook: (id_user: number, book: Book) => Promise<any>;
};

const BooksContext = createContext<BookContextType>({
  books: [],
  getBooks: async () => {},
  addBook: async () => {},
});


type BooksProviderProps = {
  children: React.ReactNode;
};

const {
  VITE_API_ORIGIN
} = import.meta.env


function BooksProvider(props: BooksProviderProps) {

  const { children } = props;

  const [books, setBooks] = useState([]);

  async function getBooks({ id_user, id_book }: { id_user?: number | null; id_book?: number | null; } = {}) {

    const url = new URL(`${VITE_API_ORIGIN}/books`);
    try {
      if (id_user) {
        url.searchParams.append('id_user', String(id_user));
      }
      if (id_book) {
        url.searchParams.append('id_book', String(id_book));
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
      setBooks(data.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }

    async function addBook(id_user:number, book: Book) {
      const bookConUsuario = {
        ...book,
        id_user, 
      };
      const url = new URL(`${VITE_API_ORIGIN}/books`);
      
      return await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({book: bookConUsuario}),
      });
    }



  return (
    <BooksContext.Provider value={{ books, getBooks, addBook }}>
      {children}
    </BooksContext.Provider>
  )
}

export default  BooksProvider  
export {  BooksContext }