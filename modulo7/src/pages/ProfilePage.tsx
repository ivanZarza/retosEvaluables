import Heading from "../components/layouts/HeadingComponent";
import InputComponentReactForm from "../components/layouts/InputComponentReactForm";
import { useForm } from "react-hook-form";


type FormValues = {
  name: string;
  lastName: string;
  email: string;
  photo: string;
  password1: string;
  password2: string;
};

type inputLibroProps = {
  name: 'name' | 'lastName' | 'email' | 'photo' | 'password1' | 'password2'
  type: string
  placeholder: string
  validators?: {
    maxLength?: { value: number; message: string };
    minLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    required?: { value: boolean; message: string };
    validate?: (value: string) => boolean | string;
  }; 
};

function ProfilePage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });
  

  const onSubmit = (data: FormValues) => {
    console.log("Datos enviados:", data);
  };

  const datosUsuario: inputLibroProps[] = [
    {
      name: "name",
      type: "text",
      placeholder: "Nombre",
      validators: {
        maxLength: { value: 20, message: "El nombre no puede tener más de 20 caracteres" },
        minLength: { value: 3, message: "El nombre no puede tener menos de 3 caracteres" },
        pattern: { value: /^[a-zA-Z\s]+$/, message: "El nombre solo puede contener letras y espacios" },
        required: { value: true, message: "El nombre es obligatorio" },
      }, 
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Apellidos",
      validators: {
        maxLength: { value: 20, message: "Los apellidos no pueden tener más de 20 caracteres" },
        minLength: { value: 3, message: "Los apellidos no pueden tener menos de 3 caracteres" },
        pattern: { value: /^[a-zA-Z\s]+$/, message: "Los apellidos solo pueden contener letras y espacios" },
        required: { value: true, message: "Los apellidos son obligatorios" },
      }, 
    },
    {
      name: "email",
      type: "email",
      placeholder: "Correo electrónico",
      validators: {
        maxLength: { value: 50, message: "El correo no puede tener más de 50 caracteres" },
        minLength: { value: 5, message: "El correo no puede tener menos de 5 caracteres" },
        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "El correo no es válido" },
        required: { value: true, message: "El correo es obligatorio" },
      }, 
    },
    {
      name: "photo",
      type: "text",
      placeholder: "URL de la foto",
      validators: {
        maxLength: { value: 100, message: "La URL no puede tener más de 100 caracteres" },
        minLength: { value: 5, message: "La URL no puede tener menos de 5 caracteres" },
        required: { value: true, message: "La URL es obligatoria" },
      }, 
    },
    {
      name: "password1",
      type: "password",
      placeholder: "Contraseña",
      validators: {
        maxLength: { value: 20, message: "El password no puede tener más de 20 caracteres" },
        minLength: { value: 4, message: "El password no puede tener menos de 4 caracteres" },
        pattern: { value: /(?=.*[0-9])(?=.*[a-zA-Z])/, message: "El password debe contener al menos un número y una letra" },
        required: { value: true, message: "El password es obligatorio" },
      }, 
    },
    {
      name: "password2",
      type: "password",
      placeholder: "Repite la contraseña",
      validators: {
        maxLength: { value: 20, message: "El password no puede tener más de 20 caracteres" },
        minLength: { value: 4, message: "El password no puede tener menos de 4 caracteres" },
        pattern: { value: /(?=.*[0-9])(?=.*[a-zA-Z])/, message: "El password debe contener al menos un número y una letra" },
        required: { value: true, message: "El password es obligatorio" },
        validate: (value: string) =>
          value === watch("password1") || "Las contraseñas no coinciden", 
      }, 
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center border-2 py-6 ">
        <Heading level="h1" title="TU PÁGINA" />
        <form
          className="shadow-teal-300 inset-shadow-xs shadow-outline p-20 shadow-lg flex flex-col gap-3 bg-gray-100 min-w-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          {datosUsuario.map((input) => 
          <InputComponentReactForm
            key={input.name}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            validators={input.validators}
            register={register}
            errors={errors}
          />)}
          <button type="submit" className="w-auto">
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}

export default ProfilePage;

