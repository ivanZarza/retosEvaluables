import { ReactNode } from "react";

type HeadingProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: ReactNode
  title?: string
}

function Heading(props: HeadingProps) {

  const { children, level, title  } = props;
  const acceptedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  const Tag = acceptedTags.includes(level) ? level : 'h1';

  const headingClasses = {
    h1: 'text-5xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-lg',
    h5: 'text-md',
    h6: 'text-sm'
  }

  return(
    <div className="w-full flex h-1/7 justify-center items-center " >
    <Tag className={`${headingClasses[Tag]} text-[#484ec7] titulo`}   >{title || children}</Tag>
    </div> //Asi ponemos el valor de Tag a headingclases
)
}

export default Heading;