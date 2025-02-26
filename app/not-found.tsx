import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center mt-auto w-full gap-4">
      <p>/not found</p>
      <Link href="/" className="ml-2 text-secondary underline">Back to Home?</Link>
    </div>
  )
}
