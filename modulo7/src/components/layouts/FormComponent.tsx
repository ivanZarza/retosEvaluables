

type formProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void,
  children: React.ReactNode,
}



function FormComponent(props: formProps) {

  return <>
    <form onSubmit={props.onSubmit} className="shadow-teal-300 inset-shadow-xs shadow-outline p-5 shadow-lg flex flex-col gap-3 bg-gray-100
    sm:p-10 sm:gap-5 sm:rounded-lg sm:shadow-md
    md:p-20 ">
      {props.children}
      <button  type="submit"  >Enviar</button>
    </form>
  </>
}

export default FormComponent;