import { Back } from "@/components/back";
import { Section } from "@/components/layout/section";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Section>
      <Back />
      {children}
    </Section>
  );
}
