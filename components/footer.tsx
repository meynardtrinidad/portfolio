import { cn } from "@/lib/utils"

interface FooterProps
  extends React.HTMLAttributes<HTMLElement> { }

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer
      className={cn("text-secondary mb-16", className)}
      {...props}
    >
      <p>{new Date().getFullYear()}</p>
      <p>Stay Curious.</p>
    </footer>
  )
}

export { Footer }
