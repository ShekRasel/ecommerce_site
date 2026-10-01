"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { ArrowLeft, ArrowRight, Check, ShoppingBag, Truck } from "lucide-react";
import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import NoAccessToCart from "@/components/NoAccessToCart";
import FormatedPrice from "@/components/FormatedPrice";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store";

const fields = [
  { name: "name", label: "Full name", autoComplete: "name", type: "text", placeholder: "Your full name" },
  { name: "email", label: "Email address", autoComplete: "email", type: "email", placeholder: "you@example.com" },
  { name: "phone", label: "Phone number", autoComplete: "tel", type: "tel", placeholder: "Your phone number" },
  { name: "address", label: "Street address", autoComplete: "street-address", type: "text", placeholder: "House, road, area" },
  { name: "city", label: "City", autoComplete: "address-level2", type: "text", placeholder: "Dhaka" },
  { name: "postal", label: "Postal code", autoComplete: "postal-code", type: "text", placeholder: "1200" },
] as const;

export default function Checkout() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  const [ready, setReady] = useState(false);
  const [reviewing, setReviewing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [details, setDetails] = useState<Record<string, string>>({});
  const heading = useRef<HTMLHeadingElement>(null);
  const submitted = useRef(false);
  const { items, getSubTotalPrice, getTototalPrice } = useCartStore();
  useEffect(() => setReady(true), []);
  useEffect(() => { if (reviewing) heading.current?.focus(); }, [reviewing]);

  if (!ready || !isLoaded) return <Container className="py-24 text-center"><p role="status">Preparing checkout...</p></Container>;
  if (!isSignedIn) return <NoAccessToCart />;
  if (!items.length) return <EmptyCart />;

  const subtotal = getSubTotalPrice();
  const total = getTototalPrice();
  const unavailable = items.some(({ product, quantity }) => product.stock === 0 || (typeof product.stock === "number" && quantity > product.stock));

  return (
    <Container className="py-8 sm:py-14">
      <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-neutral-600"><ArrowLeft className="size-4" /> Back to your bag</Link>
      <div className="mb-8 mt-8"><p className="eyebrow mb-3">One step closer to your favorites</p><h1 className="font-serif text-4xl tracking-tight sm:text-5xl">Checkout</h1></div>
      <ol aria-label="Checkout progress" className="mb-8 flex flex-wrap gap-6 text-sm">
        {["Delivery details", "Review order", "Confirmation"].map((label, index) => <li key={label} aria-current={index === (reviewing ? 1 : 0) ? "step" : undefined} className={`flex items-center gap-2 ${index === (reviewing ? 1 : 0) ? "font-semibold text-neutral-950" : "text-neutral-500"}`}><span className="flex size-7 items-center justify-center rounded-full border border-[#c8d4c2] bg-[#edf1e7] text-xs">{reviewing && index === 0 ? <Check className="size-3" /> : index + 1}</span>{label}</li>)}
      </ol>
      <p className="mb-8 rounded-xl border border-[#d4ddce] bg-[#edf1e7] p-4 text-sm leading-6">Demo checkout only. No payment will be collected, no order will be sent, and your details are not saved. You can use sample details to try the flow.</p>
      <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
        <section className="surface p-6 sm:p-8">
          <h2 ref={heading} tabIndex={-1} className="mb-6 text-2xl font-semibold tracking-tight">{reviewing ? "Everything look right?" : "Where should it go?"}</h2>
          <form hidden={reviewing} onSubmit={(event) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            const values = Object.fromEntries(fields.map(({ name }) => [name, String(form.get(name) || "").trim()]));
            if (Object.values(values).some(value => !value)) return;
            setDetails(values);
            setReviewing(true);
          }}>
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map(field => <div key={field.name} className={field.name === "address" ? "sm:col-span-2" : ""}><label htmlFor={field.name} className="mb-2 block text-sm font-medium">{field.label}</label><input id={field.name} name={field.name} type={field.type} autoComplete={field.autoComplete} placeholder={field.placeholder} required maxLength={field.name === "address" ? 250 : 100} pattern={field.type === "text" ? ".*\\S.*" : undefined} className="h-12 w-full rounded-lg border border-[#c8d4c2] bg-[#fafbf7] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#537956]" /></div>)}
            </div>
            <div className="mt-7 rounded-xl bg-[#f3f6ee] p-5"><h3 className="flex items-center gap-2 text-sm font-semibold"><Truck className="size-4" /> Demo delivery</h3><p className="mt-2 text-sm text-neutral-600">Complimentary delivery for this preview. No shipment will be created.</p></div>
            <fieldset className="mt-7"><legend className="mb-3 font-semibold">Payment</legend><label className="flex items-start gap-3 rounded-xl border border-[#c8d4c2] p-4"><input type="radio" name="payment" value="demo" defaultChecked className="mt-1 accent-[#254d3c]" /><span className="text-sm"><span className="font-semibold">Demo payment</span><span className="mt-1 block text-neutral-600">No card or bank details required.</span></span></label></fieldset>
            <Button type="submit" disabled={unavailable} className="mt-8 h-12 w-full rounded-lg">Review order <ArrowRight className="size-4" /></Button>
          </form>
          {reviewing && <div>
            <div className="rounded-xl bg-[#f3f6ee] p-5"><h3 className="mb-3 text-sm font-semibold">Delivery details</h3><p className="text-sm leading-7 text-neutral-600">{details.name}<br />{details.address}<br />{details.city}, {details.postal}<br />{details.email}<br />{details.phone}</p></div>
            <p className="my-5 text-sm text-neutral-600">Payment: Demo payment · Delivery: Complimentary</p>
            <p className="text-sm leading-6 text-neutral-600">Placing this demo order displays a sample confirmation. Your bag will be kept so you can try the checkout again.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button type="button" variant="outline" disabled={submitting} onClick={() => setReviewing(false)} className="h-12 rounded-lg">Edit details</Button><Button disabled={submitting || unavailable} className="h-12 flex-1 rounded-lg" onClick={() => { if (submitted.current || unavailable) return; submitted.current = true; setSubmitting(true); router.push("/checkout/confirmation"); }}>{submitting ? "Opening confirmation..." : "Place demo order"}<ArrowRight className="size-4" /></Button></div>
          </div>}
        </section>
        <aside className="surface p-6 sm:p-8">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold"><ShoppingBag className="size-5" /> Your order</h2>
          <ul className="divide-y divide-[#dfe6dc]">{items.map(({ product, quantity }) => <li key={product._id} className="flex justify-between gap-4 py-4 first:pt-0"><div className="min-w-0"><p className="break-words text-sm font-medium">{product.name}</p><p className="mt-1 text-xs text-neutral-500">Quantity: {quantity}</p></div><FormatedPrice amount={(product.price ?? 0) * quantity} className="shrink-0 text-sm font-medium" /></li>)}</ul>
          <div className="mt-5 space-y-4 border-t border-[#dfe6dc] pt-5 text-sm"><div className="flex justify-between"><span>Subtotal</span><FormatedPrice amount={subtotal} className="" /></div><div className="flex justify-between"><span>Savings</span><FormatedPrice amount={subtotal - total} className="" /></div><div className="flex justify-between"><span>Demo delivery</span><span>Free</span></div><div className="flex justify-between border-t border-[#dfe6dc] pt-5 text-lg font-semibold"><span>Total</span><FormatedPrice amount={total} className="" /></div></div>
          {unavailable && <p role="alert" className="mt-5 text-sm text-red-700">Some quantities exceed available stock. <Link href="/cart" className="underline">Update your bag</Link> to continue.</p>}
        </aside>
      </div>
    </Container>
  );
}
