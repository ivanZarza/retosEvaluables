import Heading from "../components/layouts/HeadingComponent";
import FormComponent from "../components/layouts/FormComponent";
import InputComponent from "../components/layouts/InputComponent";
import { useState } from "react";

type inputLibroProps = {
  name: string,
  type: string,
  placeholder: string,
  value: string | number | boolean
}

function EditBook() {

  const [datos, setDatos] = useState<inputLibroProps[]>([
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


  function recuperarDatos(   name: string, value: string | number | boolean ) {
    console.log('recuperarDatos', { name, value })

    const campo = datos.find((campo) => campo.name === name)

    if (!campo) return
      
    campo.value = value
    
    setDatos(datos)
  }

  return <>
    <div className="w-full  flex flex-col  items-center  border-2 ">
      <Heading level="h1" title="EDITA UN LIBRO" />
      <FormComponent >
      {datos.map(input => (
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

export default EditBook;