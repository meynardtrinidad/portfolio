import { Card } from "@/components/card"
import { Section } from "@/components/layout/section"
import data from "@/data/project.json"
import Link from "next/link"

const PATH = "/projects"

const Project = () => {
  return (
    <Section>
      <div className="flex flex-col gap-[10px]">
        <h2 className="font-bold">Projects</h2>
      </div>
      <div className="flex flex-col mt-8 gap-6">
        {
          data.contents.map((content, index) => {
            return (
              <Link
                href={`${PATH}${content.link}`}
                key={index}
              >
                <Card>
                  <div>
                    <Card.Title>{content.title}</Card.Title>
                    <Card.Description>{content.description}</Card.Description>
                  </div>
                </Card>
              </Link>
            )
          })
        }
      </div>
    </Section>
  )
}

export { Project }
