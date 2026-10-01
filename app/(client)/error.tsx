"use client";

import Container from "@/components/Container";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <Container className="flex min-h-[65vh] items-center justify-center py-16">
      <div className="surface max-w-xl p-8 text-center sm:p-12">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-amber-50 text-amber-700"><AlertTriangle className="size-6" /></div>
        <p className="eyebrow mb-3">Something went wrong</p>
        <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">We couldn&apos;t load this page.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-500">It may be a temporary connection issue. Try again, or return to the storefront.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={reset} className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700"><RefreshCw className="size-4" />Try again</button>
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold hover:border-black/30"><ArrowLeft className="size-4" />Back home</Link>
        </div>
      </div>
    </Container>
  );
}
