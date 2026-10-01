import React from "react";
import Container from "./Container";
import FooterColumn from "./FooterColumn";
import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Clock, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const footerData = [
  { title: "Company", links: [
    { name: "About us", url: "/about" }, { name: "Contact us", url: "/contact" },
    { name: "Terms & Conditions", url: "/terms&condition" }, { name: "Privacy Policy", url: "/privacy" }, { name: "FAQs", url: "/faq" },
  ]},
  { title: "Shop", links: [
    { name: "Men's fashion", url: "#" }, { name: "Women's fashion", url: "#" },
    { name: "Kids", url: "#" }, { name: "Accessories", url: "#" }, { name: "Home & living", url: "#" },
  ]},
];

const contactItems = [
  { Icon: MapPin, title: "Visit us", value: "Gazipur, Bangladesh" },
  { Icon: Phone, title: "Call us", value: "(123) 456-7890" },
  { Icon: Clock, title: "Working hours", value: "Mon–Fri, 9:00–18:00" },
  { Icon: Mail, title: "Email us", value: "hello@shynzo.com" },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[#d4ddce] bg-[#edf1e7] text-[#254d3c]">
      <Container className="py-0">
        <div className="flex flex-col justify-between gap-5 border-b border-[#d4ddce] py-10 sm:flex-row sm:items-end sm:py-14">
          <div><p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#566a57]">The everyday, reimagined</p><p className="font-serif text-4xl tracking-tight text-[#254d3c] sm:text-5xl">Make room for your favorites.</p></div>
          <Link href="/#collection" className="inline-flex w-fit items-center gap-5 rounded-lg border border-[#bccbb7] bg-[#fafbf7] px-5 py-3 text-sm transition hover:border-[#254d3c] hover:bg-[#e2eadb]">Explore Shynzo <ArrowUpRight className="size-4" /></Link>
        </div>
        <div className="grid grid-cols-1 border-b border-[#d4ddce] sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map(({ Icon, title, value }) => (
            <div key={title} className="flex items-center gap-3 border-[#d4ddce] px-4 py-6 lg:border-r lg:last:border-r-0">
              <Icon className="size-5 shrink-0 text-[#537956]" />
              <div><h3 className="text-sm font-semibold">{title}</h3><p className="text-sm text-[#56665a]">{value}</p></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-10 border-b border-[#d4ddce] py-14 md:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Shynzo" text="mb-4 text-2xl font-black tracking-tight">
            <p className="mb-6 max-w-sm text-sm leading-6 text-[#56665a]">Considered clothing and lifestyle essentials, curated to make everyday dressing feel effortless.</p>
            <div className="flex gap-3">
              {[{ Icon: Facebook, label: "Facebook" }, { Icon: Instagram, label: "Instagram" }, { Icon: Youtube, label: "YouTube" }].map(({ Icon, label }) => (
                <Link key={label} href="#" aria-label={label} className="rounded-full border border-[#c8d4c2] bg-[#fafbf7] p-2 text-[#48634d] transition hover:border-[#254d3c] hover:bg-[#254d3c] hover:text-white"><Icon className="size-4" /></Link>
              ))}
            </div>
          </FooterColumn>
          {footerData.map((column) => <FooterColumn text="mb-4 text-sm uppercase tracking-[0.16em]" key={column.title} title={column.title} links={column.links} />)}
          <FooterColumn text="mb-4 text-sm uppercase tracking-[0.16em]" title="Newsletter">
            <p className="mb-4 text-sm leading-6 text-[#56665a]">New arrivals, private edits, and thoughtful offers—occasionally.</p>
            <form>
              <input type="email" placeholder="Your email address" className="mb-3 h-11 w-full rounded-full border border-[#bccbb7] bg-[#fafbf7] px-4 text-sm outline-none placeholder:text-[#647362] focus:border-[#254d3c] focus:ring-1 focus:ring-[#254d3c]" />
              <Button className="w-full rounded-full bg-[#254d3c] text-white hover:bg-[#3c624a]">Subscribe <ArrowUpRight className="ml-2 size-4" /></Button>
            </form>
          </FooterColumn>
        </div>
        <div className="flex flex-col gap-2 py-6 text-center text-xs text-[#56665a] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Shynzo. All rights reserved.</p><p>Designed for everyday living.</p>
        </div>
      </Container>
    </footer>
  );
}
