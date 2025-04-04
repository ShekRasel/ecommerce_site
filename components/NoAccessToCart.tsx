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
    <div className="flex items-center py-12 md:py-32 bg-gray-100 p-4 justify-center ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <Logo className="">Synzo</Logo>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Wellcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Log in to view your cart items and checkout. Don&apos;t miss out on
            you favorite products!
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
