import { ReactNode } from "react";

type HeadingProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  title?: string
  op1?:string
}

function Heading(props: HeadingProps) {

  const { children, level, title, ...restoProps  } = props;
  const acceptedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  const Tag = acceptedTags.includes(level) ? level : 'h1';

  const headingClasses = {
    h1: 'text-3xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-lg',
    h5: 'text-md',
    h6: 'text-sm'
  }

  return(

    <Tag className={headingClasses[Tag]} {...restoProps}>{title || children}</Tag> //Asi ponemos el valor de Tag a headingclases
)//...restoProps se usa para pasar un objeto que contie las props que no se usan en este componente
}

export default Heading;