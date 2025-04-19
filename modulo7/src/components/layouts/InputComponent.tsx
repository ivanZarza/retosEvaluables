import { useState, useRef } from 'react'

// minuto 2:15:00 de la clase FOrmularios 1 explica el checbox, en vez de validar al recibir, valide al enviar, a esperas de que funcione

type InputProps = {
  placeholder: string
  name: string
  type: string
  pattern: string
  error: { [key: string]: boolean }
  recuperarDatos: (name: string, value: string | number | boolean) => void
  validarDatos: (name: string, value: string | number | boolean) => void
  generarMensajeError: (name: string, value: string | number | boolean | undefined) => string
}


function InputComponent(props: InputProps) {

  const inputRef = useRef<HTMLInputElement>(null);
  const [activo, setActivo] = useState<boolean>(false);

  const valido = !props.error[props.name] || false;

  return (
    <div className={`w-full flex border-2 pl-1.5  flex-col justify-between focus:outline-none ${valido ? "bg-gray-200 border-teal-500 " : "bg-red-100 border-red-600"}`}>
      <label>{activo ? `${props.placeholder}` : ''}</label>
      <input
        className="h-7 placeholder:text-lg text-lg  focus:outline-none  placeholder-gray-600 
        sm:placeholder:text-xl sm:text-xl sm:h-8
        md:placeholder:text-2xl md:text-2xl md:h-10"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        ref={inputRef}
        pattern={props.pattern}
        onFocus={() => setActivo(true)}
        onBlur={() => setActivo(false)}
        onChange={(event) => {
          props.recuperarDatos(event.target.name, event.target.value);
          props.validarDatos(event.target.name, event.target.value);
        }
        }
      /*     props.type === 'checkbox'
                  ? (event) => props.recuperarDatos(event.target.name, event.target.checked)
                  : (event) => props.recuperarDatos(event.target.name, event.target.value) */
      />

      {!valido && <p className='text-red-600 text-sm sm:text-lg '>{props.generarMensajeError(props.name, inputRef.current?.value)}</p>}

    </div>
  );
}

export default InputComponent;