import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Demo order confirmation" };

export default function Confirmation() {
  return (
    <Container className="flex min-h-[65vh] items-center justify-center py-16">
      <section className="surface w-full max-w-xl p-8 text-center sm:p-12">
        <div className="mx-auto mb-7 flex size-20 items-center justify-center rounded-full bg-[#e2ecd8] text-[#254d3c]"><Check className="size-9" /></div>
        <p className="eyebrow mb-4">Demo checkout complete</p>
        <h1 className="font-serif text-4xl tracking-tight">Thank you for trying Shynzo!</h1>
        <p className="mt-5 text-base leading-7 text-neutral-600">Your demo order has been placed successfully.</p>
        <div className="my-7 rounded-xl bg-[#edf1e7] p-5 text-sm leading-6 text-neutral-600">This is a sample confirmation only. No payment was taken, no real order was created, and no email or shipment will be sent. Your bag is still available.</div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row"><Button asChild className="h-12 rounded-lg"><Link href="/">Continue shopping <ArrowUpRight className="size-4" /></Link></Button><Button asChild variant="outline" className="h-12 rounded-lg"><Link href="/cart">Back to your bag</Link></Button></div>
      </section>
    </Container>
  );
}
