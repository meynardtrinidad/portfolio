import { cn } from "@/lib/utils"
import { Slot } from "../ui/slot"

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean
}

const Section = ({ asChild, className, children, ...props }: SectionProps) => {
  const Comp = asChild ? Slot : "section"

  return (
    <Comp
      className={cn("flex flex-col justify-center mt-16 w-[678px] gap-[10px]", className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Section }
