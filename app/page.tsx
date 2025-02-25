import { About } from "./_components/about";
import { Others } from "./_components/others";
import { Project } from "./_components/projects";
import { Work } from "./_components/works";

export default function Page() {
  return (
    <>
      <About />
      <Work />
      <Project />
      <Others />
    </>
  );
}
