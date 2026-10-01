import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Logo from "./Logo";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const NoAccessToCart = () => {
  return (
    <div className="flex items-center justify-center p-4 py-16 md:py-32">
      <Card className="surface w-full max-w-md border-black/5 p-3">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <Logo className="text-2xl">Shynzo</Logo>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome back
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-5 text-center text-sm leading-6 text-neutral-500">
            Sign in to view your bag and continue securely to checkout.
          </p>
          <SignInButton mode="modal">
            <Button className="w-full font-semibold" size="lg">
              Sign in
            </Button>
          </SignInButton>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div>Don&apos;t have an account?</div>

          <SignUpButton mode="modal">
            <Button className="w-full font-semibold" size="lg" variant='outline'>
              Sign up
            </Button>
          </SignUpButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NoAccessToCart;
