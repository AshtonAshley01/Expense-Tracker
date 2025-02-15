"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import image1 from "../../assets/image1.svg"

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={image1} alt="logo" width={40} height={25} className="mr-3"/>
        <span className="text-blue-800  font-bold text-xl">SMART-FINANCE</span>
      </div>
      {isSignedIn ? (
        <div className="flex gap-3 items-center">
        <Link href={"/dashboard"}>
          <Button variant="outline" className="rounded-full">
            Dashboard
          </Button>
        </Link>
      </div>,
        <UserButton />
        
      ) : (
        <div className="flex gap-3  items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;