import { Section } from "@/components/layout/section"
import data from "@/data/work.json"
import { cn } from "@/lib/utils"

const isActive = (status: string) => {
  return status === "current"
}

const Work = () => {
  return (
    <Section>
      <div className="flex flex-col gap-[10px]">
        <h2 className="font-bold">Work</h2>
        <p>Currently working under Diversified Infrastructure as a full-stack developer, working with both front-end and back-end technologies daily.</p>
      </div>
      <div className="flex flex-col mt-8 gap-[10px]">
        {
          data.contents.map((content, index) => {
            return (
              <div
                key={index}
                className={
                  cn(
                    "flex flex-row items-center justify-between gap-4",
                    isActive(content.status) ? "text-primary" : "text-secondary"
                  )
                }
              >
                <p className="text-nowrap">
                  {content.company}
                </p>
                <hr className="border-primary w-full" />
                <p className="text-nowrap">
                  {content.date}
                </p>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}

export { Work }
