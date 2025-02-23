import { Section } from "@/components/layout/section"
import Link from "next/link"

const About = () => {
  return (
    <Section className="mt-0">
      <div className="flex flex-col gap-[10px] mt-8">
        <p>
          Letting curiosity lead the way, enjoying learning things and overcoming problems.
        </p>
        <p>
          Based in Philippines.
        </p>
      </div>
      <div className="flex flex-col gap-[10px] mt-8">
        <div className="flex flex-row text-secondary">
          <Link
            href={"https://www.linkedin.com"}
            className="underline"
          >
            LinkedIn
          </Link>
          <span className="mr-2">,</span>
          <Link
            href={"https://www.github.com"}
            className="underline"
          >
            GitHub
          </Link>
          <span className="mr-2">,</span>
          <Link
            href={"mailto:meynardjulientrinidad@gmail.com"}
            className="underline"
          >
            meynardjulientrinidad@gmail.com
          </Link>
        </div>
      </div>
    </Section>
  )
}

export { About }
