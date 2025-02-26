import { Section } from "@/components/layout/section"
import data from "@/data/links.json"
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
            href={data.linked_in.link}
            className="underline"
            target="_blank"
          >
            {data.linked_in.label}
          </Link>
          <span className="mr-2">,</span>
          <Link
            href={data.github.link}
            className="underline"
            target="_blank"
          >
            {data.github.label}
          </Link>
          <span className="mr-2">,</span>
          <Link
            href={data.email.link}
            className="underline"
            target="_blank"
          >
            {data.email.label}
          </Link>
        </div>
      </div>
    </Section>
  )
}

export { About }
