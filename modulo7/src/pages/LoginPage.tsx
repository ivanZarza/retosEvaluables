import Heading from "../components/layouts/HeadingComponent";
import FormComponent from "../components/layouts/FormComponent";
import InputComponent from "../components/layouts/InputComponent";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserProvider";



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

  const { user, logIn } = useContext(UserContext);

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const datosUsuario = {
      email: datosLogin[0].value,
      password: datosLogin[1].value,
    };
    console.log(datosUsuario)

    const response = await axios.post("https://api-books-xi.vercel.app/login", datosUsuario,)
    logIn(response.data.data[0])
    console.log(response.data.data[0]);
    console.log(response.status);
    console.log(user);
  }

  return <>
    <div className="w-full  flex flex-col  items-center  border-2 ">
      <Heading level="h1" title="INTRODUCE TUS DATOS" />
      <FormComponent onSubmit={handleSubmit} >
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