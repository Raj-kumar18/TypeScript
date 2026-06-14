import type { PropsWithChildren,ReactNode } from "react"

interface ChaiProps extends PropsWithChildren {
    title : string  ;
    footer?:ReactNode
}

const Card = ({title,children,footer}:ChaiProps) => {
  return (
    <section>
        <h2>{title}</h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
    </section>
  )
}

export default Card