import { Children, createElement } from "react"
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form"

type FormValues = {
  name: string
  lastName: string
  email: string
  photo: string
  password1: string
  password2: string
}

type formProps = {
  onSubmit: SubmitHandler<FormValues>,
  children: React.ReactNode,
  defaultValues?: FormValues
}

type ChildWithProps = React.ReactElement<{
  name?: string; 
  register?: UseFormRegister<FormValues>; 
}>;


function FormComponentReactForm(props: formProps) {
  const methods = useForm({ defaultValues: props.defaultValues })
  const { handleSubmit } = methods

  return <>
<form className="shadow-teal-300 inset-shadow-xs shadow-outline p-20 shadow-lg flex flex-col gap-3 bg-gray-100"
          onSubmit={handleSubmit(props.onSubmit)}
    >
      {Children.map(props.children, (child) => {
        const typedChild = child as ChildWithProps

        return typedChild.props.name
          ? createElement(typedChild.type, {
              ...{
                ...typedChild.props,
                register: methods.register,
                key: typedChild.props.name,
              },
            })
          : child
      })}
      <button type="submit" className=" w-auto"  >Enviar</button>
    </form>
  </>
}

export default FormComponentReactForm;