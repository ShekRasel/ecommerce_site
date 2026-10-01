import React from "react";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartItem from "./CartItem";
import { SignInButton, ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { ListIcon, UserRound } from "lucide-react";
import { getAllCategories } from "@/sanity/helpers/queries";

async function Header() {
  const user = await currentUser();

  const categories = await getAllCategories();
  
  
  return (
    <header className="store-header sticky top-0 z-50 border-b border-[#dfe6dc] bg-[#fafbf7]">
      <div className="bg-[#254d3c] py-2 text-center text-[10px] font-medium tracking-[0.08em] text-[#eff5e9] sm:text-xs">
        Complimentary delivery on orders over BDT 120
      </div>
      <Container className="flex min-h-20 items-center justify-between py-3 text-neutral-600">
        <div className="flex w-full items-center justify-between gap-6">
          <div className="w-auto  flex items-center justify-center gap-2.5">
            <MobileMenu categories={categories}/>
            <Logo className="text-2xl lg:text-[26px]">Shynzo</Logo>
          </div>
          <div className="hidden min-w-0 flex-1 justify-center overflow-x-auto lg:flex"><HeaderMenu categories={categories}/></div>
          <div className="flex w-auto items-center justify-end gap-2 sm:gap-3">
            <SearchBar />
            <CartItem />
            <ClerkLoaded>
              <SignedIn>
                <Link
                  href={"/orders"}
                  className="icon-button relative hidden sm:inline-flex"
                  aria-label="View orders"
                >
                  <ListIcon className="w-5 group-hover:text-black hoverEffect" />
                  <div className="bg-black rounded-full flex items-center justify-center p-2 absolute w-2 h-2 -top-2.5 -right-2 ">
                    <span className="text-[9px] text-white">0</span>
                  </div>
                </Link>
                <UserButton />
              </SignedIn>
              {!user && (
                <SignInButton mode="modal">
                  <button className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full bg-neutral-950 px-4 text-sm font-semibold text-white transition hover:bg-amber-700">
                    <UserRound className="size-4" /><span className="hidden sm:inline">Sign in</span>
                  </button>
                </SignInButton>
              )}
            </ClerkLoaded>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
