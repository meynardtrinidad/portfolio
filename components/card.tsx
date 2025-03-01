import { cn } from "@/lib/utils"

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> { }

const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn("hover:bg-black/5 rounded-md transition-colors p-4 -m-4", className)}
      {...props}
    />
  )
}

interface TitleProps
  extends React.HTMLAttributes<HTMLElement> { }

const Title = ({ className, ...props }: TitleProps) => {
  return (
    <strong
      className={cn("font-bold", className)}
      {...props}
    />
  )
}

interface DescriptionProps
  extends React.HTMLAttributes<HTMLElement> { }

const Description = ({ className, ...props }: DescriptionProps) => {
  return (
    <p
      className={cn("text-secondary", className)}
      {...props}
    />
  )
}

Card.Title = Title
Card.Description = Description

export { Card }
