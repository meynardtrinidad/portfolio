import { cn } from "@/lib/utils"
import { Slot } from "./slot"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Button = ({ asChild, className, children, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button }
