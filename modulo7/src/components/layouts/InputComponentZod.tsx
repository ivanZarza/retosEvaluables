import { useState } from 'react'
import {  FieldErrors, UseFormRegister } from 'react-hook-form'


// minuto 2:15:00 de la clase FOrmularios 1 explica el checbox, en vez de validar al recibir, valide al enviar, a esperas de que funcione

type FormValues = {
  title: string;
  author: string;
  type: 'Tapa dura' | 'Tapa blanda';
  price: number;
  photo: string;
};

type InputProps = {
  name: 'title' | 'author' | 'type' | 'price' | 'photo'
  placeholder: string
  type: string
  register?: UseFormRegister<FormValues>
  errors: FieldErrors<FormValues>
} & React.InputHTMLAttributes<HTMLInputElement>;


function InputComponentZod(props: InputProps) {

  const [activo, setActivo] = useState<boolean>(false);

  const invalido = props.errors[props.name] || false;

  return (
    <div className={`w-full flex border-2 pl-1.5  flex-col justify-between focus:outline-none ${!invalido ? "bg-gray-200 border-teal-500 " : "bg-red-100 border-red-600"}`}>
      <label>{activo ? `${props.placeholder}` : ''}</label>
      <input
        className="h-10 placeholder:text-2xl focus:outline-none text-2xl placeholder-gray-600 "
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.register?.(props.name)?.onChange(e);
          }}
          {...props.register?.(props.name)}
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

export default InputComponentZod;