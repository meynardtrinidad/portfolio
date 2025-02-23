import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface NavbarProps
  extends React.HTMLAttributes<HTMLElement> { }

const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      className={cn("flex flex-row items-center justify-between", className)}
      {...props}
    >
      <Link href={"/"}>
        <h1 className="font-bold">Meynard Trinidad</h1>
        <span className="text-secondary">Software Engineer</span>
      </Link>
      <Button asChild className="py-2 px-4">
        <Link href={"/resume"}>
          Resume
        </Link>
      </Button>
    </nav>
  )
}

export { Navbar }
