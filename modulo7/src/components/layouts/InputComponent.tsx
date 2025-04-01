import { useState, useRef } from 'react'

// minuto 2:15:00 de la clase FOrmularios 1 explica el checbox, en vez de validar al recibir, valide al enviar, a esperas de que funcione

type InputProps = {
  placeholder: string
  name: string
  type: string
  recuperarDatos: ( name: string, value: string | number | boolean ) => void
}


function InputComponent(props: InputProps) {

  const inputRef = useRef<HTMLInputElement>(null);
  

  const [activo, setActivo] = useState(false);

const error= ''

  return (
    <div className="w-full flex bg-gray-200 border-2 pl-1.5 border-teal-500  flex-col justify-between focus:outline-none">
      <label>{activo ? `${props.placeholder}` : ''}</label>
      <input 
        className="h-10 placeholder:text-2xl focus:outline-none text-2xl placeholder-gray-500 "
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        ref={inputRef}
        onFocus={() => setActivo(true)}
        onBlur={() => setActivo(false)}
        onChange={(event) => props.recuperarDatos(event.target.name, event.target.value)
/*             props.type === 'checkbox'
            ? (event) => props.recuperarDatos(event.target.name, event.target.checked)
            : (event) => props.recuperarDatos(event.target.name, event.target.value) */
        } 
      />
      <p>{error ? `${error}` : ''}</p>
    </div>
  );
}

export default InputComponent;