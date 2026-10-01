import {
  ArrowRight,
  Headphones,
  PackageCheck,
  RotateCcw,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Your orders",
  description: "Review your Shynzo order history and delivery status.",
};

const orderBenefits = [
  {
    icon: PackageCheck,
    title: "Track every delivery",
    description: "Order progress and delivery updates will appear here.",
  },
  {
    icon: RotateCcw,
    title: "Easy returns",
    description: "Return details will stay alongside the relevant order.",
  },
  {
    icon: Headphones,
    title: "Need help?",
    description: "Our support pages are available whenever you need them.",
  },
];

export default function Orders() {
  return (
    <div className="bg-[#f5f7f1]">
      <Container className="py-12 sm:py-16 lg:py-20">
        <header className="mx-auto mb-9 max-w-2xl text-center">
          <p className="eyebrow mb-3">Your account</p>
          <h1 className="font-serif text-4xl tracking-tight text-[#254d3c] sm:text-5xl">
            Your orders
          </h1>
          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base">
            Keep an eye on current deliveries and revisit everything you have
            ordered from Shynzo.
          </p>
        </header>

        <SignedIn>
          <section className="surface mx-auto max-w-3xl overflow-hidden text-center">
            <div className="px-6 py-12 sm:px-12 sm:py-16">
              <div className="mx-auto mb-7 flex size-20 items-center justify-center rounded-full bg-[#e5eddc] text-[#254d3c]">
                <ShoppingBag className="size-8" strokeWidth={1.6} />
              </div>
              <p className="eyebrow mb-3">Nothing here yet</p>
              <h2 className="font-serif text-3xl tracking-tight text-[#254d3c]">
                Your order history is empty
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-600">
                When order storage is connected, purchases made with this
                account will appear here with their latest status.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-lg px-6">
                  <Link href="/#collection">
                    Start shopping <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-lg px-6">
                  <Link href="/cart">View your bag</Link>
                </Button>
              </div>
            </div>
            <p className="border-t border-[#dfe6dc] bg-[#edf1e7] px-6 py-4 text-xs leading-5 text-neutral-600 sm:text-sm">
              Shynzo checkout is currently a demo, so test checkouts do not
              create saved orders.
            </p>
          </section>
        </SignedIn>

        <SignedOut>
          <section className="surface mx-auto max-w-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="mx-auto mb-7 flex size-20 items-center justify-center rounded-full bg-[#e5eddc] text-[#254d3c]">
              <ShoppingBag className="size-8" strokeWidth={1.6} />
            </div>
            <p className="eyebrow mb-3">Welcome back</p>
            <h2 className="font-serif text-3xl tracking-tight text-[#254d3c]">
              Sign in to see your orders
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-600">
              Use the account linked to your purchases to view your order
              history and delivery updates.
            </p>
            <SignInButton mode="modal">
              <Button className="mt-8 h-12 rounded-lg px-7">
                Sign in <ArrowRight className="size-4" />
              </Button>
            </SignInButton>
          </section>
        </SignedOut>

        <div className="mx-auto mt-8 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-[#d9e2d4] bg-[#d9e2d4] sm:grid-cols-3">
          {orderBenefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-[#fafbf7] p-6">
              <Icon className="mb-4 size-5 text-[#537956]" strokeWidth={1.7} />
              <h3 className="text-sm font-semibold text-[#254d3c]">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-neutral-600">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
