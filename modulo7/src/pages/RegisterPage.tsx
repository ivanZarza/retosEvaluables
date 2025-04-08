import Heading from "../components/layouts/HeadingComponent";
import FormComponent from "../components/layouts/FormComponent";
import InputComponent from "../components/layouts/InputComponent";
import { useState } from "react";

type inputLibroProps = {
  name: string,
  type: string,
  placeholder: string,
  value: string | number | boolean,
  pattern: string
}

function RegisterPage() {

  const [datosRegistro, setDatosRegistro] = useState<inputLibroProps[]>([
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nombre',
      value: '',
      pattern: '^.{4,8}$',
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Apellidos',
      value: '',
      pattern: '^.{4,8}$',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Correo electronico',
      value: '',
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    },
    {
      name: 'photo',
      type: 'text',
      placeholder: 'URL de la foto',
      value: '',
      pattern: '^.{4,8}$',
    },
    {
      name: 'password1',
      type: 'password',
      placeholder: 'Contraseña',
      value: '',
      pattern: '^.{4,8}$',
    },
    {
      name: 'password2',
      type: 'password',
      placeholder: 'Repite la contraseña',
      value: '',
      pattern: '^.{4,8}$',
    },
  ])

  const [error, setError] = useState<{ [name: string]: boolean }>({
    name: false,
    lastName: false,
    email: false,
    photo: false,
    password: false,
    password2: false,
  })

  function recuperarDatos(name: string, value: string | number | boolean) {
    const objeto = datosRegistro.find((objeto) => objeto.name === name)

    if (!objeto) return

    objeto.value = value
    setDatosRegistro(datosRegistro)
  }

  function validarDatos(name: string, value: string | number | boolean) {
    const objeto = datosRegistro.find((objeto) => objeto.name === name)
    if (!objeto) return
    const regex = new RegExp(objeto.pattern);
    setError({ [name]: !regex.test(String(value)) });
  }

  function generarMensajeError(name: string, value: string | number | boolean | undefined): string {
    if (!error) return ''

    switch (name) {

      case 'name': {
        if (!value) return 'El nombre es obligatorio';
        return 'El nombre debe tener entre 4 y 8 caracteres';
      }

      case 'lastName': {
        if (!value) return 'El apellido es obligatorio';
        return 'El apellido debe tener entre 4 y 8 caracteres';
      }

      case 'photo': {
        if (!value) return 'La URL de la foto es obligatoria';
        return 'La URL de la foto debe tener mas de 4 caracteres';
      }

      case 'email': {
        if (!value) return 'El correo electrónico es obligatorio';
        return 'El correo electrónico no es válido';
      }

      case 'password1': {
        if (!value) return 'La contraseña es obligatoria';
        return 'La contraseña debe tener entre 4 y 8 caracteres';
      }

      case 'password2': {
        const password1 = datosRegistro.find((obj) => obj.name === 'password1')?.value;
        if (value !== password1) return 'Las contraseñas no coinciden';
        break;
      }

      default:
        if (!value) return `El campo ${name} es obligatorio`;
    }

    return '';
  }


  return <>
    <div className="w-full  flex flex-col  items-center  border-2" >
      <Heading level="h1" title="RELLENA TUS DATOS" />
      <FormComponent>
        {
          datosRegistro.map((input) => (
            <InputComponent
              key={input.name}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              pattern={input.pattern}
              error={error}
              validarDatos={validarDatos}
              recuperarDatos={recuperarDatos}
              generarMensajeError={generarMensajeError}
            />
          ))
        }

      </FormComponent>
    </div>
  </>
};

export default RegisterPage;
