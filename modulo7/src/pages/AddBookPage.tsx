import Heading from "../components/layouts/HeadingComponent";
import InputComponentZod from "../components/layouts/InputComponentZod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import bookSchema from '../configs/SchemasZod';
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import { BooksContext } from "../contexts/BooksProvider";
import { toast } from "react-toastify";
import { Book } from "../configs/type";


type FormValues = {
  title: string;
  author: string;
  type: 'Tapa dura' | 'Tapa blanda';
  price: number;
  photo: string;
};

type inputLibroProps = {
  name: 'title' | 'author' | 'type' | 'price' | 'photo';
  type: string;
  placeholder: string;
};

/* async function newBook(book: FormValues, id_user: number) {
  const bookConUsuario = {
    id_user: id_user, 
    ...book,
  };
  console.log('bookConUsuario', bookConUsuario);
  const url= await fetch('https://api-books-xi.vercel.app/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({book: bookConUsuario})
  });
  if (!url.ok) {
    throw new Error('Error en la solicitud');
  }
  const response = await url
  const data = await response.json();
  console.log('respuesta', data);
} */

function AddBook() {
  const { user } = useContext(UserContext);
  const { addBook } = useContext(BooksContext);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    mode: "onChange",
    resolver:zodResolver(bookSchema)
  })


  async function onSubmit(data: FormValues) {
    console.log('datos', data);
    const book: Book = {
      id_user: user?.id_user as number,
      ...data,
    };
    console.log('book', book);
    try {
      const addBookResult =  await addBook(user?.id_user as number, book);
      console.log('addBookResult', addBookResult);
      if(addBookResult.ok===true){
      reset();
      toast.success('Libro añadido correctamente');
    } else {
      toast.error('No se pudo añadir el libro')
    }
    } catch (error) {
      console.error('Error al enviar el libro:', error);
      toast.error('Error al enviar el libro');
    }
  }


  const datosUsuario: inputLibroProps[] = [
    {
      name: "title",
      type: "text",
      placeholder: "Titulo",
    },
    {
      name: "author",
      type: "text",
      placeholder: "Autor",
    },
    {
      name: "price",
      type: "number",
      placeholder: "Precio",
    },
    {
      name: "photo",
      type: "text",
      placeholder: "URL de la foto",
    },
  ];

  return <>

    <div className="w-full  flex flex-col  items-center  border-2 ">
      <Heading level="h1" title="AÑADE UN LIBRO" />
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-teal-300 inset-shadow-xs shadow-outline p-20 shadow-lg flex flex-col gap-3 bg-gray-100 min-w-2xl"
      >
        {datosUsuario.map((input) =>
          <InputComponentZod
            key={input.name}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            register={register}
            errors={errors}
          />)}
          <div className="w-full flex border-2 pl-1.5  flex-col justify-between focus:outline-none bg-gray-200 border-teal-500 ">
            <label className="text-gray-700 text-2xl">
              Tipo de tapa
            <select
              {...register("type" )}
              className="w-full flex  pl-1.5 text-2xl flex-col justify-between focus:outline-none bg-gray-200 border-teal-500 placeholder:text-2xl `"
            >
              <option value="">Selecciona una opción</option>
              <option value={'Tapa dura'} >Tapa dura</option>
              <option value={'Tapa blanda'}>Tapa blanda</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">"Campo obligatorio"</p>
            )}
            </label>
          </div>
          <button type="submit" className="w-auto">
            Enviar
          </button>
      </form>
    </div>
  </>
};

export default AddBook;