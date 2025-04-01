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

function LoginPage() {
  const [datosLogin, setDatosLogin] = useState<inputLibroProps[]>([
    {
      name: "email",
      type: 'email',
      placeholder: 'Email',
      value: ''
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Contraseña',
      value: '',
    },
  ])

  function recuperarDatos(name: string, value: string | number | boolean) {
    const objeto = datosLogin.find((objeto) => objeto.name === name)

    if (!objeto) return

    objeto.value = value

    setDatosLogin(datosLogin)
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
            recuperarDatos={recuperarDatos}
          />
        ))}
      </FormComponent>
    </div>
  </>
};

export default LoginPage;