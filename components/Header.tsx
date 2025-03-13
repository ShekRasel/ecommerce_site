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
import { ListIcon } from "lucide-react";

async function Header() {
  const user = await currentUser();
  console.log(user);
  return (
    <header className="border-b ">
      <Container className="flex py-5  justify-between items-center text-lightColor  ">
        <div className=" w-1/2 hidden lg:block">
          <HeaderMenu />
        </div>
        <div className="flex   w-full lg:w-1/2 justify-between">
          <div className="w-auto  flex items-center justify-center gap-2.5">
            <MobileMenu />
            <Logo className=" lg:text-2xl font-bold italic">Amazona</Logo>
          </div>

          <div className="w-auto  flex  items-center justify-end gap-5">
            <SearchBar />
            <CartItem />
            <ClerkLoaded>
              <SignedIn>
                <Link
                  href={"/orders"}
                  className=" relative group hoverEffect  "
                >
                  <ListIcon className="w-5 group-hover:text-black hoverEffect" />
                  <div className="bg-black rounded-full flex items-center justify-center p-2 absolute w-2 h-2 -top-2.5 -right-2 ">
                    <span className=" text-white">0</span>
                  </div>
                </Link>
                <UserButton />
              </SignedIn>
              {!user && (
                <SignInButton mode="modal">
                  <button className=" font-semibold hover:text-black hoverEffect cursor-pointer">
                    Login
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
