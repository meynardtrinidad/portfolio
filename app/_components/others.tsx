import { Section } from "@/components/layout/section"
import data from "@/data/others.json"
import Link from "next/link"

const Others = () => {
  return (
    <Section>
      <div className="flex flex-col gap-[10px]">
        <h2 className="font-bold">Links</h2>
        <p>If you want to know more about me.</p>
      </div>
      <div className="flex flex-col mt-8 gap-2">
        {
          data.contents.map((content, index) => {
            return (
              <Link
                href={`${content.link}`}
                key={index}
                className="underline"
              >
                {content.title}
              </Link>
            )
          })
        }
      </div>
    </Section>
  )
}

export { Others }
