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


function ProfilePage() {
  const [datosUsuario, setDatosUsuario] = useState<inputLibroProps[]>([
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nombre',
      value: '',
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Apellidos',
      value: '',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Correo electronico',
      value: '',
    },
    {
      name: 'photo',
      type: 'text',
      placeholder: 'URL de la foto',
      value: '',
    },
    {
      name: 'paswoord1',
      type: 'password',
      placeholder: 'Contraseña',
      value: '',
    },
    {
      name: 'paswoord2',
      type: 'password',
      placeholder: 'Repite la contraseña',
      value: '',
    },
  ])

  function recuperarDatos(name: string, value: string | number | boolean) {
    const objeto = datosUsuario.find((objeto) => objeto.name === name)

    if (!objeto) return

    objeto.value = value

    setDatosUsuario(datosUsuario)
  }

  return <>
    <div className="w-full  flex flex-col  items-center  border-2 ">
      <Heading level="h1" title="TU PAGINA" />
      <FormComponent>
        {
          datosUsuario.map((input) => (
            <InputComponent
              key={input.name}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              recuperarDatos={recuperarDatos}
            />
          ))
        }
      </FormComponent>
    </div>
  </>
};

export default ProfilePage;