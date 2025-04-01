import Heading from "../components/layouts/HeadingComponent";
import FormComponent from "../components/layouts/FormComponent";
import InputComponent from "../components/layouts/InputComponent";
import { useState } from "react"

type inputLibroProps = {
  name: string,
  type: string,
  placeholder: string,
  value: string | number | boolean
}

function AddBook() {

  const [nuevoLibro, setNuevoLibro] = useState<inputLibroProps[]>([
    {
      name: 'title',
      type: 'text',
      placeholder: 'Titulo',
      value: '',
    },
    {
      name: 'author',
      type: 'text',
      placeholder: 'Autor',
      value: '',
    },
    {
      name: 'type',
      type: 'text',
      placeholder: 'Tipo',
      value: '',
    },
    {
      name: 'price',
      type: 'number',
      placeholder: 'Precio',
      value: '',
    },
    {
      name: 'photo',
      type: 'text',
      placeholder: 'URL de la foto',
      value: '',
    },
  ])

  function recuperarDatos(name: string, value: string | number | boolean) {

    const objeto = nuevoLibro.find((objeto) => objeto.name === name)

    if (!objeto) return

    objeto.value = value

    setNuevoLibro(nuevoLibro)
  }


  return <>

<div className="w-full  flex flex-col  items-center  border-2 ">
    <Heading level="h1" title="AÑADE UN LIBRO" />
    <FormComponent>
      {nuevoLibro.map(input => (
        <InputComponent
          key={input.name}
          placeholder={input.placeholder}
          type={input.type}
          name={input.name}
          recuperarDatos={recuperarDatos}
        />
      ))}
    </FormComponent>
    </div>
  </>
};

export default AddBook;