import Container from "@/components/Container";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="flex min-h-[65vh] items-center justify-center py-16">
      <div className="max-w-2xl text-center">
        <p className="text-8xl font-black tracking-[-0.08em] text-neutral-200 sm:text-9xl">404</p>
        <p className="eyebrow -mt-3 mb-4">Page not found</p>
        <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">This piece is no longer in the edit.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-500">The page may have moved, or the item may no longer be available.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700"><ArrowLeft className="size-4" />Return to shop</Link>
      </div>
    </Container>
  );
}
