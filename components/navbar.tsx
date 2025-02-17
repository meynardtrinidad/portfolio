import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <h1>
        <span>
          Meynard Trinidad
        </span>
      </h1>
      <Button asChild className="py-2 px-4">
        <Link href={"/resume"}>
          Resume
        </Link>
      </Button>
    </nav>
  )
}

export { Navbar }
