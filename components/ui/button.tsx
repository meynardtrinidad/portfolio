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
      className={cn("bg-primary text-white rounded-md", className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button }
