import { cn } from "@/lib/utils"

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement> { }

const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section
      className={cn("flex flex-col justify-center m-auto w-[678px]", className)}
      {...props}
    >
      {children}
    </section>
  )
}

export { Section }
