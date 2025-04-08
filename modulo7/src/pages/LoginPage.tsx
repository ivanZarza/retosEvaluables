import Heading from "../components/layouts/HeadingComponent";
import FormComponent from "../components/layouts/FormComponent";
import InputComponent from "../components/layouts/InputComponent";
import { useState } from "react";

type inputLibroProps = {
  name: string,
  type: string,
  placeholder: string,
  value: string | number | boolean,
  pattern: string,
}

function LoginPage() {

  const [datosLogin, setDatosLogin] = useState<inputLibroProps[]>([
    {
      name: "email",
      type: 'email',
      placeholder: 'Email',
      value: '',
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Contraseña',
      value: '',
      pattern: '^.{4,8}$',
    },
  ])

  const [error, setError] = useState<{ [name: string]: boolean }>({
    email: false,
    password: false,
  });

  function recuperarDatos(name: string, value: string | number | boolean) {
    const objeto = datosLogin.find((objeto) => objeto.name === name)
    if (!objeto) return

    objeto.value = value
    setDatosLogin(datosLogin)
  }

  function validarDatos(name: string, value: string | number | boolean) {
    const objeto = datosLogin.find((objeto) => objeto.name === name)

    if (!objeto) return

    const regex = new RegExp(objeto.pattern);

    setError({ [name]: !regex.test(String(value)) });
  }

  function generarMensajeError(name: string, value: string | number | boolean | undefined): string {
    if (!error) return ''

    switch (name) {

      case 'email': {
        if (!value) return 'El correo electrónico es obligatorio';
        return 'El email no es valido';
      }

      case 'password': {
        if (!value) return 'La contraseña es obligatoria';
        return 'La contraseña debe tener entre 4 y 8 caracteres';
      }

      default:
        if (!value) return `El campo ${name} es obligatorio`;
    }

    return '';
  }

    return <>
      <div className="w-full  flex flex-col  items-center  border-2 ">
        <Heading level="h1" title="INTRODUCE TUS DATOS" />
        <FormComponent >
          {datosLogin.map(input => (
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
          ))}
        </FormComponent>
      </div>
    </>
  };

  export default LoginPage;