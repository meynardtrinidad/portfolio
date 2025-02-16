import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Button asChild className="py-2 px-4">
        <Link href={"/resume"}>
          Resume
        </Link>
      </Button>
    </>
  );
}
