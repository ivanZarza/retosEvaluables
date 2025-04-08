import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'


type FormValues = {
  name: string
  lastName: string
  email: string
  photo: string
  password1: string
  password2: string
}

type InputProps = {
  name: 'name' | 'lastName' | 'email' | 'photo' | 'password1' | 'password2'
  placeholder: string
  type: string
  register?: UseFormRegister<FormValues>
  validators?: {
    maxLength?: { value: number; message: string }
    minLength?: { value: number; message: string }
    pattern?: { value: RegExp; message: string }
    required?: { value: boolean; message: string }
    validate?: (value: string) => boolean | string
  }
  errors: FieldErrors<FormValues>
} & React.InputHTMLAttributes<HTMLInputElement>;



function FormComponentReactForm(props: InputProps) {

  const [activo, setActivo] = useState<boolean>(false);

  const invalido = props.errors[props.name]


  return (
    <div className={`w-full flex border-2 pl-1.5  flex-col justify-between focus:outline-none ${!invalido ? "bg-gray-200 border-teal-500 " : "bg-red-100 border-red-600"}`}>
      <label>{activo == true ? `${props.placeholder}` : ''}</label>
      <input
        className="h-10 placeholder:text-2xl focus:outline-none text-2xl placeholder-gray-600 "
        type={props.type}
        placeholder={props.placeholder}

        onChange={(e) => {
        props.register?.(props.name, props.validators)?.onChange(e);
        }}
        {...props.register?.(props.name, props.validators)}
        onFocus={() => setActivo(true)}
        onBlur={() => {
          console.log("onBlur disparado");
          setActivo(false);
        }}
      />

      {invalido && <p className="text-red-500">{String(props.errors[props.name]?.message)}</p>}
    </div>
  );
}

export default FormComponentReactForm;