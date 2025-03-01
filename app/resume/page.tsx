import { Back } from "@/components/back";
import { Section } from "@/components/layout/section";
import links from "@/data/links.json"
import Link from "next/link";

export default function Page() {
  return (
    <Section>
      <Back />
      <div className="relative text-black">
        <div className="-translate-x-[69px] bg-white w-[612pt] p-16 font-serif">
          <section className="flex flex-col justify-center items-center w-full">
            <p>
              <span className="font-bold">Meynard Julien B. Trinidad</span>
            </p>
            <p>
              <span>+63 921 319 7669</span>
              <span> | </span>
              <Link
                className="text-blue-500"
                href={links.email.link}
                target="_blank"
              >
                {links.email.label}
              </Link>
              <span> | </span>
              <Link
                className="text-blue-500"
                href={links.linked_in.link}
                target="_blank"
              >
                {links.linked_in.label}
              </Link>
              <span> | </span>
              <Link
                className="text-blue-500"
                href={links.github.link}
                target="_blank"
              >
                {links.github.label}
              </Link>
            </p>
          </section>

          <br />

          <section className="flex flex-col gap-2">
            <strong>EXPERIENCE</strong>

            <hr />

            <div>
              <p className="flex flex-row justify-between">
                <span className="font-bold">Full-Stack Developer</span>
                <span>May 2023 - Present</span>
              </p>

              <p className="flex flex-row justify-between">
                <span>
                  Diversified Infrastructure | Next.js, React, Node.js, Express,
                  PostgreSQL, TypeScript, Jest
                </span>
              </p>

              <ul className="list-disc list-inside">
                <li>
                  <span>
                    Developed a full-stack web application using Next.js, React,
                    Node.js, Express and PostgreSQL that is expected to handle 100k+
                    records a day.
                  </span>
                </li>
                <li>
                  <span>
                    Implemented RESTful APIs to provide a seamless communication
                    with the frontend and the backend.
                  </span>
                </li>
                <li>
                  <span>
                    Designed and developed reusable custom components and hooks
                    using React.
                  </span>
                </li>
                <li>
                  <span>
                    Developed internal tools using TypeScript that are adopted into
                    2+ projects internally, reducing redundant logics and code and
                    speeding up the development process.
                  </span>
                </li>
                <li>
                  <span>
                    Implemented unit tests using the Jest framework to ensure the
                    reliability of utilities and services developed.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="flex flex-row justify-between">
                <span className="font-bold">Freelance Web Developer</span>
                <span>January 2023 - December 2023</span>
              </p>
              <p>
                <span>
                  JavaScript, TypeScript, Node.js, React, Express Tailwind CSS, PHP,
                  MySQL, Laravel, Figma
                </span>
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <span>
                    Delivered custom web solutions for over 3+ clients using
                    different programming languages and tools like JavaScript,
                    TypeScript, PHP, MySQL, Figma and frameworks like Laravel and
                    Express.
                  </span>
                </li>
                <li>
                  <span>
                    Developed management systems to automate previous manual record
                    keeping processes.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <br />

          <section className="flex flex-col gap-2">
            <strong>PROJECTS</strong>

            <hr />

            <div>
              <strong>JTR IT Landing Page</strong>
              <p className="flex flex-row justify-between">
                <span>Astro, TailwindCSS, JavaScript, Figma</span>
              </p>

              <ul className="list-disc list-inside">
                <li>
                  <span>Designed the landing page and prototype using Figma.</span>
                </li>
                <li>
                  <span
                  >Developed an interactive and responsive landing page for JTR IT
                    Solutions using Astro, TailwindCSS, and JavaScript.</span
                  >
                </li>
              </ul>
            </div>
          </section>

          <br />

          <section className="flex flex-col gap-2">
            <strong>TECHNICAL SKILLS</strong>

            <hr />

            <p>
              <span className="font-bold">Languages: </span>
              <span>JavaScript, TypeScript, CSS, HTML, SQL, PHP</span>
            </p>
            <p>
              <span className="font-bold">Frameworks: </span>
              <span>Next.js, React, Node.js, Express, Laravel</span>
            </p>
            <p>
              <span className="font-bold">Tools: </span>
              <span>Git, Figma, Linux</span>
            </p>
          </section>

          <br />

          <section className="flex flex-col gap-2">
            <strong>EDUCATION</strong>

            <hr />

            <div className="flex flex-row justify-between">
              <p className="flex flex-col">
                <span className="font-bold">FEU Institute of Technology</span>
                <span>Bachelor of Science in Information and Technology</span>
              </p>
              <span>February 2024</span>
            </div>
          </section>
        </div>
      </div>
    </Section>
  )
}
