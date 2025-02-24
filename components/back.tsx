import { cn } from "@/lib/utils"
import { CornerUpLeft } from "lucide-react"
import Link from "next/link"

interface BackProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

const Back = ({ className, ...props }: BackProps) => {
  return (
    <Link
      className={cn("flex flex-row text-secondary gap-2 items-center w-fit p-2 -ml-2", className)}
      href={"/"}
      {...props}
    >
      <CornerUpLeft size={"16px"} />
      Back
    </Link >
  )
}

export { Back }
